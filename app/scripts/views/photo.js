(function() {

  Anypic.Views.Photo = Anypic.Views.Base.extend({
    className: 'photo-view',
    initialize: function(options) {
      var self = this;
      var photoID = location.hash.slice(8);
      var photo = new Anypic.Models.Photo({id: photoID});
      photo.fetch().then(function() {
        self.model = photo;
        self.$container = options.$container;
        self.$container.append(self.el);
        self.render();
      });
    },

    template: _.template($('#photo-view-template').text()),
    render: function() {
      this.$el.html( this.template({photo: this.model.toJSON()}) );
      new Anypic.Views.Subheader({
        $container: $('#photo-view-content'),
        model: {name: 'photo'}
      });
      new Anypic.Views.CommentForm({
        $container: $('#photo-view-content')
      });
      new Anypic.Views.CommentList({
        $container: $('#photo-view-content')
      });
    },
    events: {
      'click'        : 'closeImg',
      'click .close' : 'navigateBack'
    },

    closeImg: function(e) {
      if ($.contains((e.target), document.getElementById('photo-view-content'))) {
        this.remove();
        // if user found this photo via internal navigation
        if(Anypic.router.routesHit > 1) {
          // when closing photo go back to previous page
          window.history.back();
        }
        // if user found site by direct link
        else {
          //when closing photo go to index.
          Anypic.router.navigate('', {trigger:true, replace:true});
        }
      }

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
