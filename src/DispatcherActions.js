import dispatcher from "./Dispatcher";

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
    dispatcher.dispatch({
        type:'PAGE_DATA',
        pagetype: pageType
    });
}

export function addToBasket(sku) {
    showOverlay();
    dispatcher.dispatch({
        type: 'ADD_BASKET',
        sku
    });
}

export function toggleMiniCart(){
    toggleOverlay();
    dispatcher.dispatch({
        type: 'TOGGLE_CART'
    });
}

export function DropMenuClicked() {
    dispatcher.dispatch({
        type: "DROP_CLICKED"
    });
}

export function updateBag(){
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

window.initFetchPageData = fetchPageData;