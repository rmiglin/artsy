class AddIndexToAuthorId < ActiveRecord::Migration[5.2]
  def change
    add_index :reviews, [:author_id, :product_id], unique: true
  end
end
