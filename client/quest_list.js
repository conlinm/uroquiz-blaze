
Template.questList.helpers({
	quest: function() {
		return Questions.find({}, {sort: {Year: -1}, limit: 10});
	}
});
