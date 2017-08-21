import React from "react";

import productDetailsSVG from "../../../../assets/svg/product-details.svg";

export default class Details extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        var data = this.props.data;

        return (
            <div className="product-details">
                <div className="product-details__wrapper">
                    <div className="section-title">
                        <h2><img src={productDetailsSVG} alt="" data-test="section-title-image" /><span data-test="section-title"><span className="markup">Product Details</span></span></h2></div>
                    <p className="product-details__description markup" itemProp="description" data-test="product-details__description">{data.description}</p>
                    <dl data-test="product-details__product-code-wrapper"><dt>Item</dt>
                        <dd className="product-details__product-code" data-test="product-details__product-code">{data.product_code}</dd>
                    </dl>
                    <dl data-test="product-details__vip-points-wrapper"><dt>VIP Points</dt>
                        <dd><span className="product-details__vip-points" data-test="product-details__vip-points">{data.skus[0].vip_points}</span>
                            <div className="tooltip">
                                <button type="button" className="tooltip__button"><span>tooltip.open</span></button><span className="tooltip__dialog-container" data-test="dialog-container"></span></div>
                        </dd>
                    </dl>
                    <dl data-test="product-details__ages-wrapper"><dt>Ages</dt>
                        <dd className="product-details__ages" data-test="product-details__ages">{data.ages}</dd>
                    </dl>
                    <dl data-test="product-details__piece-count-wrapper"><dt>Pieces</dt>
                        <dd className="product-details__piece-count" data-test="product-details__piece-count">{data.piece_count}</dd>
                    </dl>
                </div>
            </div>
        );
    }
}