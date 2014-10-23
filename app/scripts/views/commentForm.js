(function() {

  Anypic.Views.CommentForm = Anypic.Views.Base.extend({
    tagName: 'form',
    template: _.template($('#comment-form-template').text()),
    render: function() {
      this.$el.html(this.template());
    },
    events: {
      'keyup .comment-form' : 'addComment'
    },
    addComment: function(e) {
      if (e.keyCode === 13) {
        var comment = $('.comment-form').val();
        console.log('you want to submit the comment:', comment);
        $('.comment-form').val('');
      }
    }
  });

})();
