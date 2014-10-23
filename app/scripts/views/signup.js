(function() {
  Anypic.Views.Signup = Anypic.Views.Base.extend({
    tagName: 'form',
    template: _.template($('#signup-template').text()),
    render: function() {
      this.$el.html(this.template());
    },
    events: {
      'submit' : 'signup'
    },
    signup: function(e) {
      e.preventDefault();
      var username = this.$('.username').val();
      var email = this.$('.email').val();
      var password = this.$('.password').val();
      Parse.User.signUp(email, password);
      var attrs = [username, email, password];
      Anypic.router.navigate('', {trigger: true});
      console.log(attrs);
      this.remove();
    }
  });
})();
