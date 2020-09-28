class CreateReview < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :author_id, null: false
      t.integer :product_id, null: false
      t.integer :rating, null: false
      t.string :comment
    end
  end
end
