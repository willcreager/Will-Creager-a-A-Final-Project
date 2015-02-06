json.extract! @blog, :id, :title

json.author_username @blog.author.username
json.author_id @blog.author.id
json.team_name @blog.team.name

json.posts @blog.posts
