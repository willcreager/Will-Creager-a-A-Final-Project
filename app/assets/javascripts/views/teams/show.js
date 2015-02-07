SpumblrApp.Views.TeamShow = Backbone.CompositeView.extend({
  template: JST['teams/show'],

  initialize: function() {
    // creates random-colored background
    var int1 = Math.floor(Math.random()*255)
    var int2 = Math.floor(Math.random()*255)
    var int3 = Math.floor(Math.random()*255)
    $('body').css('background-color', 'rgb(' + int1 + ',' + int2 + ',' + int3 + ')');
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
