import React from "react";

import {AsideFilters} from "./filters";

export default class AsideSection extends React.Component {
    render() {
        return (
            <aside className="product-listing__facet-navigation" data-test="product-listing-aside">
                <AsideFilters/>
            </aside>
        );
    }
}