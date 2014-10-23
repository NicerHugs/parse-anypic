(function() {

  Anypic.Views.Photos = Anypic.Views.Base.extend({
    className: 'users-list',
    render: function() {
      new Anypic.Views.Subheader({
        $container: this.$el
      });
      var self = this;
      var query = new Parse.Query(Anypic.Models.Photo);
      var collection = query.collection();
      collection.fetch()
      .then(function() {
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
