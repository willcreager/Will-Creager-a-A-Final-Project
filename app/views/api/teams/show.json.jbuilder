json.extract! @team, :id, :name, :league_id

json.blogs @team.blogs do |blog|
  json.extract! blog, :title, :id, :posts
  json.author blog.author.username
  json.author_id blog.author.id
end
