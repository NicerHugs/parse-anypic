(function() {

  Anypic.Views.Users = Anypic.Views.Base.extend({
    className: 'users-list',
    render: function() {
      new Anypic.Views.Subheader({
        $container: this.$el,
        model: {name: "Users"}
      });
      var query = new Parse.Query(Anypic.Models.User);
      var collection = query.collection();
      var self = this;
      collection.fetch()
      .then(function() {
        new Anypic.Views.ObjectList({
          $container: self.$el,
          collection: collection
        });
      });
    },
    events: {
      'click .object-list-link' : 'viewUser'
    },
    viewUser: function(e) {
      e.preventDefault();
      var navigate = "#/users/" + $(e.target).parent().attr('data-attribute-link');
      Anypic.router.navigate(navigate, {trigger: true});
    }
  });

})();
