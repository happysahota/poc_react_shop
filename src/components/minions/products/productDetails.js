import React from "react";

import ProductsStore from "../../../dataStore/ProductsStore";

import Features from "./detailsMinions/features";
import Details from "./detailsMinions/details";
import Overview from "./detailsMinions/overview";
import SocialIcons from "../extras/socialIcons";
import Recommended from "../extras/recommended";

export default class ProductDetails extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            productDetails: ProductsStore.getProduct()
        }

    }

    render() {

        var data = this.state.productDetails;
        document.title = data.window_title;
        
        return (
            <div data-test="product-view" className="product">
                <div data-test="product-view__itemscope" itemScope="">
                    <nav className="breadcrumbs" aria-label="Breadcrumb Navigation">
                        <ol className="breadcrumbs__list" data-test="breadcrumbs-list">
                            <li className="breadcrumbs__crumb"><a data-test="breadcrumb-link" href="/en-US/"><span className="markup">Home</span></a></li>
                            <li className="breadcrumbs__crumb"><a type="page" data-test="breadcrumb-link" href="/en-US/Architecture-ByTheme"><span className="markup">Architecture</span></a></li>
                            <li className="breadcrumbs__crumb"><span className="markup" data-test="breadcrumb-page-title">Arc de Triomphe</span></li>
                        </ol>
                    </nav>
                    <Overview data={data} />
                    <Details data={data} />
                    <SocialIcons data={data} />
                    <Features data={data} />
                </div>
                <Recommended />
            </div>
        );
    }
}