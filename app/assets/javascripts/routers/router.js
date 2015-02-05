SpumblrApp.Routers.Router = Backbone.Router.extend({
  initialize: function() {
    this.$rootEl = $('#main');
  },

  routes: {
    'blogs': 'blogsIndex',
    'blogs/new': 'blogsNew',
    'blogs/:id': 'blogsShow'
  },

  blogsShow: function(id) {
    var blog = SpumblrApp.Collections.blogs.getOrFetch(id);
    var blogView = new SpumblrApp.Views.BlogShow({ model: blog });
    this._swapView(blogView);
  },

  blogsNew: function() {
    var newBlog = new SpumblrApp.Models.Blog();

    var formView = new SpumblrApp.Views.BlogFormView({
      collection: SpumblrApp.Collections.blogs,
      model: newBlog
    });

    this._swapView(formView);
  },

  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})
