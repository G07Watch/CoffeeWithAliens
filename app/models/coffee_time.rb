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

class CoffeeTime < ApplicationRecord

  has_one :coffee_schedule

  has_many :users, through: :coffee_schedule

end
