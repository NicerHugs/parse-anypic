(function() {
  'use strict';

  Anypic.Router = Parse.Router.extend({
    initialize: function() {
      new Anypic.Views.App({ });
      this.navigate('login', {trigger: true, replace: true});
    },
    routes: {
      ''             : 'index',
      'photos'       : 'photosIndex',
      'photos/photo' : 'photoIndex', //dynamic
      'photos/liked' : 'photosLiked',
      'users'        : 'usersIndex',
      'user'         : 'userIndex', //dynamic
      'login'        : 'login',
      'logout'       : 'logout',
      'signup'       : 'signup'
    },

    login: function() {
      $('main').empty();
      new Anypic.Views.Login({
        $container: $('main')
      });
    },
    signup: function() {
      $('main').empty();
      new Anypic.Views.Signup({
        $container: $('main')
      });
    },
    logout: function() {
      $('main').empty();
      new Anypic.Views.Logout({
        $container: $('main')
      });
      new Anypic.Views.Login({
        $container: $('main')
      });
    },
    usersIndex: function() {
      $('main').empty();
      new Anypic.Views.Users({
        $container: $('main')
      });
    },
    userIndex: function() {
      $('main').empty();
      new Anypic.Views.Profile({
        $container: $('main')
      });
    }

  });

})();
