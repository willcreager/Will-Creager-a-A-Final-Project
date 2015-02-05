window.SpumblrApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new SpumblrApp.Routers.Router
    Backbone.history.start();
    this.current_user_id = SpumblrAppCU();
  }
};

$(document).ready(function(){
  SpumblrApp.initialize();
});
