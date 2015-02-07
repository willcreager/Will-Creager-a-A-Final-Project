SpumblrApp.Views.BlogShow = Backbone.CompositeView.extend({
  template: JST['blogs/show'],

  initialize: function() {
    $('body').css('background-color', 'lightblue');
    this.collection = this.model.posts();
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, "add", this.addPost);
    this.renderPostForm();
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
// _.extend(SpumblrApp.Views.BlogShow.prototype, SpumblrApp.Utils.CompositeView);
