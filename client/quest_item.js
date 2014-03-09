// Template.questItem.events({
//     'click .btn': function (e, tmpl) {
//       var selectedAnswer = this.value;
//       return selectedAnswer;
//     }
//   });

Template.questItem.helpers  ({
	setAnswer: function () { return Session.get('setAnswer');
      },
	imagePresent: function() {
	var present = quest.Image_File.findOne(Session.get('selectedQuestId'));
	if ( present !=== null) {
		return true
	};
	else {return false};
});