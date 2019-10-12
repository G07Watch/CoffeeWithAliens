# == Schema Information
#
# Table name: coffee_schedules
#
#  id             :integer          not null, primary key
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  user_id        :integer
#  coffee_time_id :integer
#

class CoffeeSchedule < ApplicationRecord

  has_many :users

  has_many :coffee_times 

end
