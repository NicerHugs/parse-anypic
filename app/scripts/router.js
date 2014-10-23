(function() {
  'use strict';

  Anypic.Router = Parse.Router.extend({
    initialize: function() {
      new Anypic.Views.App({});
    },
    routes: {
      '' : 'index',
      'photos' : 'photosIndex',
      'photos/photo' : 'photoIndex',
      'photos/liked' : 'photosLiked',
      'users' : 'usersIndex',
      'users/user' : 'userIndex',
      'login' : 'login',
      'logout' : 'logout',
      'signup' : 'signup'
    }
  });

})();
