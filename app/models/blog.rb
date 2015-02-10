# == Schema Information
#
# Table name: blogs
#
#  id          :integer          not null, primary key
#  author_id   :integer          not null
#  team_tag_id :integer          not null
#  title       :string(255)      not null
#  created_at  :datetime
#  updated_at  :datetime
#

class Blog < ActiveRecord::Base
  validates :author_id, :team_tag_id, :title, presence: true

  belongs_to :author, class_name: 'User'
  belongs_to :team, foreign_key: :team_tag_id
  has_one :league, through: :team
  has_many :posts
  has_many :followings
  has_many :followers, through: :followings, source: :user

  def is_owner?(user)
    user.id == self.author_id
  end

  def followed_by?(user)
    followers.include?(user)
  end
end
