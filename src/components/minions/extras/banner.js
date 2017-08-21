import React from "react";

export default class Banner extends React.Component {
    render() {
        var data = this.props.data.see_more_link;
        var {background_media} = data.media;
        return (
            <div className="banner--no-foreground-img">
                <div className="banner__container">
                    <picture className="banner__background-image" data-test="banner-background-image">
                        <source srcSet={background_media.large+"?$BannerBackgroundLarge$"} media="(min-width:50.063rem)" />
                        <source srcSet={background_media.medium+"?$BannerBackgroundMedium$"} media="(min-width:31.250rem)" />
                        <source srcSet={background_media.small+"?$BannerBackgroundSmall$"} />
                        <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt={data.title} />
                    </picture>
                    <div className="banner-content" data-test="banner-content">
                        <header className="banner__header" data-test="banner-header">
                            <img src={data.media.logo+"?$BannerLogo$"} alt={data.title} className="banner__logo" data-test="banner-logo" />
                        </header>
                        <div className="banner__text markup" data-test="banner-markup" dangerouslySetInnerHTML={{__html:data.text_html}}></div>
                    </div>
                </div>
            </div>
        );
    }
}