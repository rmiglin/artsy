export const fetchCartedItems = () => {
    return $.ajax({
        url: "/api/session/carts"
    });
}

export const createCartedItem = (body) => {
    return $.ajax({
        method: "POST",
        url: `/api/session/carts`,
        data: { cart: body }
    });
}

export const deleteCartedItem = (id) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/session/carts/${id}`
    });
}