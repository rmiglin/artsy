class CreateCart < ActiveRecord::Migration[5.2]
  def change
    create_table :carts do |t|
      t.integer :shopper_id, null: false, unique: true
      t.integer :total, null: false

      t.timestamps
    end
  end
end
