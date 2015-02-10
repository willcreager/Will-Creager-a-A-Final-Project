SpumblrApp.Collections.Followings = Backbone.Collection.extend({
  model: SpumblrApp.Models.Following,
   
  url: "/api/followings",

  initialize: function(models, options) {
    this.blog = options.blog;
  }
})
