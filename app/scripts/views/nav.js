(function() {

  Anypic.Views.Nav = Parse.View.extend({
    initialize: function(options) {
      this.$container = options.$container;
      this.$container.append(this.el);
      this.render();
    },
    tagName: 'nav',
    template: _.template($('#nav-template').text()),
    render: function() {
      this.$el.html(this.template());
    }
  });

})();
