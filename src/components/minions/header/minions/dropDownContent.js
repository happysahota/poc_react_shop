import React from "react";
import { Redirect, Link } from "react-router-dom";

import * as Actions from "../../../../DispatcherActions";

export default class DropDownContent extends React.Component {

    /***
     * 
     * Pass second parameter boolean to make link active or inactive
     * 
     * this.linkClickHandler.bind(this, true); //Link will work
     * this.linkClickHandler.bind(this, false); //Link will not work
     * 
     */
    linkClickHandler(e) {
        Actions.DropMenuClicked();

    }

    render() {

        var autoHeight = {
            height: 'auto'
        };

        var posInit = {
            position: 'initial'
        }

        var menuData = this.props.data;

        var subMenuLis = menuData[0].items.map((lis, key) => {
            return (
                <li key={key}>
                    <Link className="sets__link-item" onClick={this.linkClickHandler.bind(this)} to={"/en-US/"+lis.link.path}>{lis.label}</Link>
                </li>
            );
        });

        return (
            <div className="dropdown__content">
                <div className="ruler"></div>
                <div className="dropdown__content-wrapper" style={autoHeight}>
                    <div className="sets" style={posInit}>
                        <div className="sets__tab-nav">
                            <ul>
                                <li><a href="#themes" className="sets__link-tab--active" data-test="sets-link-tab-themes">{menuData[0].label}</a></li>
                            </ul>
                        </div>
                        <div className="sets__content">
                            <ul>
                                {subMenuLis}
                            </ul>
                        </div>
                        <div className="sets__footer"><a className="sets__link-home" data-test="sets-link-home" href="/en-US/Sets-Home">SETS Home</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}