(function() {
  Anypic.Views.Nav = Anypic.Views.Base.extend({
    tagName: 'nav',
    template: _.template($('#nav-template').text()),
    render: function() {
      this.$el.html(this.template());
    },
    // events: {
    //   'click .login'     : 'login',
    //   'click .logout'    : 'logout',
    //   'click .signup'    : 'signup',
    //   'click .users'     : 'users',
    //   'click .photos'    : 'photos',
    //   'click .add-photo' : 'addPhoto'
    // },
    // login: function(e) {
    //   e.preventDefault();
    //   Anypic.router.navigate('login', {trigger: true});
    // },
    // logout: function(e) {
    //   e.preventDefault();
    //   Anypic.router.navigate('logout', {trigger: true});
    // },
    // signup: function(e) {
    //   e.preventDefault();
    //   Anypic.router.navigate('signup', {trigger: true});
    // },
    // users: function(e) {
    //   e.preventDefault();
    //   Anypic.router.navigate('users', {trigger: true});
    // },
    // photos: function(e) {
    //   e.preventDefault();
    //   Anypic.router.navigate('photos', {trigger: true});
    // },
    // addPhoto: function(e) {
    //   e.preventDefault();
    //   Anypic.router.navigate('photos/add', {trigger: true});
    // }
  });
})();
