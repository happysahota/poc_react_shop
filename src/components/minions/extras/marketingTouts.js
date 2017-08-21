import React from "react";

import Tout from "./_tout";

export default class MarketingTouts extends React.Component {
    render() {
        var toutHtml = this.props.data.link_items.map((link,key)=><Tout key={key} data={link}/>);
        return (
            <section className="marketing-touts--2up-tall">
                <div className="wrapper-flex">
                    {toutHtml}
                </div>
            </section>
        );
    }
}