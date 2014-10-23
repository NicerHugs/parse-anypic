(function() {
  Anypic.Views.Header = Anypic.Views.Base.extend({
    tagName: 'header',
    render: function() {
      this.$el.append('<h1><a href="#">Anypic</a></h1>');
      this.navView = new Anypic.Views.Nav({
        $container: this.$el
      });
    },

    events: {
      'click h1' : 'viewIndex'
    },

    viewIndex: function(e) {
      e.preventDefault();
      Anypic.router.navigate('/', {trigger: true})
;    }
  });
})();
