class CreateCoffeeTimes < ActiveRecord::Migration[5.2]
  def change
    create_table :coffee_times do |t|
      t.string :place
      t.datetime :date
      t.integer :start_time
      t.integer :available_seats

      t.timestamps
    end
    add_reference :coffee_times, :host, foreign_key: true
    add_reference :coffee_times, :star_system, foreign_key: true
  end
end
