class AddCoffeeTimesRefToCoffeeSchedules < ActiveRecord::Migration[5.2]
  def change
    add_reference :coffee_schedules, :coffee_time, foreign_key: true
  end
end
