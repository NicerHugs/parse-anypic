(function() {

  Anypic.Views.CommentList = Anypic.Views.Base.extend({
    tagName: 'ul',
    template: _.template($('#comment-list-template').text()),
    render: function() {
      this.$el.html(this.template());
    }
  });

})();
