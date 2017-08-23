import { EventEmitter } from "events";
import dispatcher from "../Dispatcher";

import * as Actions from "../DispatcherActions";

class product extends EventEmitter {
    constructor() {
        super();

        /**
         * @todo: remove this logic of ramndom product with actual product call.
        */
        this.productID = 1;

        this.productsURL = window.prodListPage;
        this.productDetailsURL = window.prodDetaPage;

        this.products = [];
        this.productDetails = [];

        this.basket = {};
    }

    getProducts() {
        return this.products;
    }

    updateProductList(data) {
        this.products = data;
        this.emit("ProductsListLoaded");
    }

    getProduct(id) {
        this.emit("ProductLoaded");

        /**
         * Code Demo Start Which need to update with dynamic
         */
        var prodLength = this.productDetails.length;
        id = Math.floor(Math.random() * (prodLength - 1) + 1);
        // console.log(id);
        const ret = this.productDetails[id];
        // console.log(ret);
        return ret;
    }

    requestBasket(sku) {
        // axios.post('https://education.lego.com/en-us/scom/services/Basket/BasketService.ashx/add', {
        //     SkuNumber: sku, Quantity: 1
        // })
        // .then(function (response) {
        //     console.log(response);
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });

        setTimeout(() => {
            this.basket = { "BasketLines": [{ "ItemPrice": "$34.95", "LinePrice": "$34.95", "Name": "Animal Bingo", "ImageSrc": "https://le-www-live-s.legocdn.com/images/423923/live/sc/Products/45009/45009_Prod_02/b65bab3ad535f8857380986f057f8f7c/eba00a0b-c6bc-4fa9-b857-a40601160c15/original/eba00a0b-c6bc-4fa9-b857-a40601160c15.jpg", "ProductNumber": "45009", "ShortName": "Animal Bingo", "SkuNumber": "6100408", "Quantity": 1, "Url": null }, { "ItemPrice": "$69.95", "LinePrice": "$69.95", "Name": "Build Me \"Emotions\"", "ImageSrc": "https://le-www-live-s.legocdn.com/images/423923/live/sc/Products/45018/45018_1050x1050_1_xx-xx/d5ac5288803b40bdd500948bf24c8572/482e1667-9b9d-4640-94e6-a59b0140624c/original/482e1667-9b9d-4640-94e6-a59b0140624c.jpg", "ProductNumber": "45018", "ShortName": "Build Me \"Emotions\"", "SkuNumber": "6138608", "Quantity": 1, "Url": null }], "Message": "Success", "TotalPrice": "$104.90", "TotalQuantity": 2 }
            this.emit("BasketUpdated");
            Actions.toggleMiniCart();
        }, 3000);

    }

    getBasket() {
        return this.basket;
    }

    dispatchHandler(action) {
        switch (action.type) {
            case "Load_PRODUCT_LIST":
                this.getProducts();
                break;
            case "Load_PRODUCT":
                this.getProduct(action.id);
                break;
            case "ADD_BASKET":
                this.requestBasket(action.sku);
                break;
            case "PRODUCT_LIST_UPDATED":
                this.updateProductList(action.data);
                break;
            case "PRODUCT_DETAILS_UPDATED":
                this.updateProductDetails(action.data);
                break;
        }
    }
}

const ProductsStore = new product;
dispatcher.register(ProductsStore.dispatchHandler.bind(ProductsStore));

export default ProductsStore;