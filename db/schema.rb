# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150210182640) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "blogs", force: true do |t|
    t.integer  "author_id",   null: false
    t.integer  "team_tag_id", null: false
    t.string   "title",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "blogs", ["author_id"], name: "index_blogs_on_author_id", using: :btree
  add_index "blogs", ["team_tag_id"], name: "index_blogs_on_team_tag_id", using: :btree

  create_table "followings", force: true do |t|
    t.integer  "blog_id",    null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "followings", ["blog_id"], name: "index_followings_on_blog_id", using: :btree
  add_index "followings", ["user_id"], name: "index_followings_on_user_id", using: :btree

  create_table "leagues", force: true do |t|
    t.string   "name",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "posts", force: true do |t|
    t.integer  "blog_id",    null: false
    t.string   "title",      null: false
    t.text     "body"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "posts", ["blog_id"], name: "index_posts_on_blog_id", using: :btree

  create_table "teams", force: true do |t|
    t.string   "name",       null: false
    t.integer  "league_id",  null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "teams", ["league_id"], name: "index_teams_on_league_id", using: :btree

  create_table "users", force: true do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
