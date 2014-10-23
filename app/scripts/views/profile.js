(function() {

  Anypic.Views.Profile = Anypic.Views.Base.extend({
    className: 'user-profile',
    template: _.template($('#user-profile-template').text()),
    render: function() {
      this.$el.html(this.template());
      new Anypic.Views.Subheader({
        $container: this.$el
      });
      var query = new Parse.Query(Anypic.Models.Photo);
      query.equalTo('author', Parse.User.current());
      var collection = query.collection();
      var self = this;
      collection.fetch()
      .then(function(){
        new Anypic.Views.ObjectList({
          $container: self.$el,
          collection: collection
        });
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
