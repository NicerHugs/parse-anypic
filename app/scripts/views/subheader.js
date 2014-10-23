(function() {

  Anypic.Views.Subheader = Anypic.Views.Base.extend({
    tagName: 'h2',
    template: _.template($('#subheader-template').text()),
    render: function() {
      this.$el.html(this.template());
    }
  });

})();
