window.SpumblrApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    SpumblrApp.current_user_id = SpumblrAppCU();
    new SpumblrApp.Routers.Router
    Backbone.history.start();
    SpumblrApp.Collections.teams.fetch();
  }
};
