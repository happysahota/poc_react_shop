import React from "react";
import {Link} from "react-router-dom";

import PageStore from "../../../dataStore/PageStore";

export default class SideBar extends React.Component {

    constructor() {
        super();
        this.state = {PageData: PageStore.getPageData()};
    }


    render () {
        
        let sidebarContent = this.state.PageData.sideBar;
        let sidebarHtml = sidebarContent.links.map((sidebarlink, id)=>{
            return <div key={id} class="listing-lp__filter-list">
                        <label class="">
                            <span class="ng-binding"><Link to={sidebarlink.link}>{sidebarlink.text}</Link></span>
                        </label>
                    </div>
        });
        return (
            <aside class="listing-lp__aside">
                <div class="ng-scope">
                    <div class="listing-lp__filter">
                        <div class="accordion2 accordion__expanded" >
                            <div class="accordion2__header" >
                                <h2 class="h5 listing-lp__filter-headline ng-binding">{sidebarContent.title}</h2>
                            </div>
                            <div class="accordion2__body">
                                <content class="ng-scope">
                                    {sidebarHtml}
                                </content>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        );
    }
}