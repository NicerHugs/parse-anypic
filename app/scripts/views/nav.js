(function() {
  Anypic.Views.Nav = Anypic.Views.Base.extend({
    tagName: 'nav',
    template: _.template($('#nav-template').text()),
    render: function() {
      this.$el.html(this.template());
    }
  });
})();
