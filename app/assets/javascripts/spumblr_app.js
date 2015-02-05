window.SpumblrApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new SpumblrApp.Routers.Router
    Backbone.history.start();
    SpumblrApp.current_user_id = SpumblrAppCU();
    SpumblrApp.Collections.teams.fetch();
  }
};
