class AddIndexToAuthorId < ActiveRecord::Migration[5.2]
  def change
    add_index :reviews, :author_id
    add_index :reviews, :product_id
  end
end
