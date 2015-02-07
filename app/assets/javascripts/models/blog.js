SpumblrApp.Models.Blog = Backbone.Model.extend({
  urlRoot: 'api/blogs',

  posts: function () {
    if (!this._posts) {
      this._posts = new SpumblrApp.Collections.Posts([], { blog: this });
    }
    return this._posts;
  },

  followers: function () {
    if (!this._followers) {
      this._followers = new SpumblrApp.Collections.Followings([], {blog: this});
    }
    return this._followers
  },

  parse: function (response) {
    if (response.posts) {
      this.posts().set(response.posts, { parse: true });
      delete response.posts;
    }
    if (response.followers) {
      this.followers().set(response.followers, { parse: true });
      delete response.followers;
    }
    return response;
  }
})
