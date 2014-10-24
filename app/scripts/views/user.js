(function() {

  Anypic.Views.User = Anypic.Views.Base.extend({
    className: 'user-profile',
    template: _.template($('#user-profile-template').text()),
    render: function() {
      var userID = location.hash.slice(8);
      var self = this;
      this.$el.html(this.template());
      new Anypic.Views.Subheader({
        $container: this.$el
      });
      var query = new Parse.Query(Anypic.Models.Photo);
      var userQuery = new Parse.Query(Anypic.Models.User);
      userQuery.get(userID, {
        success: function(user) {
          query.equalTo('author', user);
          var collection = query.collection();
          collection.fetch()
          .then(function(){
            new Anypic.Views.ObjectList({
              $container: self.$el,
              collection: collection
            });
          });
          },
        error: function() {
          console.log("didn't find user");}
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
