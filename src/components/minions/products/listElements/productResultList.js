import React from "react";

import AsideSection from "./asideSection";
import ProductLeaf from "./productLeaf";

export default class ProductResultList extends React.Component {
    render() {
        
        var data = this.props.data;
        var listData = data.results;

        var listDataHtml = listData.map((pData, key)=><ProductLeaf key={key} data={pData} />);

        var Total = listData.length;

        return (

            <div className="product-listing__results">
                <div className="search-filter-bar" data-test="search-filter-bar">
                    <ul className="search-filter-bar__filters">
                        <li><button type="button" className="search-filter-bar__filter-button" data-test="filter-button"><span>FILTER</span></button></li>
                        <li>
                            <div className="sortby" data-test="sortby-container">
                                <div className="sortby__label" data-test="sortby-label">Sort by</div><label className="sortby__box"><div className="sortby__box__select js"><select><option value="0">Newest</option><option value="1">Price: Low to High</option><option value="2">Price: High to Low</option><option value="3">Rating</option></select><span className="sortby__box__selected">Newest</span></div></label></div>
                        </li>
                    </ul>
                    <div className="search-filter-bar__result-count" data-test="result-count">Showing {Total} of {Total} results</div>
                </div>
                <AsideSection />
                <div className="search-shop" data-test="search-shop">
                    <div className="product-leaf-group--max-columns-3" data-test="product-leaf-group">
                        {listDataHtml}
                    </div>
                </div>
                <div className="pagination" data-test="pagination"><a rel="nofollow" className="pagination__previous--disabled" data-test="pagination-previous" href="https://shop.lego.com/en-US/"><span>PREVIOUS</span></a>
                    <em data-test="pagination-index">1&nbsp;</em><span className="pagination__of">OF</span>
                    &nbsp;113<a rel="nofollow" className="pagination__next" data-test="pagination-next" href="https://shop.lego.com/en-US/New-Sets?S1=&amp;callback=json&amp;cc=us&amp;count=18&amp;do=json-db&amp;i=1&amp;jsonp=jsonCallback&amp;lang=en&amp;page=2&amp;pt=shop&amp;q=*&amp;rank=rankUS&amp;sort=sort_flags&amp;sp_q_exact_9=us"><span>NEXT</span></a></div>
            </div>
        );
    }
}