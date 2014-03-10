Session.setDefault('selectedAnswer', null);
Session.setDefault('setAnswer', null);

Template.questItem.events({
	'click #answer': function (evt, templ){
		alert("clicked");
		var ans = $(this).val();
		Session.set("selectedAnswer", ans);
	},
   //  'click #answerBtn': function (evt, templ) {
   //  	alert(templ.find("#answerBtn").value);
   //  Session.set('setAnswer', 'A');},
   //  'click #answerBtnB': function (evt, templ) {
   //  Session.set('setAnswer', 'B');},
   // 'click #answerBtnC': function (evt, templ) {
   //  Session.set('setAnswer', 'C');},
   //  'click #answerBtnD': function (evt, templ) {
   //  Session.set('setAnswer', 'D');},
   //  'click #answerBtnE': function (evt, templ) {
   //  Session.set('setAnswer', 'E');},
  });

// Template.questItem.helpers  ({
// 	// setAnswer: function () { return Session.get('setAnswer');
//  //      },
// 	// imagePresent: function() {
// 	// var present = quest.Image_File.findOne(Session.get('selectedQuestId'));
// 	// if (present !== null) {
// 	// 	return true;
// 	// }
// 	// else {return false};
// });
// // recordAnswer = function(answer) {
// // 	Session set('setAnswer', answer);
// // }