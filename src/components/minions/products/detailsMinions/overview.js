import React from "react";

import * as Actions from "../../../../DispatcherActions";

export default class Overview extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isFavorite: false
        };

    }

    bagClickHandler(){
        Actions.updateBag();
    }

    toggleFavorite() {
        this.setState({isFavorite: !this.state.isFavorite});

        if(this.state.isFavorite){
            Actions.updateWishlist(-1);
        }else{
            Actions.updateWishlist(1);
        }
    }

    render() {

        var data = this.props.data;
        var tagsHtml = data.tags.map((data, key) => {
            return (
                <div className="badges" key={key}>
                    <a className="badges__tag" data-test="tag-link" href={"/en-US/" + data.seo_path}>{data.title_html}</a>
                </div>
            );
        });
        return (
            <div className="overview" data-test="overview">
                <div className="overview__wrapper">
                    <div className="overview__product-viewer">
                        <div className="badges">
                            {data.flags.indexOf('New') !== -1 && <div className="badges__flag" data-test="product-flag">New</div>}
                        </div>
                        <div className="product-viewer" data-reactid="130">
                            <div className="viewer-default-image" data-reactid="131" hidden>
                                <img src={"https://sh-s7-live-s.legocdn.com/is/image/LEGO/" + data.product_code + "?$PDPDefault$"} alt="" data-reactid="132" />
                            </div>
                            <div className="viewer-container" id="viewer-container" data-reactid="133">
                                <div id="s7container" className="s7container" data-description="Scene7ComponentHolder" data-component="Container" lang="en" mode="normal" style={{ position: "relative", height: "426px" }}>
                                    <div mode="normal" className="s7container s7innercontainer" id="s7container_inner">
                                        <div id="fullScreenBtn" className="s7button s7fullscreenbutton" data-description="Scene7ComponentHolder" data-component="FullScreenButton" lang="en" data-state="up" selected="false"></div>
                                        <div id="s7swatches" className="s7swatches" data-description="Scene7ComponentHolder" data-component="Swatches" lang="en" style={{ width: "758px", height: "46px", position: "absolute" }}>
                                            <div style={{ width: "122px", height: "47px", position: "absolute", overflow: "hidden", left: "318px", top: "-0.5px" }}>
                                                <div style={{ position: "absolute", width: '112px', height: '47px', left: '0px', top: '0px', transform: 'translateZ(0px)' }}>
                                                    <div className="s7thumbcell" style={{ margin: "0px", position: "absolute", left: "5px", top: "5px" }}>
                                                        <div className="s7thumb" data-state="default" style={{ backgroundRepeat: "no-repeat", backgroundPosition: "center center", width: "46px", height: "37px", backgroundImage: "url('https://sh-s7-live-s.legocdn.com/is/image/LEGO/" + data.product_code + "?fit=constrain,1&wid=46&hei=37&fmt=jpg')" }}>
                                                            <div className="s7thumboverlay" type="image" style={{ backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}></div>
                                                        </div>
                                                    </div>
                                                    <div className="s7thumbcell" style={{ margin: '0px', position: "absolute", left: "61px", top: "5px" }}>
                                                        <div className="s7thumb" data-state="selected" style={{ backgroundRepeat: "no-repeat", backgroundPosition: "center center", width: "46px", height: "37px", backgroundImage: "url('https://sh-s7-live-s.legocdn.com/is/image/LEGO/" + data.product_code + "_alt1?fit=constrain,1&wid=46&hei=37&fmt=jpg')" }}>
                                                            <div className="s7thumboverlay" type="image" style={{ backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="s7zoomView" className="s7flyoutzoomview" data-description="Scene7ComponentHolder" data-component="FlyoutZoomView" lang="en" style={{ width: "758px", height: "426px" }}>
                                            <div className="s7staticimage" style={{ position: "absolute", overflow: "hidden", left: "95px", top: "0px", width: "568px", height: "426px" }}>
                                                <img src={"https://sh-s7-live-s.legocdn.com/is/image/LEGO/" + data.product_code + "?id=fs6Qz1&fmt=jpg&fit=constrain,1&wid=568&hei=426&qlt=80,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,6,0&iccEmbed=0&printRes=72"} style={{ pointerEvents: "none", position: "absolute", left: "0px", top: "0px", opacity: 1, width: "568px", height: "426px" }} />
                                                <img src={"https://sh-s7-live-s.legocdn.com/is/image/LEGO/" + data.product_code + "_alt1?id=oWuQ93&fmt=jpg&fit=constrain,1&wid=568&hei=426&qlt=80,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,6,0&iccEmbed=0&printRes=72"} style={{ pointerEvents: "none", position: "absolute", width: "568px", height: "426px", left: "0px", top: "0px", opacity: "0" }} />
                                            </div>
                                            <div className="s7flyoutzoom" style={{ overflow: "hidden", pointerEvents: "none", display: "none", width: "758px", height: "426px", position: "absolute", left: "0px", top: "0px", opacity: 0, zoom: 1 }}>
                                                {/*<div style="position: relative; width: 758px; height: 426px;">
                                                            <img src="https://sh-s7-live-s.legocdn.com/is/image/LEGO/21036_alt1?id=oWuQ93&fmt=jpg&fit=constrain,1&wid=568&hei=426&qlt=80,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,6,0&iccEmbed=0&printRes=72" style="position: absolute; left: 0px; top: -546px; width: 1704px; height: 1278px;"/>
                                                            <img src="https://sh-s7-live-s.legocdn.com/is/image/LEGO/21036_alt1?id=oWuQ93&scl=1.4084507&qlt=80,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,6,0&iccEmbed=0&printRes=72&req=tile&rect=0,512,256,256&fmt=jpg" style="display: block; position: absolute; zoom: 1; left: 0px; top: -34px;"/>
                                                            <img src="https://sh-s7-live-s.legocdn.com/is/image/LEGO/21036_alt1?id=oWuQ93&scl=1.4084507&qlt=80,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,6,0&iccEmbed=0&printRes=72&req=tile&rect=256,512,256,256&fmt=jpg" style="display: block; position: absolute; zoom: 1; left: 256px; top: -34px;"/>
                                                            <img src="https://sh-s7-live-s.legocdn.com/is/image/LEGO/21036_alt1?id=oWuQ93&scl=1.4084507&qlt=80,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,6,0&iccEmbed=0&printRes=72&req=tile&rect=512,512,256,256&fmt=jpg" style="display: block; position: absolute; zoom: 1; left: 512px; top: -34px;"/>
                                                            <img src="https://sh-s7-live-s.legocdn.com/is/image/LEGO/21036_alt1?id=oWuQ93&scl=1.4084507&qlt=80,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,6,0&iccEmbed=0&printRes=72&req=tile&rect=0,768,256,256&fmt=jpg" style="display: block; position: absolute; zoom: 1; left: 0px; top: 222px;"/>
                                                            <img src="https://sh-s7-live-s.legocdn.com/is/image/LEGO/21036_alt1?id=oWuQ93&scl=1.4084507&qlt=80,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,6,0&iccEmbed=0&printRes=72&req=tile&rect=256,768,256,256&fmt=jpg" style="display: block; position: absolute; zoom: 1; left: 256px; top: 222px;"/>
                                                            <img src="https://sh-s7-live-s.legocdn.com/is/image/LEGO/21036_alt1?id=oWuQ93&scl=1.4084507&qlt=80,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,6,0&iccEmbed=0&printRes=72&req=tile&rect=512,768,256,256&fmt=jpg" style="display: block; position: absolute; zoom: 1; left: 512px; top: 222px;"/>
                                                        </div>*/}
                                            </div>
                                            <div id="InfoMessage_5" className="s7tip" data-description="Scene7ComponentHolder" data-component="undefined" style={{ display: "none", left: "0px", opacity: 0 }}>Mouse over image for a closer look</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="product-viewer__next-button" data-test="product-viewer-next-button"><span>NEXT</span>
                            </button>
                            <button type="button" className="product-viewer__previous-button" data-test="product-viewer-previous-button"><span>common_button_previous</span>
                            </button>
                        </div>
                    </div>
                    <div className="overview__info">
                        <div className="overview__container--center">
                            <a className="brand-link" data-test="brand-link" href="/en-US/Architecture-ByTheme"><img src="https://sh-s7-live-s.legocdn.com/is/image/LEGOMKTG/logo%2D%2Darchitecture?$ProductLogo$" alt="" data-test="brand-logo" /><span itemProp="brand" className="brand-title" data-test="brand-title">Architecture</span></a><span className="overview__manufacturer" itemProp="manufacturer">LEGO®</span>
                            <h1 className="overview__name markup" data-test="overview-name" itemProp="name" dangerouslySetInnerHTML={{ __html: data.name_html }}></h1>
                            <div className="product-price">
                                <div className="product-price__list" data-test="list-price"><b className="product-price__accessibility">product_label_list_price_accessibility</b><span data-test="list-pricing" className="product-price__list-price">{data.skus[0].list_price_formatted}</span></div>
                            </div>
                            {data.availability_status === 'E_AVAILABLE' && <div className="available--now">Available now</div>}
                            <div className="overview__ratings">
                                <div className="ratings">
                                    <div className="ratings__rating-brick" data-test="rating-display" style={{ width: data.rating_percentage + "%" }}><span itemProp="aggregateRating" itemScope="" itemType="//schema.org/AggregateRating" data-test="rating-aggregate"><span itemProp="ratingValue" data-test="rating-value">85.8%</span><span itemProp="ratingCount" data-test="rating-count">{data.total_review_count}</span></span>
                                    </div>
                                </div><a href="#product-reviews" rel="nofollow" className="overview__reviews" data-test="overview-link-reviews">{data.total_review_count} Reviews</a>
                                <button type="button" className="overview__submit-review" data-test="overview-link-submit-review"><span>Submit Review</span></button>
                            </div>
                        </div>
                        <div className="overview__pickers">
                            <div className="overview__quantity-select">
                                {data.skus[0].show_limit && <div className="overview__quantity-label" data-test="label-quantity">Limit {data.skus[0].max_order_quantity}
                                    <div className="tooltip">
                                        <button type="button" className="tooltip__button"><span>tooltip.open</span></button><span className="tooltip__dialog-container" data-test="dialog-container"></span></div>
                                </div>}
                                <div className="overview__quantity-picker">
                                    <label className="overview__quantity-selector">
                                        <div className="overview__quantity-selector__select js">
                                            <select data-test="select-quantity">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select><span className="overview__quantity-selector__selected">1</span></div>
                                    </label>
                                </div>
                            </div>
                            <div className="overview__label-safety-warning"></div>
                            <button onClick={this.bagClickHandler.bind(this)} type="button" className="add-to-cart-button" data-test={"add-to-cart-button-" + data.product_code + "-overview"}><span>ADD TO BAG</span></button>
                        </div>
                        <button type="button" onClick={this.toggleFavorite.bind(this)} className="add-to-wishlist-button" data-test="add-to-wishlist"><span>ADD TO WISHLIST</span></button>
                        <div className="overview__container--border">
                            <div className="overview__container--center">
                                <p className="overview__find-more">FIND MORE PRODUCTS LIKE THIS</p>
                            </div>
                        </div>
                        <div className="overview__container--center">
                            {data.tags && tagsHtml}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}