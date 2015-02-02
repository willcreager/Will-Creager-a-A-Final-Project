# Schema Information

## blogs
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users)
team_tag_id | integer   | not null, foreign key (references team tags)
title       | string    | not null

## followings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
blog_id     | integer   | not null, foreign key (references blogs)
follower_id | integer   | not null, foreign key (references users)

## leagues
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
league_name | string    | not null, unique


## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users)
title       | string    | not null
body        | string    |

## team tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
league_id   | integer   | not null, foreign key (references leagues)
team_name   | string    | not null, unique

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
post_id     | integer   | not null, foreign key (references posts)
team_id     | integer   | not null, foreign key (references team tags)

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_name       | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique
