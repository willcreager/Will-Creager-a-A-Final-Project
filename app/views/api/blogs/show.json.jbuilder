json.extract! @blog, :id, :title

json.author_username @blog.author.username
json.author_id @blog.author.id
json.team_name @blog.team.name
json.team_id @blog.team.id
json.posts @blog.posts
json.followers @blog.followings do |following|
  json.extract! following, :id, :user_id, :blog_id
  json.follower_username following.user.username
end

if @blog.followed_by?(current_user)
  json.following do
    json.id @blog.followings.find_by(user_id: current_user.id).id
  end
end
