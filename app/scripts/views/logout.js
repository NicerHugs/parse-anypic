(function() {
  Anypic.Views.Logout = Anypic.Views.Base.extend({
    template: _.template($('#logout-template').text()),
    render: function() {
      this.$el.html(this.template());
    }
  });
})();
