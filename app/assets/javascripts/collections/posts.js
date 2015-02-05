SpumblrApp.Collections.Posts = Backbone.Collection.extend({
  model: SpumblrApp.Models.Post,
  url: 'api/posts',

  initialize: function(models, options) {
    this.blog = options.blog;
  }
})
