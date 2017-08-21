import React from "react";
import { Link } from "react-router-dom";

import * as Actions from "../../../DispatcherActions";

export default class ProductListItemLink extends React.Component {

    linkClickHandler() {
        Actions.showOverlay();
        setTimeout(()=>Actions.hideOverlay(), 1000);
        Actions.fetchPageData("productDetails");
    }

    render() {

        const prodId = this.props.data.id;

        return (
            <Link to={"/product/"+prodId} onClick={this.linkClickHandler.bind(this)} class="product-list-item product-list-item__no-feature col-xs-10 col-offset-xs-1 col-sm-4 col-offset-sm-0">

                <img class="product-list-item__thumbnail" src={this.props.data.images.heroListing} />

                <div class="product-list-item__text">
                    <div class="product-list-item__name">{this.props.data.name}</div>
                    <div class="product-list-item__price">{this.props.data.price}</div>

                </div>

                <div class="product-list-item__hover">
                    <div class="product-list-item__hover-content">
                        <div class="product-list-item__name">{this.props.data.name}</div>
                        <div class="product-list-item__price">{this.props.data.price}</div>


                        <div class="product-list-item__usp-holder">
                            <div class="product-list-item__hover_check"><span class="icon-checkmark"></span></div>
                            <p class="product-list-item__hover_usp">
                                <b>Bricks</b>
                            </p>
                        </div>
                        <div class="product-list-item__hover_icons">
                            <div class="info-icon product-list-item__hover_icon">
                                <span>{this.props.data.ageGroup}</span>
                            </div>

                            <div class="info-icon lego product-list-item__hover_icon">
                                <span class="icon"></span>
                                <span>{this.props.data.bricks}</span>
                            </div>
                        </div>
                        <div class="button_primary button_small">Shop now</div>
                    </div>

                </div>
            </Link>
        );
    }
}