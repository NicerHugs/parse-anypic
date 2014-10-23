(function() {
  Anypic.Views.Nav = Anypic.Views.Base.extend({
    tagName: 'nav',
    template: _.template($('#nav-template').text()),
    render: function() {
      this.$el.html(this.template());
    },
    events: {
      'click .login'  : 'login',
      'click .logout' : 'logout',
      'click .signup' : 'signup',
      'click .users'  : 'users'
    },
    login: function(e) {
      e.preventDefault();
      Anypic.router.navigate('login', {trigger: true});
    },
    logout: function(e) {
      e.preventDefault();
      Anypic.router.navigate('logout', {trigger: true});
    },
    signup: function(e) {
      e.preventDefault();
      Anypic.router.navigate('signup', {trigger: true});
    },
    users: function(e) {
      e.preventDefault();
      Anypic.router.navigate('users', {trigger: true});
    }
  });
})();
