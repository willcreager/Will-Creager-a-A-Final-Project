json.extract! @following, :blog_id, :id, :user_id

json.follower_username @following.user.username
