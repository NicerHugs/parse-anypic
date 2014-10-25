(function() {

  Anypic.Views.Nav = Parse.View.extend({
    initialize: function(options) {
      this.$container = options.$container;
      this.$container.append(this.el);
      this.render();
      console.log(Anypic.session.model);
      Anypic.session.on('change', _.bind(this.render, this));
    },
    tagName: 'nav',
    template: _.template($('#nav-template').text()),
    render: function() {
      this.$el.html(this.template());
    }
  });

})();
