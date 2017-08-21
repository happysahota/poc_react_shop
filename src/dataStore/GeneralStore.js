import {EventEmitter} from "events";
import dispatcher from "../Dispatcher";

class generalTransections extends EventEmitter {
    
    isMinicartVisible = false;
    isOverlayVisible = false;
    wishlistCount = 0;

    overlayClicked() {
        console.log("Inside Store");
        this.emit("OverlayClicked");
        this.hideOverlay();
    }
    
    showOverlay() {
        this.emit("showOverlay");
    }
    
    hideOverlay() {
        this.emit("hideOverlay");
    }

    toggleOverlay() {
        if(this.isOverlayVisible){
            this.emit("hideOverlay");
        }else{
            this.emit("showOverlay");
        }
        this.isOverlayVisible = !this.isOverlayVisible;

    }

    toggleCart() {
        if(this.isMinicartVisible){
            this.emit("hideMiniCart");
        }else{
            this.emit("showMiniCart");
        }
        this.isMinicartVisible = !this.isMinicartVisible;
    }

    dropMenuClicked() {
        this.emit("dropMenuClicked");
    }

    bagUpdate() {
        this.emit("emitBagUpdated");
    }

    updateWishlist(data) {
        this.wishlistCount = this.wishlistCount + data;
        this.emit("emitWishlistUpdated");
    }

    getWishlist() {
        return this.wishlistCount;
    }

    dispatchHandler(action) {
        switch(action.type) {
            case "OVERLAY_CLICKED": 
                this.overlayClicked();
                break;
            case "SHOW_OVERLAY": 
                this.showOverlay();
                break;
            case "HIDE_OVERLAY": 
                this.hideOverlay();
                break;
            case "TOGGLE_CART":
                this.toggleCart();
                break
            case "TOGGLE_OVERLAY":
                this.toggleOverlay();
                break
            case "DROP_CLICKED":
                this.dropMenuClicked();
                break;
            case "BAG_UPDATE":
                this.bagUpdate();
                break;
            case "UPDATE_WISHLIST":
                this.updateWishlist(action.data);
                break;
        }
    }
}

const generalTransectionsStore = new generalTransections;
dispatcher.register(generalTransectionsStore.dispatchHandler.bind(generalTransectionsStore));

export default generalTransectionsStore;