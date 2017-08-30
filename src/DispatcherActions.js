import dispatcher from "./Dispatcher";

import axios from "axios";



var productsURL = window.prodListPage;
var productDetailsURL = window.prodDetaPage;
var pageDataUrl = window.pageData;

export function getProductsList() {
    dispatcher.dispatch({
        type: 'Load_PRODUCT_LIST'
    });
}


export function getProduct(id) {
    dispatcher.dispatch({
        type: 'Load_PRODUCT',
        id
    });
}

export function overlayClicked() {
    console.info("Overlay Clicked");
    dispatcher.dispatch({
        type: 'OVERLAY_CLICKED'
    });
}

export function showOverlay() {
    dispatcher.dispatch({
        type: 'SHOW_OVERLAY'
    });
}

export function hideOverlay() {
    dispatcher.dispatch({
        type: 'HIDE_OVERLAY'
    });
}

export function toggleOverlay() {
    dispatcher.dispatch({
        type: 'TOGGLE_OVERLAY'
    });
}

export function fetchPageData(pageType) {

    axios.get(pageDataUrl)
    .then(function (response) {
        dispatcher.dispatch({
            type: "PAGE_DATA",
            data: response.data
        });
    })
    .catch(function (error) {
        console.log(error);
    });

    // dispatcher.dispatch({
    //     type: 'PAGE_DATA',
    //     pagetype: pageType
    // });
}

export function addToBasket(sku) {
    showOverlay();
    dispatcher.dispatch({
        type: 'ADD_BASKET',
        sku
    });
}

export function toggleMiniCart() {
    toggleOverlay();
    dispatcher.dispatch({
        type: 'TOGGLE_CART'
    });
}

export function DropMenuClicked() {

    dispatcher.dispatch({
        type: "DROP_CLICKED"
    });

    axios.get(productsURL)
        .then(function (response) {
            dispatcher.dispatch({
                type: "PRODUCT_LIST_UPDATED",
                data: response.data
            });
        })
        .catch(function (error) {
            console.log(error);
        });

}

export function updateBag() {
    dispatcher.dispatch({
        type: "BAG_UPDATE"
    });
}

export function updateWishlist(qnt) {
    dispatcher.dispatch({
        type: "UPDATE_WISHLIST",
        data: qnt
    });
}

export function loadProdDetails(id) {

    var idArr = id.split("-");
    var id = idArr[(idArr.length-1)]
    var url = productDetailsURL+id;
    // console.info(`------------> ${url}`);
    axios.get(url)
        .then(function (response) {
            dispatcher.dispatch({
                type: "PRODUCT_DETAILS_UPDATED",
                data: response.data
            });
        })
        .catch(function (error) {
            console.log(error);
        });
}

window.initFetchPageData = fetchPageData;