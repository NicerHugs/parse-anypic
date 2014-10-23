(function() {

  Anypic.Views.AddPhoto = Anypic.Views.Base.extend({
    className: 'add-photo-view',
    template: _.template($('#add-photo-view-template').text()),
    render: function() {
      this.$el.html(this.template());
      new Anypic.Views.Subheader({
        $container: $('#add-photo-view-content')
      });
    },
    events: {
      'click'                   : 'closeClick',
      'click .close'            : 'closeButton',
      'submit'                  : 'saveImg',
      'change input[type=file]' : 'uploadFile'
    },

    closeClick: function(e) {
      if ($.contains((e.target), document.getElementById('add-photo-view-content'))) {
        e.preventDefault();
        this.navigateBack();
      }
    },
    closeButton: function(e) {
      e.preventDefault();
      this.navigateBack();
    },

    navigateBack: function(e) {
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

    uploadFile: function(e){
      var file = $(e.target)[0].files[0];
      var parseFile = new Parse.File(file.name, file);
      var self = this;
      parseFile.save().then(function(){
        self.model.set('image', parseFile.url());
      });
    },

    saveImg: function(e) {
      e.preventDefault();
      var self = this;
      console.log(Parse.User.current());
      this.model.set({
        title: this.$('.title').val(),
        author: Parse.User.current()
      });
      this.model.save()
      .then(function() {
        self.navigateBack();
      });
    }
  });

})();
