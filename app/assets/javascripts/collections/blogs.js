SpumblrApp.Collections.Blogs = Backbone.Collection.extend({
  initialize: function (options) {
    this.team = options.team;
  },

  model: SpumblrApp.Models.Blog,
  url: 'api/blogs',

  getOrFetch: function (id) {
    var blog = this.get(id);
    if (!blog) {
      blog = new SpumblrApp.Models.Blog({ id: id });
      blog.fetch({
        success: function () {
          this.add(blog);
        }.bind(this)
      });
    } else {
      blog.fetch();
    }
    return blog;
  }
});

SpumblrApp.Collections.blogs = new SpumblrApp.Collections.Blogs({team: null})
