(function(){
  'use strict';

  Anypic.Views.App = Parse.View.extend({
      className: 'container',
      initialize: function(options) {
        options = options || {};
        Anypic.session = new Anypic.Models.Session();
        $('body').prepend(this.el);
        this.render();
      },
      render: function() {
        this.headerView = new Anypic.Views.Header({
          $container: this.$el
        });
        this.mainView = new Anypic.Views.Main({
          $container: this.$el
        });
        this.footerView = new Anypic.Views.Footer({
          $container: this.$el
        });
      }
    });

})();
