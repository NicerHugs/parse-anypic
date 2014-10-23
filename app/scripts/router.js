(function() {
  'use strict';

  Anypic.Router = Parse.Router.extend({
    initialize: function() {
      var self=this;
      new Anypic.Views.App({ });
      this.routesHit = 0;
      Parse.history.on('route', function() {
        self.routesHit++;}, self);
    },
    routes: {
      ''             : 'index',
      'photos'       : 'photosIndex',
      'photos/photo' : 'photoIndex', //dynamic
      'photos/liked' : 'photosLiked',
      'photos/add'   : 'addPhoto',
      'users'        : 'usersIndex',
      'user'         : 'userIndex', //dynamic
      'login'        : 'login',
      'logout'       : 'logout',
      'signup'       : 'signup'
    },

    index: function() {
      if(Parse.User.current()) {
        $('main').empty();
        new Anypic.Views.Profile({
          $container: $('main')
        });
      } else {
        this.navigate('login', {trigger: true});
      }
    },
    photosIndex: function() {
      $('main').empty();
      new Anypic.Views.Photos({
        $container: $('main')
      });
    },
    photosLiked: function() {
      $('main').empty();
      new Anypic.Views.Photos({
        $container: $('main')
      });
    },
    addPhoto: function() {
      new Anypic.Views.AddPhoto({
        $container: $('.container')
      });
    },
    photoIndex: function() {
      new Anypic.Views.Photo({
        $container: $('.container')
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
    },
    login: function() {
      $('main').empty();
      if (Parse.User.current()) {
        this.navigate('', {trigger: true});
      } else {
        new Anypic.Views.Login({
          $container: $('main')
        });
      }
    },
    logout: function() {
      $('main').empty();
      if (Parse.User.current()){
        Parse.User.logOut();
        new Anypic.Views.Logout({
          $container: $('main')
        });
        new Anypic.Views.Login({
          $container: $('main')
        });
      } else {
        this.navigate('login', {trigger: true});
      }
    },
    signup: function() {
      if (Parse.User.current()) {
        this.navigate('index', {trigger: true});
      } else {
        $('main').empty();
        new Anypic.Views.Signup({
        $container: $('main')
      });
      }
    }

  });

})();
