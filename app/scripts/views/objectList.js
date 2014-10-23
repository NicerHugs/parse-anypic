(function() {

  Anypic.Views.ObjectList = Anypic.Views.Base.extend({
    tagName: 'ul',
    template: _.template($('#object-list-template').text()),
    render: function() {
      this.$el.html(this.template());
    }
  });

})();
