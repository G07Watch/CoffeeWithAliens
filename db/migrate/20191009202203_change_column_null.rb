class ChangeColumnNull < ActiveRecord::Migration[5.2]
  def change
    change_column_null :star_systems, :name, false
  end
end
