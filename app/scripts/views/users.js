(function() {

  Anypic.Views.Users = Anypic.Views.Base.extend({
    className: 'users-list',
    render: function() {
      new Anypic.Views.Subheader({
        $container: this.$el
      });
      new Anypic.Views.ObjectList({
        $container: this.$el
      });
    },
    events: {
      'click .object-list-link' : 'viewUser'
    },
    viewUser: function(e) {
      e.preventDefault();
      Anypic.router.navigate('user', {trigger: true});
    }
  });

})();
