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
import GreetingContainer from './greeting/greeting_container';
import ProductIndexContainer from './products/product_index_container';
import CreateProductFormContainer from './products/create_product_form_container';
import ProductShowContainer from './products/product_show_container';
import EditProductFormContainer from './products/edit_product_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Footer from './footer/footer';

const App = () => (
    <div>
        <Modal />
        <header>

            <Nav/>
            <GreetingContainer />
        </header>
        <Switch>
            <Route exact path="/api/products/new" component={CreateProductFormContainer} />
            <Route exact path="api/products/:productId" component={ProductShowContainer} />
            <ProtectedRoute path="api/products/:productId/edit" component={EditProductFormContainer} />
            <Route exact path="/" component={ProductIndexContainer} />
        </Switch>
        <Footer />
    </div>
);

export default App;