import React from "react";
import {Link} from "react-router-dom";

import * as Actions from "../../../DispatcherActions";
import ProductsStore from "../../../dataStore/ProductsStore"

import Banner from "../extras/banner";

// import SideBar from "../sidebar/SideBar";
// import ProductListItemLink from "./ProductListItemLink";
import ProductResultList from "./listElements/productResultList";

export default class ProductList extends React.Component {

    constructor() {
        super();
        this.state = { 'ProductsList' : ProductsStore.getProducts() };
    }

    render () {
        // let ProductsListHtml = this.ProductsList.map((product)=><ProductListItemLink data={product} key={product.id}/>);
        var productData = this.state.ProductsList;

		document.title = productData[0].window_title;

		var dynaSection = productData[0].sections;

		var productListingData = productData[1];

		var dynaSectionHtml = dynaSection.map((section, key)=>{
			
			var sectionType = section.section_type;
			var ret = '';			
			switch(sectionType){
				case "banner":
					ret = <Banner key={key} data={section}/>
					break;
				case "productListing":
					ret = <ProductResultList key={key} data={productListingData}/>
					break;
				default:
					ret = null;
					break
			}
			return ret;
		});

        return (
            <main className="product-listing" data-test="main" data-testid="113">
					<div className="product-listing__content" data-test="page-content" data-testid="114">
						<nav className="breadcrumbs" aria-label="Breadcrumb Navigation" data-testid="115">
							<ol className="breadcrumbs__list" data-test="breadcrumbs-list" data-testid="116">
								<li className="breadcrumbs__crumb" data-testid="117"><a data-test="breadcrumb-link" href="https://shop.lego.com/en-US/" data-testid="118"><span className="markup" data-testid="119">Home</span></a></li>
								<li className="breadcrumbs__crumb"><a type="page" data-test="breadcrumb-link" href="https://shop.lego.com/en-US/Sets-Home"><span className="markup">SETS</span></a></li>
								<li className="breadcrumbs__crumb"><span className="markup" data-test="breadcrumb-page-title">My Selections</span></li>
							</ol>
						</nav>
						<div className="dynamic-sections" data-test="dynamic-sections" data-testid="121">
							<div className="dynamic-sections__container" data-test="dynamic-sections-container" data-testid="122">
								<div className="product-listing__container" data-test="product-listing-results">
									{dynaSectionHtml}
								</div>
							</div>
						</div>
					</div>
				</main>
        );
    }
}