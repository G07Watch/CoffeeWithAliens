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

  has_many :coffee_schedules

  has_many :users, through: :coffee_schedules

  # belongs_to :coffee_schedule


  def month
    self.date.strftime("%B")
  end

  def meet_date
    self.date.strftime("%b %e")
  end

  def day
    self.date.strftime("%A")
  end

end
