# == Schema Information
#
# Table name: followings
#
#  id         :integer          not null, primary key
#  blog_id    :integer          not null
#  user_id    :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class Following < ActiveRecord::Base
  validates :user_id, :blog_id, presence: true

  belongs_to :blog
  belongs_to :user
end
