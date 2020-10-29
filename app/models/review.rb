class Review < ApplicationRecord
    validates :author_id, :product_id, :rating, presence: true
    validates :author_id, uniqueness: { scope: :product_id}

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User
    
    belongs_to :product,
        foreign_key: :product_id,
        class_name: :Product

end