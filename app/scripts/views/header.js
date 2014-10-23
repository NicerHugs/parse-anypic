(function() {
  Anypic.Views.Header = Anypic.Views.Base.extend({
    tagName: 'header',
    render: function() {
      this.$el.append('<h1>Anypic</h1>');
      this.navView = new Anypic.Views.Nav({
        $container: this.$el
      });
    }
  });
})();
