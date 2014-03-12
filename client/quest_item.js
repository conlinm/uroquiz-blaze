Session.setDefault('selectedAnswer', null);
Session.setDefault('setAnswer', null);
Session.setDefault('isSelected', null);

Template.questItem.events({
	'click #answer': function (e, tmpl){
		var ans = e.target.id;
		// var answer = tmpl.find("[#answer]")
		e.currentTarget.style.backgroundColor = " ";
		e.target.style.backgroundColor = "yellow";
		Session.set("selectedAnswer", ans);
	},
	'click #submitAnswer': function (e, tmpl){
		var myAnswer = Session.get("selectedAnswer");
		Session.set("setAnswer", myAnswer);
	}
  });

Template.questItem.helpers  ({
		choice: function (){
			return Session.get("setAnswer")
		}
});
Template.questItem.imagePresent = function() {
	return ! _.contains(this.Image_File, null);
}
// $('li').click(
// 	function(){
// 		$('.highlight').removeClass('highlight');
//         		$(this).addClass('highlight');
//         	});