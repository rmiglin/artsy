import * as ProductAPIUtil from '../util/product_api_util';

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

const receiveProducts = (products) => {
    return {
        type: RECEIVE_PRODUCTS,
        products
    };
};

const receiveProduct = (product) => {
    return {
        type: RECEIVE_PRODUCT,
        product
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
            return dispatch(receiveProduct(product));
        })
    }
}

