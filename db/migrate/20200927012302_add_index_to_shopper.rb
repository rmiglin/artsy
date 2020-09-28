class AddIndexToShopper < ActiveRecord::Migration[5.2]
  def change
    add_index :carts, :shopper_id
  end
end
