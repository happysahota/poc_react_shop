import React from "react";

import * as Actions from "../../../DispatcherActions"
import PageStore from "../../../dataStore/PageStore";
import GeneralStore from "../../../dataStore/GeneralStore";
import ProductStore from "../../../dataStore/ProductsStore";

export class MiniBasket extends React.Component {

    constructor() {
        super();
        this.state = {
            miniCartClass: 'minicart-wrapper minibasket static ng-scope'
        }
    }

    componentWillMount() {
        GeneralStore.on("hideMiniCart", ()=>{
            this.setState({
                miniCartClass: 'minicart-wrapper minibasket static ng-scope'
            });
        });
        GeneralStore.on("showMiniCart", ()=>{
            this.setState({
                miniCartClass: 'minicart-wrapper minibasket static ng-scope show'
            });
        });
    }

    componentWillUnmount() {
        GeneralStore.removeListener("hideMiniCart");
        GeneralStore.removeListener("showMiniCart");
    }

    toggleMiniCart(){
        Actions.toggleMiniCart();
    }

    render() {
        let minicartClass = this.state.miniCartClass;
        return (
            <div class={minicartClass} data-ng-controller="BasketCtrl as ctrl" data-ng-init="ctrl.init('https://shop.education.lego.com/legoed/en-US/shoppingcart/cart.jsp?lastVisit=https://education.lego.com/en-us/preschool/shop/products')">
                <div className="minibasket__close tabletdesktop" onClick={this.toggleMiniCart.bind(this)}>
                    <span className="icon-remove minibasket__close_icon"></span>
                </div>

                <div className="minibasket__content">
                    <h2 className="text-center">Your basket</h2>

                    <div data-ng-show="loading" className="loading-full ng-isolate-scope ng-hide" >
                        <div className="spinner">
                            <div className="rect1"></div>
                            <div className="rect2"></div>
                            <div className="rect3"></div>
                            <div className="rect4"></div>
                            <div className="rect5"></div>
                        </div>
                    </div>

                    <MinicartItems />

                    <div className="loading-full ng-hide" data-ng-show="ctrl.basketService.isFetching &amp;&amp; ctrl.basketService.items.length === 0"></div>
                </div>



            </div>
        );
    }
}

export class Overlay extends React.Component {

    constructor(props) {
        super(props);
        this.state = { displayClass: 'hide' };
    }

    overlayClicked() {
        Actions.overlayClicked();
    }

    componentWillMount() {
        GeneralStore.on("showOverlay", ()=>{
            this.setState({ displayClass: 'show' });
        });
        GeneralStore.on("hideOverlay", ()=>{
            this.setState({ displayClass: 'hide' });
        });
    }

    componentWillUnmount() {
        GeneralStore.removeListener("showOverlay");
        GeneralStore.removeListener("hideOverlay");
    }

    render() {
        return (
            <div id="overlay" onClick={this.overlayClicked.bind(this)} class={this.state.displayClass}></div>
        );
    }
}

export class MinicartItems extends React.Component {

    constructor() {
        super();

        this.state = {
            basket: {}
        };

    }

    componentWillMount() {
        ProductStore.on('BasketUpdated', () => {
            this.setState({ basket: ProductStore.getBasket() });
        });
    }

    componentWillUnmount() {
        ProductStore.removeListener("BasketUpdated");
    }

