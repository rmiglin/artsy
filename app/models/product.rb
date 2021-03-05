class Product < ApplicationRecord
    validates :product_name, :seller_id, :price, :description, :quantity, :photo, presence: true

    has_many :items_carted,
        foreign_key: :product_id,
        class_name: :Cart
    
    has_many :reviews,
        foreign_key: :product_id,
        class_name: :Review
   
    has_one_attached :photo
    belongs_to :seller,
        foreign_key: :seller_id,
        class_name: :User  
        
end