class AddStarSystemRefToUsersAgain < ActiveRecord::Migration[5.2]
  def change
    add_reference :users, :star_system, foreign_key: true
  end
end
