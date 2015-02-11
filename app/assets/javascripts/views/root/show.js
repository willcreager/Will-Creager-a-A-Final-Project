SpumblrApp.Views.RootShow = Backbone.CompositeView.extend({
  template: JST['roots/show'],

  initialize: function() {
    this.render();
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
})
