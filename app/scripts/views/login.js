(function() {
  Anypic.Views.Login = Anypic.Views.Base.extend({
    tagName: 'form',
    template: _.template($('#login-template').text()),
    render: function() {
      this.$el.html(this.template());
    },
    events: {
      'submit' : 'login'
    },
    login: function(e) {
      e.preventDefault();
      Anypic.router.navigate('/');
      this.remove();
      if ($('.logout-msg')) {
        $('.logout-msg').remove();
      }
    }
  });
})();
