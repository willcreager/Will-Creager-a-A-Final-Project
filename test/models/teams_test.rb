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

require 'test_helper'

class TeamsTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
