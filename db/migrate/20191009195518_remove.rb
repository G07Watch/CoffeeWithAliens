class Remove < ActiveRecord::Migration[5.2]
  def change
    remove_reference :users, :star_system, foreign_key: true, index: { unique: true }
  end
end
