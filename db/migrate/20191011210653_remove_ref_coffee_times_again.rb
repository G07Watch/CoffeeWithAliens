class RemoveRefCoffeeTimesAgain < ActiveRecord::Migration[5.2]
  def change
    remove_reference :coffee_schedules, :coffee_times, foreign_key: true
  end
end
