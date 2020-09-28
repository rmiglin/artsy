class CreateProduct < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :product_name, null: false
      t.integer :seller_id, null: false, unique: true
      t.integer :price, null: false
      t.integer :quantity, null: false
      t.text :description, null: false

      t.timestamps

    end
  end
end
