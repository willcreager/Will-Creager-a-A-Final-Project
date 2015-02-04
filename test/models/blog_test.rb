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

require 'test_helper'

class BlogTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
