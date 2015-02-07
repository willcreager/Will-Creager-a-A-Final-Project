SpumblrApp.Collections.Followings = Backbone.Collection.extend({
  model: SpumblrApp.Models.Following,
  // url: 'api/posts',

  initialize: function(models, options) {
    this.blog = options.blog;
  }
})
