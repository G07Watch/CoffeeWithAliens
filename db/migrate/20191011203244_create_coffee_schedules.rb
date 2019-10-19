class CreateCoffeeSchedules < ActiveRecord::Migration[5.2]
  def change
    create_table :coffee_schedules do |t|

      t.timestamps
    end
    add_reference :coffee_schedules, :user, foreign_key: true
    add_reference :coffee_schedules, :coffee_times, foreign_key: true
  end
end
