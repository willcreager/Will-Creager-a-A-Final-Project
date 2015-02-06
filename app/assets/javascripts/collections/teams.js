SpumblrApp.Collections.Teams = Backbone.Collection.extend({
  url: "/api/teams",
  model: SpumblrApp.Models.Team,

  getOrFetch: function (id) {
    var team = this.get(id);
    if (!team) {
      team = new SpumblrApp.Models.Team({ id: id });
      team.fetch({
        success: function () {
          this.add(team);
        }.bind(this)
      });
    } else {
      team.fetch();
    }
    return team;
  }
});
SpumblrApp.Collections.teams = new SpumblrApp.Collections.Teams;
