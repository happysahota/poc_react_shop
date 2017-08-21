import React from "react";

export class AsideFilters extends React.Component {
    render() {
        return (
            <div className="facet-navigation" data-test="facet-navigation">
                <div className="facet-navigation__list-container" data-test="facet-navigation-list-container">
                    <div className="facet-navigation__list-type" data-test="facet-navigation-list-type"><button type="button" className="facet-navigation__type-button" data-test="facet-navigation-type-button"><span>PRODUCT TYPE</span></button>
                        <ul className="facet-navigation__list-content"></ul>
                    </div>
                    <div className="facet-navigation__list-type" data-test="facet-navigation-list-type"><button type="button" className="facet-navigation__type-button" data-test="facet-navigation-type-button"><span>FEATURED</span></button>
                        <ul className="facet-navigation__list-content"></ul>
                    </div>
                    <div className="facet-navigation__list-type" data-test="facet-navigation-list-type"><button type="button" className="facet-navigation__type-button" data-test="facet-navigation-type-button"><span>PRICE</span></button>
                        <ul className="facet-navigation__list-content"></ul>
                    </div>
                    <div className="facet-navigation__list-type" data-test="facet-navigation-list-type"><button type="button" className="facet-navigation__type-button" data-test="facet-navigation-type-button"><span>AGE</span></button>
                        <ul className="facet-navigation__list-content"></ul>
                    </div>
                    <div className="facet-navigation__list-type" data-test="facet-navigation-list-type"><button type="button" className="facet-navigation__type-button" data-test="facet-navigation-type-button"><span>THEME</span></button>
                        <ul className="facet-navigation__list-content"></ul>
                    </div>
                    <div className="facet-navigation__list-type" data-test="facet-navigation-list-type"><button type="button" className="facet-navigation__type-button" data-test="facet-navigation-type-button"><span>INTEREST</span></button>
                        <ul className="facet-navigation__list-content"></ul>
                    </div>
                    <div className="facet-navigation__list-type" data-test="facet-navigation-list-type"><button type="button" className="facet-navigation__type-button" data-test="facet-navigation-type-button"><span>PIECE COUNT</span></button>
                        <ul className="facet-navigation__list-content"></ul>
                    </div>
                    <div className="facet-navigation__list-type" data-test="facet-navigation-list-type"><button type="button" className="facet-navigation__type-button" data-test="facet-navigation-type-button"><span>AVAILABILITY</span></button>
                        <ul className="facet-navigation__list-content"></ul>
                    </div>
                    <div className="facet-navigation__list-type" data-test="facet-navigation-list-type"><button type="button" className="facet-navigation__type-button" data-test="facet-navigation-type-button"><span>RATING</span></button>
                        <ul className="facet-navigation__list-content"></ul>
                    </div>
                </div>
            </div>
        );
    }
}