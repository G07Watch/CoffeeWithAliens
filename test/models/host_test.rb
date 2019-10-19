# == Schema Information
#
# Table name: hosts
#
#  id         :integer          not null, primary key
#  facebook   :string
#  intro      :text             not null
#  story      :text             not null
#  topics     :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#

require 'test_helper'

class HostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
