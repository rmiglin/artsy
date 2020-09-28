json.extract! product, :id, :product_name, :seller_id, :price, :quantity, :description
json.picture_url url_for(product.photo) if product.photo.attached?