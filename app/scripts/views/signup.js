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
      Anypic.router.navigate('/');
      this.remove();
    }
  });
})();
