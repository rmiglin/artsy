import * as ProductAPIUtil from '../util/product_api_util';

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

const receiveProducts = (payload) => {
    return {
        type: RECEIVE_PRODUCTS,
        products: payload.products,
        users: payload.users
    };
};

const receiveProduct = (payload) => {
    return {
        type: RECEIVE_PRODUCT,
        product: payload.product,
        users: payload.users
    };
};

const removeProduct = (productId) => {
    return {
        type: REMOVE_PRODUCT,
        productId
    };
};

export const createProduct = (product) => {
    return (dispatch) => {
        return ProductAPIUtil.createProduct(product).then((product) => {
            return dispatch(receiveProduct(product));
        },
        (errorObj) => {
            console.log(errorObj);
        })
    }
}

// We fetch the product, and the users array is a singleton with just the product merchant in the array.
// When we try to render the reviews, we cannot render the review author name, because the users array is a singleton, remember? It doesn't have any of the reviewers!
// So when the API returns the product, product.users should also contain all reviewers as well as the item merchant.

// e.g. Orange Earrings
// Merchant: JewelryByCynthia, id: 168
// Reviewer has author_id: 164
// props.users is [{168: { id: 168, email: 'madhaatter@email.com', first_name: 'JewelryByCynthia' }}]
// Error! There's no props.users[review.author_id] ==> props.users[164]
export const requestProduct = (id) => {
    return (dispatch) => {
        return ProductAPIUtil.fetchProduct(id).then(product => {
            return dispatch(receiveProduct(product));
        })
    }
}

export const requestProducts = () => {
    return (dispatch) => {
        return ProductAPIUtil.fetchProducts().then(products => {
            return dispatch(receiveProducts(products));
        })
    }
}

export const deleteProduct = (productId) => {
    return (dispatch) => {
        return ProductAPIUtil.deleteProduct(productId).then(product => {
            return dispatch(removeProduct(productId));
        })
    }
}

export const updateProduct = (product) => {
    return (dispatch) => {
        return ProductAPIUtil.updateProduct(product).then(product => {
            //debugger;
            return dispatch(receiveProduct(product));
        })
    }
}

