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
                <Route exact path="/" render={() => <Redirect to="/en-US/CitySets-21036"/>}></Route>
                {/*<Route exact path="/:locale" component={HomePage}></Route>*/}
                {/*<Route exact path="/:locale/:catId" component={ProductList}></Route>*/}
                <Route exact path="/:locale/:categ-:catId" component={ProductDetails}></Route>
            </div>
        );
    }
}