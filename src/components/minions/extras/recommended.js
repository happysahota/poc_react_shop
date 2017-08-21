import React from "react";
import GeneralStore from "../../../dataStore/GeneralStore";

import ProductLeaf from "../products/listElements/productLeaf";

import recommended from "../../../assets/svg/exclusives.svg";

export default class Recommended extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: GeneralStore.getmBoxData()
        };
    }

    render() {

        var { recommendations } = this.state.data;

        var listDataHtml = recommendations.map((pData, key) => {
            return (
                <div className="product-leaf" data-test={"product-leaf-"+pData.productCode} key={key}>
                    <div className="product-leaf__product">
                        <a className="product-leaf__link-image" data-test="product-leaf-link-image" href={"/en-US/"+pData.pageURL}>
                            <img src={"https://sh-s7-live-s.legocdn.com/is/image/LEGO/"+pData.productCode+"?$leaf2$"} alt="Series 17" />
                        </a>
                        <button type="button" className="product-leaf__favourite" data-test="product-leaf-add-to-wishlist-heart"><span><span>ADD TO WISHLIST</span></span>
                        </button>
                    </div>
                    <div className="product-leaf__details"><span className="product-leaf__id" data-test="product-leaf-id">{pData.productCode}</span>
                        <h2 className="product-leaf__title" data-test="product-leaf-title"><a className="product-leaf__link-title" data-test="product-leaf-link-title" href={"/en-US/"+pData.pageURL}><span className="markup">{pData.name}</span></a></h2>
                        <div className="product-leaf__ratings">
                            <div className="ratings">
                                <div className="ratings__rating-brick" data-test="rating-display" style={{ width: pData.rating+"%" }}></div>
                            </div>
                        </div>
                        <div className="product-leaf__price-container" data-test="product-leaf-pricing">
                            <div className="product-price">
                                <div className="product-price__list--sale" data-test="list-price"><b className="product-price__accessibility">product_label_list_price_accessibility</b><del data-test="list-pricing" className="product-price__list-price">{pData.priceFormatted}</del>
                                </div>
                                <div className="product-price__sale" data-test="sale-price"><b className="product-price__accessibility">product_label_sale_price_accessibility</b><span data-test="formatted-value">{pData.salePriceFormatted}</span>
                                </div>
                            </div>
                        </div>
                        <div className="product-leaf__spacer--btn" data-test="product-leaf-spacer">
                            <div><span>product_button_add_to_bag</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-leaf__cta" data-test="product-leaf-cta">
                        <button type="button" className="product-leaf__cta-btn--orange" data-test="product-leaf-cta-add-to-cart"><span>ADD TO BAG</span>
                        </button>
                    </div>
                </div>
            );
        });

        return (
            <section className="recommended">
                <div className="recommended__container">
                    <div className="section-title">
                        <h2><img src={recommended} alt="" data-test="section-title-image" /><span data-test="section-title"><span className="markup">Recommended</span></span></h2>
                    </div>
                    <div className="recommended__content">
                        <div className="product-leaf-group" data-test="product-leaf-group">
                            {listDataHtml}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}