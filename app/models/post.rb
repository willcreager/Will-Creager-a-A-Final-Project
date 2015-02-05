# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  blog_id    :integer          not null
#  title      :string(255)      not null
#  body       :text
#  created_at :datetime
#  updated_at :datetime
#

class Post < ActiveRecord::Base
  validates :blog_id, :title, presence: true

  belongs_to :blog
  has_one :team, through: :blog

  def is_owner?(user)
    user.id == self.blog.author_id
  end
end
