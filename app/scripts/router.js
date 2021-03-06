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
      ''              : 'index',
      'photos'        : 'photosIndex',
      'photos/:photo' : 'photoIndex', //dynammic
      'photos/liked'  : 'photosLiked',
      'add'           : 'addPhoto',
      'users'         : 'usersIndex',
      'users/:user'   : 'user', //dynamic
      'login'         : 'login',
      'logout'        : 'logout',
      'signup'        : 'signup'
    },

    index: function() {
      if(Parse.User.current()) {
        $('main').empty();
        new Anypic.Views.Profile({
          $container: $('main'),
          model: Parse.User.current()
        });
      } else {
        this.navigate('login', {trigger: true});
      }
    },
    photosIndex: function() {
      $('main').empty();
      new Anypic.Views.Photos({
        $container: $('main'),
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
        $container: $('.container'),
        model: new Anypic.Models.Photo()
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
    user: function() {
      var userID = location.hash.slice(8);
      if (userID === Parse.User.current().id) {
        this.navigate('', {trigger: true});
      }
      else {
        var user = new Anypic.Models.User({id: userID});
        user.fetch().then(function() {
          $('main').empty();
          new Anypic.Views.User({
            $container: $('main'),
            model: user
          });
        });
      }
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
        Anypic.session.set('user', Parse.User.current());
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
        this.navigate('', {trigger: true});
      } else {
        $('main').empty();
        new Anypic.Views.Signup({
        $container: $('main')
      });
      }
    }

  });

})();
