SpumblrApp.Views.BlogFormView = Backbone.View.extend({
  template: JST['blogs/form'],

  events: {
    'submit form': 'createBlog'
  },

  initialize: function() {
    this.listenTo(SpumblrApp.Collections.teams, "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({
      teams: SpumblrApp.Collections.teams,
      blog: this.model
    });
    this.$el.html(renderedContent);
    return this;
  },

  createBlog: function(event) {
    event.preventDefault();
    var attrs = this.$el.serializeJSON(),
    that = this;

    this.model.set(attrs);
    this.model.save({}, {
      success: function () {
        that.collection.add(that.model, { merge: true });
        Backbone.history.navigate("", { trigger: true });
      }
    });
  }
})
