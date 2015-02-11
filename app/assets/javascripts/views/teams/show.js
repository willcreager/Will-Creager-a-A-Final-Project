SpumblrApp.Views.TeamShow = Backbone.CompositeView.extend({
  template: JST['teams/show'],

  initialize: function() {
    this.collection = this.model.blogs();
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({
      team: this.model,
      blogs: this.collection
    });
    this.$el.html(renderedContent);
    return this;
  }
})
