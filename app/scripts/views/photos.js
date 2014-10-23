(function() {

  Anypic.Views.Photos = Anypic.Views.Base.extend({
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
      'click .object-list-link' : 'viewPhoto'
    },
    viewPhoto: function(e) {
      e.preventDefault();
      Anypic.router.navigate('photos/photo', {trigger: true});
    }
  });

})();
