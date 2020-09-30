json.products do 
    @products.each do |product|
        json.set! product.id do 
            json.partial! 'product', product: product
        end
    end
end

json.users do 
    @products.each do |product|
        json.set! product.seller_id do 
            json.partial! 'api/users/user', user: product.seller
        end
    end
end