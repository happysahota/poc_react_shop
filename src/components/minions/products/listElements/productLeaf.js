import React from "react";

import * as Actions from "../../../../DispatcherActions";

export default class ProductLeaf extends React.Component {

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

        var url = "/en-US/"+data.seo_path+"/details";
        var listPrice = data.skus[0].list_price;

        var ratingStyle = {
            width: data.rating+"%"
        };

        var isFavorite = this.state.isFavorite;


        return (
            <div className="product-leaf" data-test="product-leaf-10258">
                <div className="product-leaf__product"><a className="product-leaf__link-image" data-test="product-leaf-link-image" href={url}><img src={data.media} alt={data.name_html} /></a>
                    <button type="button" onClick={this.toggleFavorite.bind(this)} className={isFavorite?"product-leaf__favourite--active":"product-leaf__favourite"} data-test="product-leaf-add-to-wishlist-heart">
                        <span><span>ADD TO WISHLIST</span></span>
                    </button>
                </div>
                <div className="product-leaf__details">
                    <div className="badges">
                        { data.featured==="newFlag" && <div className="badges__flag" data-test="product-flag">New</div> }
                    </div><span className="product-leaf__id" data-test="product-leaf-id">{data.product_code}</span>
                    <h2 className="product-leaf__title" data-test="product-leaf-title">
                        <a className="product-leaf__link-title" data-test="product-leaf-link-title" href={url}>
                            <span className="markup" dangerouslySetInnerHTML={{__html:data.name_html}}></span>
                        </a>
                    </h2>
                    <div className="product-leaf__ratings">
                        <div className="ratings">
                            <div className="ratings__rating-brick" data-test="rating-display" style={ratingStyle}></div>
                        </div>
                    </div>
                    <div className="product-leaf__price-container" data-test="product-leaf-pricing">
                        <div className="product-price">
                            <div className="product-price__list" data-test="list-price"><b className="product-price__accessibility">product_label_list_price_accessibility</b><span data-test="list-pricing"
                                className="product-price__list-price">${listPrice}</span></div>
                        </div>
                    </div>
                    <div className="product-leaf__spacer--btn" data-test="product-leaf-spacer">
                        <div><span>product_button_add_to_bag</span></div>
                    </div>
                </div>
                <div className="product-leaf__cta" data-test="product-leaf-cta"><button type="button" onClick={this.bagClickHandler.bind(this)} className="product-leaf__cta-btn--orange" data-test="product-leaf-cta-add-to-cart"><span>ADD TO BAG</span></button></div>
            </div>
        );
    }
}