(function() {
  'use strict';

  Anypic.Router = Parse.Router.extend({
    initialize: function() {
      new Anypic.Views.App({});
      this.navigate('/login', {trigger: true, replace: true});
    },
    routes: {
      '' : 'index',
      'photos' : 'photosIndex',
      'photos/photo' : 'photoIndex', //dynamic
      'photos/liked' : 'photosLiked',
      'users' : 'usersIndex',
      'users/user' : 'userIndex', //dynamic
      'login' : 'login',
      'logout' : 'logout',
      'signup' : 'signup'
    },

    login: function() {
      new Anypic.Views.Login({
        $container: $('main')
      });
    },
    signup: function() {
      new Anypic.Views.Signup({
        $container: $('main')
      });
    },
    logout: function() {
      new Anypic.Views.Logout({
        $container: $('main')
      });
      new Anypic.Views.Login({
        $container: $('main')
      });
    }
  });

})();
