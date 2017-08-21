import React from "react";

export default class ShopGuarantee extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 'expandClass': "closed" };
    }

    expandToggler() {
        this.setState({ 'expandClass': this.state.expandClass === "closed" ? "open" : "closed" });
    }

    render() {

        var title = this.props.data.title;
        var expandClass = this.state.expandClass;

        var linksHtml = this.props.data.link_items.map((link, key) => (
            <li key={key}>
                <a href={"https://shop.lego.com/en-US/"+link.url.path}>
                    <div className="icon"><img src={link.media.foreground_media+"?$ShopGuarantee$"} alt="" /></div>
                    <h3>{link.link_text}</h3>
                </a>
            </li>
        ));

        return (
            <section className="shop-guarantee">
                <div className={"expand--" + expandClass}><button type="button" onClick={this.expandToggler.bind(this)} className="expand__toggle-btn" data-test="expand-toggle-button"><span><h2><span>{title}</span></h2></span></button>
                    <div
                        className="expand__content-wrapper">
                        <div className="expand__content" data-test="expand-content">
                            <div>
                                <div>
                                    <ul>
                                        {linksHtml}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}