import React from "react";

import {Link} from "react-router-dom";

import GeneralStore from "../../../dataStore/GeneralStore";
import * as Actions from "../../../DispatcherActions";

// ------Resources------Start------------
import playOnLego from "../../../assets/svg/play-on-lego.svg";
import myBag from "../../../assets/svg/my-bag.svg";
import wishList from "../../../assets/svg/wishlist.svg";
// ------Resources------End------------


export default class UtilityMenu extends React.Component {

    constructor() {
        super();
        this.state = {
            wishlistCount: GeneralStore.getWishlist(),
            TotalQuantity: 0
        };
    }

    componentWillMount() {
        GeneralStore.on('emitBagUpdated', this.updateBag.bind(this));
        GeneralStore.on('emitWishlistUpdated', this.updateWishlist.bind(this));
    }

    componentWillUnmount() {
        GeneralStore.removeListener("emitBagUpdated", this.updateBag.bind(this));
        GeneralStore.on('emitWishlistUpdated', this.updateWishlist.bind(this));
    }

    updateBag() {
        var newCount = this.state.TotalQuantity + 1;
        this.setState({ TotalQuantity: newCount });
    }

    updateWishlist() {
        console.log(this.refs.hadd.clientHeight)
        this.setState({ wishlistCount: GeneralStore.getWishlist() }); 
    }

    toggleMiniCart() {
        Actions.toggleMiniCart();
    }

    bagClickHandler(e) {
        e.preventDefault();
    }

    render() {

        let TotalCartQuantity = this.state.TotalQuantity;
        let wishlistCount = this.state.wishlistCount;

        return (

            <div data-test="utility-bar" className="util-bar" ref="hadd">
                <nav className="util-bar__nav">
                    <div className="util-bar__wrapper--left">
                        <Link to="http://www.lego.com/" className="util-bar__link-play" data-test="util-bar-link-play" target="_blank">
                            <span><img src={playOnLego} alt="" className="icon" />PLAY ON LEGO.COM</span>
                        </Link>
                        {/*<div id="util-bar-dropdown-region" className="dropdown" data-test="util-bar-dropdown-region-en-US"><a rel="nofollow" className="dropdown__trigger" data-test="util-bar-trigger-region" href="https://shop.lego.com/en-US/#region"><span><img src="./assets/svg/regions/us.svg" alt="" className="icon icon-region" data-test="dropdown-icon" />CHANGE REGION</span></a></div>*/}
                    </div>
                    <div className="util-bar__wrapper--right">
                        <Link rel="nofollow" className="util-bar__link-wishlist" data-test="util-bar-link-wishlist" to="/en-US/account/wishlist" onClick={this.bagClickHandler.bind(this)}>
                            <span>
                                <img src={wishList} alt="" className="icon" />
                                <span>WISH LIST<span data-test="util-bar-wishlist-badge">
                                    <span data-test="util-bar-wishlist-count-0"> ({wishlistCount})</span>
                                </span></span>
                            </span>
                        </Link>
                        {/*<div id="util-bar-dropdown-account" className="dropdown" data-test="util-bar-dropdown-account"><a rel="nofollow" className="dropdown__trigger" data-test="util-bar-trigger-account" href="https://shop.lego.com/en-US/#account" data-rtest="26"><span data-rtest="27"><img src="./assets/svg/account.svg" alt="" className="icon icon-account" data-test="dropdown-icon" data-rtest="28" />ACCOUNT</span></a></div>*/}
                        <div id="util-bar-dropdown-cart" className="dropdown" data-test="util-bar-dropdown-cart" data-rtest="30">
                            <Link rel="nofollow" className="dropdown__trigger" data-test="util-bar-trigger-cart" to="/" onClick={this.bagClickHandler.bind(this)}>
                                <span data-rtest="32">
                                    <img src={myBag} alt="" className="icon icon-cart" data-test="dropdown-icon" data-rtest="33" />
                                    <span data-rtest="34">MY BAG
                                        <span data-test="util-bar-cart-badge" data-rtest="36">
                                            <span data-test="util-bar-cart-count-0" data-rtest="37">
                                                &nbsp; ({TotalCartQuantity})
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}