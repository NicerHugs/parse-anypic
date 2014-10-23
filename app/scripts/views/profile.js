(function() {

  Anypic.Views.Profile = Anypic.Views.Base.extend({
    className: 'user-profile',
    template: _.template($('#user-profile-template').text()),
    render: function() {
      this.$el.html(this.template());
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
