Session.setDefault('selectedAnswer', null);
Session.setDefault('setAnswer', null);
Session.setDefault('isSelected', null);

Template.questItem.events({
	'click #answer': function (e, tmpl){
		var ansList = document.getElementsByName("answer");
		for (var i = 0; i < ansList.length; i++) {
			ansList[i].removeAttribute("style");
		}
		var ans = e.target.id;
		Session.set("selectedAnswer", ans);
		e.target.style.backgroundColor = "yellow";
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
