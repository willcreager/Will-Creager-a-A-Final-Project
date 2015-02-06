json.extract! @team, :id, :name, :league_id

json.blogs @team.blogs do |blog|
  json.extract! blog, :title
  json.author blog.author.username
end
