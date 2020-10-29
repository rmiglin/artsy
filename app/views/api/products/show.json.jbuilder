json.product do
    json.partial! '/api/products/product', product: @product
end

json.users do 
    json.set! @product.seller_id do 
        json.partial! 'api/users/user', user: @product.seller
    end
end


