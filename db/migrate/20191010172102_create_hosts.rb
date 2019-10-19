class CreateHosts < ActiveRecord::Migration[5.2]
  def change
    create_table :hosts do |t|
      t.string :facebook
      t.text :intro, null: false
      t.text :story, null: false
      t.text :topics, null: false

      t.timestamps
    end
    add_reference :hosts, :user, foreign_key: true
  end
end
