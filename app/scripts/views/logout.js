(function() {
  Anypic.Views.Logout = Anypic.Views.Base.extend({
    className: 'logout-msg',
    template: _.template($('#logout-template').text()),
    render: function() {
      this.$el.html(this.template());
    }
  });
})();
