Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {return Meteor.subscribe('uroquiz');}
});

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('questList', {path: '/quiz'});
  this.route('questPage', {path: '/quiz/:_id',
  data: function() { return Questions.findOne(this.params._id); }
  });

});