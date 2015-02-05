SpumblrApp.Collections.Posts = Backbone.Collection.extend({
  model: SpumblrApp.Models.Post,
  url: 'api/posts'
})
