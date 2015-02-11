SpumblrApp.Models.Blog = Backbone.Model.extend({
  urlRoot: 'api/blogs',

  posts: function () {
    if (!this._posts) {
      this._posts = new SpumblrApp.Collections.Posts([], { blog: this });
    }
    return this._posts;
  },

  followState: function (user_id) {
    return !this.following().isNew();
  },

  following: function () {
    if (!this._following) {
      this._following = new SpumblrApp.Models.Following();
    }
    return this._following
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
    this.following().set({ blog_id: response.id });
    if (response.following) {
      this.following().set(response.following, { parse: true });
      this.followers().set([this.following()]);
      delete response.following;
    }
    if (response.followers) {
      this.followers().set(response.followers, { parse: true });
      delete response.followers;
    }
    return response;
  }
})
