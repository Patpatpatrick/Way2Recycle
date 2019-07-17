
//create one item
// pass a new JSON


const new_obj = {
    "user_id" : "test2",
    "title" : "car1",
    "description" : " a nice car",
    "location" : "1231,123",
    "price" : 50,
    "category" : "Auto",
    "date" : "2019-6-29 16:38:10",
    "imagePreviewUrl" : "123456",
    "attribute" : ""
};
Meteor.call("createItem",new_obj);


//list all items
Meteor.call('getItems', function (err, result) {
    if(err){
        console.log("error");
    }
    // console.log(result);
});


// find one item
// pass the item id to second parameter
// 5bvHMHYRoAevZLCqQ is a dummy _id
// get the result from the callback function
Meteor.call('getOneItem', "5bvHMHYRoAevZLCqQ", function (err, result) {
    if(err){
        console.log("getOneItem error");
    }

    //get result
    // console.log(result);
});


//delete one item
// 5bvHMHYRoAevZLCqQ is a dummy _id
// get the result from the callback function
Meteor.call('deleteOneItem', "5bvHMHYRoAevZLCqQ", function (err, result) {
    if(err){
        console.log("error");
    }
    // console.log(result);
});


// update one item
// pass item_id "NyqoZkiWvACz3idtA" , which is a dummy data
// obj is the JSON file of new object

const update_obj = {
    "_id" : "NyqoZkiWvACz3idtA",
    "user_id" : "test2",
    "title" : "car1",
    "description" : " a nice car",
    "location" : "1231,123",
    "price" : 50,
    "category" : "Auto",
    "date" : "2019-6-29 16:38:10",
    "imagePreviewUrl" : "123456",
    "attribute" : ""
};
Meteor.call('updateOneItem', "NyqoZkiWvACz3idtA", update_obj);