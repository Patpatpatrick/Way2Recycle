import {Meteor} from 'meteor/meteor';
import Links from '/imports/api/links';
import '/imports/api/items.js';
import {Items} from "../imports/api/items";


function insertLink(title, url) {
    Links.insert({title, url, createdAt: new Date()});
}


Meteor.methods({
    'createItem': function (item) {
        Items.insert(item);
        console.log("add one");
    }
});

Meteor.methods({
    'getItems': function () {
        let items = Items.find({}, {sort: {createdAt: -1}}).fetch();
        console.log("get all items");
        return items;
    }
});

Meteor.methods({
    'getOneItem': function (pass_id) {
        let oneItem = Items.findOne({_id : pass_id  });
        console.log("get one item id is" + pass_id);
        return oneItem;
    }
});


Meteor.methods({
    'deleteOneItem': function (pass_id) {
        Items.remove({_id : pass_id});
        console.log("delete one item id is " + pass_id);
    }
});


Meteor.methods({
    'updateOneItem': function (pass_id, obj) {
        Items.update({_id : pass_id},{$set:{
                title: obj.title,
                description: obj.description,
                location: obj.location,
                price: obj.price,
                category: obj.category,
                date: new Date().toLocaleString(),
                imagePreviewUrl: obj.imagePreviewUrl,
                attribute: obj.attribute

        }});
        console.log("update one item id is " + pass_id);
    }
});



Meteor.startup(() => {

    console.log('Setting up email environment for forgot password')
    process.env.MAIL_URL = 'smtp://way2recycle%40gmail.com:cpsc436i@smtp.gmail.com:587';

    Accounts.emailTemplates.resetPassword.text = function(user, url) {
        //url = url.replace('#/', '');
        //url = url.replace('resetPassword-password/', '')
        return `Click this link to reset your password: ${url}`;
    }


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
