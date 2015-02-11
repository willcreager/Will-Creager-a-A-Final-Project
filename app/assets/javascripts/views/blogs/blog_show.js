SpumblrApp.Views.BlogShow = Backbone.CompositeView.extend({
  template: JST['blogs/show'],

  initialize: function() {
    $('body').css('background-color', 'lightblue');
    this.collection = this.model.posts();
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, "add", this.addPost);
    this.renderPostForm();
  },

  events: {
    "click .toggleFollow": "toggleFollow",
  },

  toggleFollow: function(){
    var that = this;
    if (this.model.followState(SpumblrApp.current_user_id)) {
      //find the follower model and destroy
      var following = this.model.following();
      following.destroy({ success: function () {
        that.model.following().set({ id: null });
        that.render();
        }
      });
    } else {
      //make a new follow, save it, add it to the followers() collection
      var following = this.model.following();
      following.save({}, { success: function(following, response) {
        that.model.followers().add(following, { merge: true });
        that.render();
        }
      })
    }
  },

  addPost: function (post) {
    var view = new SpumblrApp.Views.PostShow({
      model: post
    });
    this.addSubview('#posts', view);
  },

  render: function () {
    var renderedContent = this.template({
      blog: this.model,
      current_user_id: SpumblrApp.current_user_id
    });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  renderPosts: function () {
    this.model.posts().each(this.addPost.bind(this));
    this.$('#posts');
  },

  renderPostForm: function () {
    var view = new SpumblrApp.Views.PostForm({
      collection: this.collection
    });
    this.addSubview('#post-form', view);
  }
});
