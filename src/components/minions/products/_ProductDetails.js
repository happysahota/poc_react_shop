import React from "react";

import ProductsStore from "../../../dataStore/ProductsStore";
import ProductFeatures from "../extras/ProductFeatures";

import * as Actions from "../../../DispatcherActions";

export default class ProductDetails extends React.Component {

    constructor() {
        super();
        Actions.fetchPageData("productDetails");
    }

    BasketHandler(sku) {
        if(!sku){
            alert("invalid sku");
        }
        Actions.addToBasket(sku);
    }

    render() {

        const product = ProductsStore.getProduct(this.props.match.params.productId);
        const featureHtml = <ProductFeatures feats={product.additonalFeats}/>
        const warningImages = product.extraInfoIcons.map((warnImg, id)=><img key={id} src={warnImg.img} alt={warnImg.text} />);
        const GalleryThumbs = product.images.gallery.map((thumbs, id)=>{
            let activeClass= id==0?"active":"";
            return <div key={id} class={"gallery-thumb "+activeClass}><img src={thumbs} class="gallery-thumb__image" /></div>
        });

        return (

            <div data-ng-controller="ProductDetailCtrl as product" class="ng-scope">

                <div class="product-detail ng-scope" data-ng-controller="ProductDetailGalleryCtrl as productDetailGallery">
                    <div class="container">

                        <div class="product-gallery">
                            <div class="gallery-column image-gallery-container col-sm-8" data-ng-hide="productDetailGallery.showingVideo">
                                <div class="gallery-container full-gallery">
                                    <div class="gallery__images">
                                        <img src={product.images.hero} class="gallery__image currently-showing" />
                                    </div>
                                </div>
                                <div class="product-gallery-loader ng-hide" data-ng-show="productDetailGallery.isLoading">
                                    <div class="spinner">
                                        <div class="rect1"></div>
                                        <div class="rect2"></div>
                                        <div class="rect3"></div>
                                        <div class="rect4"></div>
                                        <div class="rect5"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="gallery-column product-content-container col-sm-4" data-ng-hide="productDetailGallery.showingVideo">
                                <div class="content-block">
                                    <h1>{product.name}</h1>

                                    <div class="product-details-slider__add-to-basket__product-id">
                                        {product.id}
                                    </div>
                                    {
                                        product.extraInfoIcons.length > 0 && <div class="info-icon boderless">
                                            {warningImages}
                                        </div>
                                    }
                                    
                                    <div class="push__top_large push__down">
                                        <span class="product-details-slider__add-to-basket__price__taxed">{product.price}</span>
                                    </div>

                                    <div class="form__input_wrap inline-block block-phone fill-width-mobile" data-ng-hide="product.hideBasket">
                                        <div class="modern-select">
                                            <select data-ng-model="product.quantity" data-ng-options="opt as opt.label for opt in product.quantities" class="fill-width-mobile ng-pristine ng-untouched ng-valid ng-not-empty"
                                                data-ng-change="productDetailGallery.updateNumber(0, product.quantity)" defaultValue="object:45">
                                                <option label="1" value="object:40">1</option>
                                                <option label="2" value="object:41">2</option>
                                                <option label="3" value="object:42">3</option>
                                                <option label="4" value="object:43">4</option>
                                                <option label="5" value="object:44">5</option>
                                                <option label="6" value="object:45">6</option>
                                                <option label="7" value="object:46">7</option>
                                                <option label="8" value="object:47">8</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="product-details-slider__add-to-basket__button" data-ng-hide="product.hideBasket">
                                        <div class="product-details-slider__error-adding-product ng-binding ng-hide" data-ng-show="product.addToBasketError"></div>
                                        <button class="button_primary fill-width-mobile" data-ng-disabled="product.addToBasketButtonLoading || false" onClick={this.BasketHandler.bind(this,product.sku)} data-ng-click="product.addToBasket(&#39;4646265&#39;)">
                                            Add to basket
                                            <div data-ng-show="loading" class="product-details-slider__add-to-basket__button-loader ng-isolate-scope ng-hide">
                                                <div class="spinner">
                                                    <div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div>
                                                </div>
                                            </div>
                                        </button>

                                    </div>

                                </div>
                            </div>


                            <div class="gallery__video-wrapper ng-hide" data-ng-show="productDetailGallery.showingVideo == true">
                                <div class="spinner">
                                    <div class="rect1"></div>
                                    <div class="rect2"></div>
                                    <div class="rect3"></div>
                                    <div class="rect4"></div>
                                    <div class="rect5"></div>
                                </div>
                                <div class="video__close" data-ng-click="productDetailGallery.unloadVideo()"></div>
                            </div>
                        </div>
                        {/*<div class="gallery-thumbs">
                            {GalleryThumbs}
                        </div>*/}
                    </div>
                </div>

                <div class="product-details theme-content-preschool">
                    <div class="layout__inner">

                        <div class="row">
                            <div class="col-xs-12 col-sm-8 product-details__content">

                                <h4 class="product-details_uppercase">
                                    Product description
                                </h4>

                                <div class="product-details__description rich-text">
                                    <p dangerouslySetInnerHTML={{__html:product.prodDesc}}></p>
                                    { product.additonalFeats.length > 0 && featureHtml}
                                </div>

                                <div class="product-details__icon-container">
                                    {product.ageGroup.length > 0 && <div class="info-icon product-details__icon-container__icon">
                                        <span>{product.ageGroup}</span>
                                    </div>}
                                    {product.bricks.length > 0 && <div class="info-icon lego product-details__icon-container__icon">
                                        <span class="icon"></span>
                                        <span>{product.bricks}</span>
                                    </div>}
                                </div>
                                <div class="product-details__attributes">
                                    <ul class="no-margin">
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-4">
                                <div class="product-details__product-line">

                                    <div class="no-mobile">
                                        <img src="./assets/preschool-8d97d41d810ee7b77c5e2f45a244abc5.svg" alt="Preschool" />
                                    </div>

                                    <div class="relative no-mobile">

                                        <div class="product-details__product-line-description text-color-preschool">
                                            So Many Ways to Learn, Together </div>
                                    </div>

                                    <ul class="product-details__product-line-list list_none text-center no-mobile text-preschool">
                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>


            </div>



        );
    }
}