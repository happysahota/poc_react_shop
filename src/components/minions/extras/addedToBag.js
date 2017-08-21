import React from "react";
import myBagSVG from "../../../assets/svg/my-bag.svg";

export default class AddedToBag extends React.Component {
    render() {
        return (
            <div className="add-to-cart-popup">
                <div className="add-to-cart-popup__container">
                    <img src={myBagSVG} alt="" className="add-to-cart-popup__icon" data-test="add-to-cart-popup-icon" />
                    <p className="add-to-cart-popup__text" data-test="add-to-cart-popup-text">ADDED TO BAG</p>
                </div>
            </div>
        );
    }
}