    render() {
        const BasketLines = this.state.basket.BasketLines;
        const TotalPrice = this.state.basket.TotalPrice;
        const TotalQuantity = this.state.basket.TotalQuantity;
        const showDetails = BasketLines !== undefined;

        let itemsHtml = '';
        if(showDetails){
            itemsHtml = BasketLines.map((item, id)=>{
                return <div key={id} className="ng-scope">
                            <div className="loading-overlay ng-hide" data-ngshow="ctrl.loading[$index]"></div>
                            <div className="minibasket__item row ng-isolate-scope" >
                                <div className="col-xs-3 height_full inset-right-small">
                                    <img className="minibasket__item-image" alt={item.Name} src={item.ImageSrc} />
                                </div>
                                <div className="col-xs-7 height_full">
                                    <span className="minibasket__item-name bold ng-binding">{item.Name}</span>
                                    <span className="minibasket__item-id ng-binding">ID: {item.ProductNumber}</span>
                                    <span className="minibasket__item-quantity ng-binding">QTY: {item.Quantity}</span>
                                </div>
                                <div className="col-xs-2 height_full relative">
                                    <span className="minibasket__item-price ng-binding">{item.LinePrice}<span className="vatText ng-binding"></span></span>
                                </div>
                            </div>
                        </div>
            });
        }

        return (
            <span>
                {showDetails &&
                    <div className="minibasket__items" >
                        {itemsHtml}
                        {/*<div data-ngrepeat="item in ctrl.basketService.items" className="ng-scope">
                            <div className="loading-overlay ng-hide" data-ngshow="ctrl.loading[$index]"></div>
                            <div className="minibasket__item row ng-isolate-scope" >
                                <div className="col-xs-3 height_full inset-right-small">
                                    <img data-ngsrc="https://le-www-live-s.legocdn.com/images/423923/live/sc/Products/45009/45009_Prod_02/b65bab3ad535f8857380986f057f8f7c/eba00a0b-c6bc-4fa9-b857-a40601160c15/original/eba00a0b-c6bc-4fa9-b857-a40601160c15.jpg?output-format=jpg&amp;fit=inside|53:53&amp;composite-to=*,*|https://le-www-live-s.legocdn.com/sc/static/bg-max.jpg?resize=53:53" className="minibasket__item-image" alt="Animal Bingo" src="https://le-www-live-s.legocdn.com/images/423923/live/sc/Products/45009/45009_Prod_02/b65bab3ad535f8857380986f057f8f7c/eba00a0b-c6bc-4fa9-b857-a40601160c15/original/eba00a0b-c6bc-4fa9-b857-a40601160c15.jpg?output-format=jpg&amp;fit=inside|53:53&amp;composite-to=*,*|https://le-www-live-s.legocdn.com/sc/static/bg-max.jpg?resize=53:53" />
                                </div>
                                <div className="col-xs-7 height_full">
                                    <span className="minibasket__item-name bold ng-binding">Animal Bingo</span>
                                    <span className="minibasket__item-id ng-binding">ID: 45009</span>
                                    <span className="minibasket__item-quantity ng-binding">QTY: 1</span>
                                </div>
                                <div className="col-xs-2 height_full relative">
                                    <span className="minibasket__item-price ng-binding">$34.95 <span className="vatText ng-binding"></span></span>
                                </div>
                            </div>
                        </div>*/}
                        <div className="minibasket__subtotal">
                            <div className="row">
                                <div className="col-xs-4 bold text-uppercase">Subtotal</div>
                                <div className="col-xs-8 bold text-uppercase text-right ng-binding">{TotalPrice}<span className="vatText"></span></div>
                            </div>
                        </div>
                        <div className="minibasket__button">
                            <a data-ng-click="ctrl.gotoCheckout();" className="button_primary">Check out</a>
                        </div>
                    </div>}



                <div className="minibasket__errorloading ng-hide ng-binding" data-ng-show="ctrl.basketService.lastErrorMessage">

                </div>

                {!showDetails && <div className="minibasket__noitems" data-ng-show="!ctrl.basketService.isFetching &amp;&amp; ctrl.basketService.items.length === 0">
                    <div className="minibasket__noitems_text" data-ng-show="!ctrl.basketService.lastErrorMessage">You have no items in your basket</div>
                    <button data-ng-click="ctrl.closeMinibasket()" className="button_inverted_dark minibasket__noitems_continue-shopping">Continue shopping</button>
                </div>}
            </span>
        );
    }
}

export class MarketingBanner extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pageData: PageStore.getPageData()
        };
    }

    componentWillMount() {
        PageStore.on("NewPageDataAvailable", () => {
            this.setState({
                pageData: PageStore.getPageData()
            })
        });
    }

    componentWillUnmount() {
        PageStore.removeListener("NewPageDataAvailable");
    }

    render () {

        var {sitewideBanner} = this.state.pageData;

        var bannerData = sitewideBanner.content.sections[0].link_items[0];

        return (
            <div className="mktg-banner" role="banner" aria-label="Marketing Banner" data-rtest="105">
                <div className="mktg-banner__container" data-rtest="106"><a className="mktg-banner__link" data-test="mktg-banner-link" href={"https://shop.lego.com/en-US/"+bannerData.url.path+"?icmp="+bannerData.icmp} data-rtest="107"><img src={bannerData.media.foreground_media} alt="" className="mktg-banner__link-image" data-test="mktg-banner-link-image" data-rtest="108" /><span data-rtest="109"><span className="mktg-banner__link-title" data-test="mktg-banner-link-title" data-rtest="110">{bannerData.title}</span><span className="mktg-banner__link-cta" data-test="mktg-banner-link-cta" data-rtest="111">{bannerData.link_text}</span></span></a></div>
            </div>
        );
    }

}