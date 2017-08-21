import React from "react";

import * as Actions from "../../../DispatcherActions";
import GeneralStore from "../../../dataStore/GeneralStore";

import MenuHeader from "./menu-header";
import UtilityMenu from "./utility-menu";
import {MarketingBanner} from "../extras/Extras";

import AddedToBag from "../extras/addedToBag";

export default class Headermain extends React.Component {

    constructor(props) {
        super(props);
        this.state = {'showBagNotification': false};
    }
    homeClickHandler() {
        Actions.showOverlay();
        setTimeout(() => Actions.hideOverlay(), 1000);
        Actions.fetchPageData("productList");
    }

	componentWillMount() {
		GeneralStore.on("emitBagUpdated", this.bagNotificationHandler.bind(this));
	}

	componentWillUnmount() {
		GeneralStore.removeListener("emitBagUpdated", this.bagNotificationHandler.bind(this));
	}

    bagNotificationHandler() {
        this.setState({'showBagNotification':true});
        setTimeout(()=>this.setState({'showBagNotification':false}), 3000);
    }

    render() {
        var showBagNotification = this.state.showBagNotification;
        return (
            <header data-test="header" className="header">
                <div className="header__fixed" id="headerFixed">
                    
                    <UtilityMenu/>
                    <MenuHeader/>
                    {showBagNotification && <AddedToBag />}

                </div>
                <MarketingBanner/>
            </header>
        );
    }
}