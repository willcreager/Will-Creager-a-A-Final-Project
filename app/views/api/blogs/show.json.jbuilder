json.extract! @blog, :id, :title

json.author_username @blog.author.username
json.author_id @blog.author.id
json.team_name @blog.team.name
json.team_id @blog.team.id
json.posts @blog.posts
json.followers @blog.followers do |follower|
  json.extract! follower, :username, :id
end
