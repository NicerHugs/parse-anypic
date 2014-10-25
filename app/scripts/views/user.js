(function() {

  Anypic.Views.User = Anypic.Views.Base.extend({
    className: 'user-profile',
    template: _.template($('#user-profile-template').text()),
    render: function() {
      var self = this;
      var userID = location.hash.slice(8);
      this.$el.html(this.template(this.model.toJSON()));
      var query = new Parse.Query(Anypic.Models.Photo);
      var user = new Anypic.Models.User({id: userID});
      user.fetch().then(function(){
        new Anypic.Views.Subheader({
          $container: self.$el,
          model: {name: user.get('name')}
        });
        query.equalTo('author', user);
        var collection = query.collection();
        collection.fetch()
        .then(function() {
          new Anypic.Views.ObjectList({
            $container: self.$el,
            collection: collection
          });
        });
      });
    },
    events: {
      'click .object-list-link' : 'viewPhoto'
    },
    viewPhoto: function(e) {
      e.preventDefault();
      var navigate = "photos/" + $(e.target).parent().attr('data-attribute-link');
      Anypic.router.navigate(navigate, {trigger: true});
    }
  });

})();
