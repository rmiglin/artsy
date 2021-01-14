import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import Modal from './modal/modal';
import Nav from './nav/nav_container';
import ProductIndexContainer from './products/product_index_container';
import CreateProductFormContainer from './products/create_product_form_container';
import ProductShowContainer from './products/product_show_container';
import EditProductFormContainer from './products/edit_product_form_container';
import CartIndexContainer from './carts/cart_index_container';
import ReviewIndexContainer from './reviews/review_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Footer from './footer/footer';

let test = true;

const App = () => (
    <div>
        <Modal />
        <header>

            <Nav test={test}/>
        </header>
        <Switch>
            <Route exact path="/api/products/new" component={CreateProductFormContainer} />
            <Route exact path="/products/:productId" component={ProductShowContainer} />
            <ProtectedRoute exact path="/products/:productId/edit" component={EditProductFormContainer} />
            <Route exact path="/api/session/carts" component={CartIndexContainer} />
            <Route exact path="/api/reviews" component={ReviewIndexContainer} />
            <Route exact path="/" component={ProductIndexContainer} />
        </Switch>
        <Footer />
    </div>
);

export default App;