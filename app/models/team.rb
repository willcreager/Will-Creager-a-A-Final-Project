# == Schema Information
#
# Table name: teams
#
#  id         :integer          not null, primary key
#  name       :string(255)      not null
#  league_id  :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class Team < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true
  validates :league_id, presence: true

  belongs_to :league
  has_many :blogs
end
