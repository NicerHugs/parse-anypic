(function() {

  Anypic.Views.Subheader = Parse.View.extend({
    tagName: 'h2',
    initialize: function(options) {
      this.$container = options.$container;
      this.$container.prepend(this.el);
      this.render();
    },
    template: _.template($('#subheader-template').text()),
    render: function() {
      this.$el.html(this.template());
    }
  });

})();
