(function() {
  Anypic.Views.Login = Anypic.Views.Base.extend({
    tagName: 'form',
    template: _.template($('#login-template').text()),
    render: function() {
      this.$el.html(this.template());
    },
    actions: {
      'submit' : 'login'
    },
    login: function(e) {
      e.preventDefault();
      Anypic.router.navigate('/');
    }
  });
})();
