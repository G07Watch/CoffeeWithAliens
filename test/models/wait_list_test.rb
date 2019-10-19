# == Schema Information
#
# Table name: wait_lists
#
#  id                 :integer          not null, primary key
#  priority           :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  coffee_schedule_id :integer
#

require 'test_helper'

class WaitListTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
