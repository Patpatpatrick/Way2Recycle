import {Meteor} from 'meteor/meteor';
import Links from '/imports/api/links';
import '/imports/api/items.js';
import {Items} from "../imports/api/items";
import {Promise} from 'meteor/promise';
import {WebApp} from 'meteor/webapp';


function insertLink(title, url) {
    Links.insert({title, url, createdAt: new Date()});
}

WebApp.connectHandlers.use('/v1/item/', (req, res, next) => {

    res.setHeader("Access-Control-Allow-Origin", "*");

    var token = req.url.split('/')[1];
    token = token || 'no token';
    let oneItem = Items.findOne({_id: token});
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify(oneItem));
});

// tutorial
// https://hashnode.com/post/web-api-using-meteor-webapp-ciqgn0ukj0irtdd53uy12h6ia
WebApp.connectHandlers.use('/v1/items', (req, res, next) => {
    // res.writeHead(200);
    // res.end(`Hello world from: ${Meteor.release}`);
    res.setHeader("Access-Control-Allow-Origin", "*");

    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    const json = Meteor.call('getItems');
    res.end(JSON.stringify(json));
});

Meteor.methods({
    'mySearch': function (searchValue) {
        let items = [];
        // Search  by empty keyword
        if (searchValue === "" || searchValue === undefined) {
            Items.find({}, {sort: {date: -1}}).forEach((entry) => {
                items.push(entry);
            })
        } else {
            Items.find({$text: {$search: searchValue}}, {sort: {date: -1}}).forEach((entry) => {
                items.push(entry);
            });
        }
        return items;
    }
})


Meteor.methods({
    'createItem': function (item) {
        item.price = parseInt(item['price'])
        item.date = new Date(item.date)
        Items.insert(item);
    }
});

Meteor.methods({
    'getItems': function () {
        let items = [];
        Items.find({}, {sort: {date: -1}}).forEach((entry) => {
            items.push(entry);
        })
        return items;
    }
});


Meteor.methods({
    'getItemsByParam': function (queryParam) {
        let queryArray = [{}]

        //{category : 'Appliance'}
        if (queryParam['category'] !== 'None') {
            let categoryQuery = {category: ''}
            categoryQuery.category = queryParam['category']
            queryArray.push(categoryQuery)
        }

        // if user has left this field blank, then queryParam['minPrice'] will be a number
        // else if user typed a number, the result is a string version.
        let queryParamMinPrice = queryParam['minPrice']
        let queryParamMaxPrice = queryParam['maxPrice']

        if (isNaN(queryParamMinPrice)
            || isNaN(queryParamMaxPrice)) {
            return []
        }

        // at this point price string is guaranteed to be NON-empty
        if (typeof queryParamMinPrice !== 'number' && queryParamMinPrice !== "") {
            let minPrice = parseInt(queryParamMinPrice)
            let minQuery = {price: {$gte: ''}}
            minQuery.price.$gte = minPrice
            queryArray.push(minQuery)
        }

        if (typeof queryParamMaxPrice !== 'number' && queryParamMaxPrice !== "") {
            let maxPrice = parseInt(queryParamMaxPrice)
            let maxQuery = {price: {$lte: ''}}
            maxQuery.price.$lte = maxPrice
            queryArray.push(maxQuery)
        }

        if (queryParam['keyword'] !== "" || queryParam['keyword'] ===undefined) {
            let textQuery = {$text: {$search: ''}}
            textQuery.$text.$search = queryParam['keyword']
            queryArray.push(textQuery)
        }

        let dateQuery  = {date:1}

        if (queryParam['sortDate']==="latest") dateQuery.date = -1

        let itemArray = Items.find({$and: queryArray}, {sort: dateQuery}).fetch()
        return itemArray;
    }
});


Meteor.methods({
    'getOneItem': function (pass_id) {
        let oneItem = Items.findOne({_id: pass_id});
        return oneItem;
    }
});


Meteor.methods({
    'getUserItem': function (user_id) {
        let items = Items.find({user_id: user_id}).fetch();
        return items;
    }
});


Meteor.methods({
    'deleteOneItem': function (pass_id) {
        Items.remove({_id: pass_id});
    }
});


Meteor.methods({
    'updateOneItem': function (pass_id, obj) {
        Items.update({_id: pass_id}, {
            $set: {
                title: obj.title,
                description: obj.description,
                location: obj.location,
                price: parseInt(obj.price),
                category: obj.category,
                date: obj['date'],
                imagePreviewUrl: obj.imagePreviewUrl,
                attribute: obj.attribute,
                like: obj.like,
            }
        });
    }
});
Meteor.methods({
    getGoogleUserEmail() {
        const services = Meteor.user().services;
        // replace with actual profile picture property
        return services.google && services.google.email;
    }
});


Meteor.startup(() => {

    if (Meteor.isServer) {
        Items.rawCollection().createIndex({
            "title": "text",
            "description": "text"
        })
    }


    process.env.MAIL_URL = 'smtp://apikey:' +
        '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'+
        '@smtp.sendgrid.net:587';


    Accounts.emailTemplates.resetPassword.text = function (user, url) {
        //url = url.replace('#/', '');
        //url = url.replace('resetPassword-password/', '')
        return `Click this link to reset your password: ${url}`;
    }

    Accounts.emailTemplates.from = "Way2Recycle <no-reply@way2recycle.herokuapp.com>"


    ServiceConfiguration.configurations.remove({service: 'google'})
    ServiceConfiguration.configurations.insert({
        service: 'google',
        clientId: '1056358074723-ge6pncu7ifjsj1i2f27tfb0ugseiothc.apps.googleusercontent.com',
        secret: 'jFNRcJtereoiESUv3H3HrSl_'
    });


    // If the Links collection is empty, add some data.
    if (Links.find().count() === 0) {
        insertLink(
            'Do the Tutorial',
            'https://www.meteor.com/tutorials/react/creating-an-app'
        );

        insertLink(
            'Follow the Guide',
            'http://guide.meteor.com'
        );

        insertLink(
            'Read the Docs',
            'https://docs.meteor.com'
        );

        insertLink(
            'Discussions',
            'https://forums.meteor.com'
        );
    }
});
