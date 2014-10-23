(function(){
  'use strict';

  Anypic.Views.Base = Parse.View.extend({
   initialize: function(options) {
     this.$container = options.$container;
     this.$container.append(this.el);
     this.render();
   }
  });

})();
