import React from "react";

import productFeaturesSVG from "../../../../assets/svg/product-features.svg";

export default class Features extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        var data = this.props.data;

        return (
            <div className="product-features">
                <div className="product-features__wrapper">
                    <div className="section-title">
                        <h2><img src={productFeaturesSVG} alt="" data-test="section-title-image" /><span data-test="section-title"><span className="markup">Features</span></span></h2></div>
                    <div className="product-features__img-holder"><img src={"https://sh-s7-live-s.legocdn.com/is/image//LEGO/"+data.product_code+"_alt1?$main$"} alt={data.meta_description} className="product-features__img" data-test="product-features-img" itemProp="image" />
                        <button type="button" className="add-to-cart-button" data-test="add-to-cart-button-21036-features"><span>ADD TO BAG</span></button>
                    </div>
                    <div className="product-features__expand--hidden" data-test="expanding-menu-item">
                        <header className="product-features__expand__header" data-test="expanding-menu-item-header">See More Features</header>
                        <div className="product-features__expand__body" data-test="expanding-menu-item-body">
                            <span className="product-features__description markup" data-test="product-features-description" dangerouslySetInnerHTML={{__html: data.long_description_html}}></span>
                            <div className="product-features__instructions-container"><a href={"https://wwwsecure.us.lego.com/service/buildinginstructions/search#?search&amp;text="+data.product_code} className="product-features__building-instructions" data-test="building-instructions" target="_blank">Building Instructions</a></div>
                            <button type="button" className="add-to-cart-button" data-test={"add-to-cart-button-"+data.product_code+"-features"}><span>ADD TO BAG</span></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}