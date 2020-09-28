class Product < ApplicationRecord
    validates :product_name, :seller_id, :price, :description, :quantity, presence: true
    
    has_many :carts
    has_one_attached :photo
end