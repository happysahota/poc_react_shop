import React from "react";

import GeneralStore from "../../../../dataStore/GeneralStore";
import * as Actions from "../../../../DispatcherActions";
import DropDownContent from "./dropDownContent";

export default class MainBarNavItemsLi extends React.Component {

    constructor() {
        super();

        this.state = {
            showSubMenu: false
        }
    }

    componentWillMount() {
        GeneralStore.on("dropMenuClicked", () => {
            this.menuClickHandler();
        });
    }

    componentWillUnmount() {
        GeneralStore.removeListener("dropMenuClicked");
    }


    menuClickHandler(e) {
        
        if(e){
            e.preventDefault();
            Actions.DropMenuClicked();
            var inverse = !this.state.showSubMenu;
            this.setState({
                showSubMenu: inverse
            });
        }else{
            this.setState({
                showSubMenu: false
            });
        }
    }

    

    render() {

        var {showSubMenu} = this.state;
        var menuData = this.props.data;

        var tabsData = menuData.data.tabs;

        return (
            <li>
                <div id={"main-bar-dropdown-"+menuData.label} className="dropdown" data-test={"main-bar-dropdown-"+menuData.label} >
                    <a className="dropdown__trigger" onClick={this.menuClickHandler.bind(this)} data-test={"main-bar-trigger-"+menuData.label} href={"https://shop.lego.com/en-US/"+menuData.data.home.link.path}>
                        <span>{menuData.label}</span>
                    </a>
                    {showSubMenu && <DropDownContent data={tabsData} />}
                </div>
            </li>
        );
    }
}