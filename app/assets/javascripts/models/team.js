SpumblrApp.Models.Team = Backbone.Model.extend({
  urlRoot: 'api/teams',

  blogs: function () {
    if (!this._blogs) {
      this._blogs = new SpumblrApp.Collections.Blogs([], { team: this });
    }
    return this._blogs;
  },

  parse: function (response) {
    if (response.blogs) {
      this.blogs().set(response.blogs);
      delete response.blogs;
    }
    return response;
  }
})
