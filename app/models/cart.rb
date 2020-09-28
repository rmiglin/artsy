class Cart < ApplicationRecord
    validates :shopper_id, presence: true, uniqueness: true

    has_many :products
end