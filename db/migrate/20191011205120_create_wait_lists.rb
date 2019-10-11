class CreateWaitLists < ActiveRecord::Migration[5.2]
  def change
    create_table :wait_lists do |t|
      t.integer :priority

      t.timestamps
    end
    add_reference :wait_lists, :coffee_schedule, foreign_key: true
  end
end
