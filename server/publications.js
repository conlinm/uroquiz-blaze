//this is on the server and creates the publication
//can sort and select the set to send to the subscriber
// in the arguments passed to "find"
//note uroquiz is the collection in the db
//Questions is the var created in main.js

Meteor.publish('uroquiz', function() {
	return Questions.find();
});