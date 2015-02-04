# == Schema Information
#
# Table name: leagues
#
#  id         :integer          not null, primary key
#  name       :string(255)      not null
#  created_at :datetime
#  updated_at :datetime
#

class League < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true

  has_many :teams
  has_many :blogs, through: :teams
end
