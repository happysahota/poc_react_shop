import React from "react";
import {Route, Redirect} from "react-router-dom";

import HomePage from "./HomePage"
import ProductList from "../products/ProductList";
import ProductDetails from "../products/productDetails";
// import ProductDetails from "../products/ProductDetails";

export default class ContentContainer extends React.Component {

    render() {
        return (
            <div className="content-wrapper">
                <Route exact path="/" render={() => <Redirect to="/en-US"/>}></Route>
                <Route exact path="/:locale" component={HomePage}></Route>
                <Route exact path="/:locale/:catId" component={ProductList}></Route>
                <Route exact path="/:locale/:catId/details" component={ProductDetails}></Route>
            </div>
        );
    }
}