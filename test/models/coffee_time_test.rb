# == Schema Information
#
# Table name: coffee_times
#
#  id              :integer          not null, primary key
#  place           :string
#  date            :datetime
#  start_time      :integer
#  available_seats :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  host_id         :integer
#  star_system_id  :integer
#

require 'test_helper'

class CoffeeTimeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
