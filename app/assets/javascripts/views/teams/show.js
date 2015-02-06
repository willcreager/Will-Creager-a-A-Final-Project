SpumblrApp.Views.TeamShow = Backbone.CompositeView.extend({
  template: JST['teams/show'],

  initialize: function() {
    $('body').css('background-color', 'rgb(0, 112, 159)');
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
