export const fetchProducts = (userId) => {
    return $.ajax({
        url: "/api/products"   
    });
}

export const fetchProduct = (productId) => {
    return $.ajax({
        url: `/api/products/${productId}`
    });
}

export const createProduct = (body) => {
    return $.ajax({
        method: "POST",
        url: `/api/users/${body.seller_id}/products`,
        data: {product: body}
    });
}

export const updateProduct = (body, id) => {
    debugger;
    return $.ajax({
        method: "PATCH",
        url: `/api/products/${id}`,
        data: {product: body}
    });
}

export const deleteProduct = (id) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/products/${id}`
    });
}