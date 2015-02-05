SpumblrApp.Views.PostShow = Backbone.View.extend({
  template: JST['posts/show'],

  className: 'post-display',

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      post: this.model
    });
    this.$el.html(content);
    this.$el.data('post-id', this.model.id);
    return this;
  }

})
