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
      var self = this;
      var email = this.$('.email').val();
      var password = this.$('.password').val();
      Parse.User.logIn(email, password).then(
        function() {
          self.remove();
          if ($('.logout-msg')) {
            $('.logout-msg').remove();
          }
          Anypic.router.navigate('', {trigger: true});
        }
      );
    }
  });
})();
