import React from "react";

export default class Tout extends React.Component {
    render() {

        var toutData = this.props.data;

        var toutMediaBgStyle = {
            backgroundImage: "url('"+toutData.media.background_media.large+"?$Tout2UpTallBackground$')"
        };

        var toutMediaFgStyle = {
            backgroundImage: "url('"+toutData.media.foreground_media+"?$Tout2UpTallForeground$')"
        };

        var text_html = toutData.text_html;

        return (
            <div className="tout">
                <div className="tout__wrapper--dark" data-test="tout-wrapper"><button type="button" className="tout__toggle-btn" data-test="tout-toggle-button"><span><span>click to open</span></span></button>
                    {toutData.media.background_media.large!==null && <div className="tout__media-bg" data-test="tout-media-bg" style={toutMediaBgStyle}></div>}
                    <h2 className="tout__title-preview" data-test="tout-title-preview"><span className="markup">{toutData.title}</span></h2>
                    <a className="tout__content" data-test="tout-link" href={"https://shop.lego.com/en-US/"+toutData.url.path+"?icmp="+toutData.icmp}>
                        <div className="tout__media-fg" data-test="tout-media-fg" style={toutMediaFgStyle}></div>
                        <div className="tout__details--small-big" data-test="tout-details">
                            <h2 data-test="tout-title"><span className="markup" dangerouslySetInnerHTML={{__html:toutData.title}}></span></h2><span className="tout__description markup" data-test="tout-text" dangerouslySetInnerHTML={{__html:text_html}}></span></div>
                        <div
                            className="tout__cta">
                            <div className="tout__cta-button" data-test="tout-cta-button">{toutData.link_text}</div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}