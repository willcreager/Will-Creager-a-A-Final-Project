SpumblrApp.Views.PostForm = Backbone.View.extend({
  formTemplate: JST['posts/form'],
  linkTemplate: JST['posts/link'],
  formShowing: false,

  events: {
    'click a': 'showForm',
    'submit' : 'create'
  },

  create: function (event) {
    event.preventDefault();
    this.collection.create({
      title: this.$('#post_title').val(),
      body: this.$('textarea').val(),
      blog_id: this.collection.blog.id
    }, { wait: true });
    this.$('textarea').val('');
    this.$('textarea').focus();
    this.hideForm();
  },

  render: function () {
    var content;
    if (this.formShowing) {
      content = this.formTemplate();
    } else {
      content = this.linkTemplate();
    }
    this.$el.html(content);
    this.delegateEvents();
    return this;
  },

  hideForm: function () {
    this.formShowing = false;
    this.render();
  },

  showForm: function (event) {
    event.preventDefault();
    this.formShowing = true;
    this.render();
  }
})
