(function() {

  Anypic.Views.Profile = Anypic.Views.Base.extend({
    className: 'user-profile',
    template: _.template($('#user-profile-template').text()),
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      var username = Parse.User.current().get('name');
      new Anypic.Views.Subheader({
        $container: this.$el,
        model: {name: username}
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
      var navigate = "photos/" + $(e.target).parent().attr('data-attribute-link');
      Anypic.router.navigate(navigate, {trigger: true});
    }
  });

})();
