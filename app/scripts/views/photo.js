(function() {

  Anypic.Views.Photo = Anypic.Views.Base.extend({
    className: 'photo-view',
    template: _.template($('#photo-view-template').text()),
    render: function() {
      this.$el.html(this.template());
      new Anypic.Views.Subheader({
        $container: this.$el
      });
      new Anypic.Views.CommentForm({
        $container: this.$el
      });
      new Anypic.Views.CommentList({
        $container: this.$el
      });
    },
    events: {
      'click .close' : 'navigateBack'
    },

    navigateBack: function(e) {
      e.preventDefault();
      this.remove();
      // if user found site via internal navigation
      if(Anypic.router.routesHit > 1) {
        // when closing photo go back to previous page
        window.history.back();
      }
      // if user found site by direct link
      else {
        //when closing photo go to index.
        Anypic.router.navigate('', {trigger:true, replace:true});
      }
    },
  });

})();
