SpumblrApp.Collections.Teams = Backbone.Collection.extend({
  url: "/api/teams",
  model: SpumblrApp.Models.Team
});
SpumblrApp.Collections.teams = new SpumblrApp.Collections.Teams;
