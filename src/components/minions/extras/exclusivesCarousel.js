import React from "react";

// ------Resources------Start------------
import exclusives from "../../../assets/svg/exclusives.svg";
import minecraftLogo from "../../../assets/minecraft--201606--gl--logo";
import starWarsUcs from "../../../assets/star-wars-ucs--201606--gl--logo";
import spacer from "../../../assets/spacer";
// ------Resources------End-------------

export default class ExclusivesCarousel extends React.Component {
    render() {

        var carouselContainerStyle = {
            width: '300%',
            transform: 'translateX(0%)'
        };

        var width33 = {
            width: "33.3333%"
        };

        var exclusiveData = this.props.data;

        var carouselItemHtml = exclusiveData.link_items.map((itemData, key) => {

            var arenaItemStyle = {
                background: itemData.background_color
            }

            var colorRgb = {
                color: itemData.contrast_style === 'USE_LIGHT' ? "#fff" : "#000"
            }


            return (<div key={key} className="carousel__item--active" data-test={"carousel-item-" + key} style={width33}>
                <div className="arena__item" data-test="arena-item" style={arenaItemStyle}>
                    <a className="arena__link" data-test="arena-link" href={"https://shop.lego.com/en-US/" + itemData.url.path + "?icmp=" + itemData.icmp}>
                        <div>
                            <img src={itemData.media.background_media.large + "?$MainStageBackgroundLarge$"} alt={itemData.title} />
                            <div
                                className="arena__content-container" data-test="arena-content-container">
                                <div className="arena__main-content" data-test="arena-main-content"><img src={itemData.media.logo + "?$MainStageLogo$"} alt={itemData.title} className="arena__logo" data-test="arena-primary-logo" />
                                    <h2 className="arena__title" data-test="arena-title" style={colorRgb}><span className="markup" dangerouslySetInnerHTML={{ __html: itemData.title }}></span></h2><span className="arena__marketing-text markup" data-test="arena-marketing-text"
                                        style={colorRgb} dangerouslySetInnerHTML={{ __html: itemData.text_html }}></span>

                                    <div className="arena__call-to-action-container"
                                        data-test="arena-call-to-action-container"><button type="button" className="arena__call-to-action-button" data-test="arena-call-to-action"><span>{itemData.link_text}</span></button></div>
                                </div>
                                {itemData.media.foreground_media !== null && <img src={itemData.media.foreground_media + "?$ExclusivesForeground$"} alt={itemData.title} className="arena__foreground-image" data-test="arena-exclusives-foreground-image" />}</div>
                        </div>
                    </a>
                </div>
            </div>
            )
        });

        // var 
        return (
            <section className="exclusives-carousel" data-test="exclusives-carousel">
                <div className="section-title">
                    <h2><img src={exclusives} alt="" data-test="section-title-image" /><span data-test="section-title"><span className="markup">{exclusiveData.title}</span></span>
                    </h2>
                </div>
                <div className="carousel--slide" data-test="arena-carousel">
                    <div className="carousel__container" data-test="carousel-slide-container" style={carouselContainerStyle}>
                        {carouselItemHtml}
                        {/*<div className="carousel__item--active" data-test="carousel-item-0" style={width33}>
                            <div className="arena__item" data-test="arena-item" style={arenaItem0Style}>
                                <a className="arena__link" data-test="arena-link" href="https://shop.lego.com/en-US/exclusives?icmp=SHM_NA_21137">
                                    <div>
                                        <img src="https://sh-s7-live-s.legocdn.com/is/image/LEGOMKTG/21137-mountain-cave--201706--em--exclusive-background--large?$MainStageBackgroundLarge$" alt="Experience the Mountain Cave!" />
                                        <div
                                            className="arena__content-container" data-test="arena-content-container">
                                            <div className="arena__main-content" data-test="arena-main-content"><img src={minecraftLogo} alt="Experience the Mountain Cave!" className="arena__logo" data-test="arena-primary-logo" />
                                                <h2
                                                    className="arena__title" data-test="arena-title" style={colorRgb255}><span className="markup">Experience the Mountain Cave!</span></h2><span className="arena__marketing-text markup" data-test="arena-marketing-text"
                                                        style={colorRgb0}>Available on shop.LEGO.com for a limited time!</span>
                                                <div className="arena__call-to-action-container"
                                                    data-test="arena-call-to-action-container"><button type="button" className="arena__call-to-action-button" data-test="arena-call-to-action"><span>SHOP NOW</span></button></div>
                                            </div><img src={spacer} alt="Experience the Mountain Cave!" className="arena__foreground-image" data-test="arena-exclusives-foreground-image" /></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="carousel__item" data-test="carousel-item-1" style={width33}>
                            <div className="arena__item" data-test="arena-item" style={arenaItem1Style}>
                                <a className="arena__link" data-test="arena-link" href="https://shop.lego.com/en-US/exclusives?icmp=SHTO_NA_10257">
                                    <div>
                                        <img src="https://sh-s7-live-s.legocdn.com/is/image/LEGOMKTG/10257%2Dcarousel%2D%2D201706%2D%2Dgl%2D%2Dexclusive%2Dbackground%2D%2Dlarge?$MainStageBackgroundLarge$" alt="Experience the majestic Carousel!" />
                                        <div
                                            className="arena__content-container" data-test="arena-content-container">
                                            <div className="arena__main-content" data-test="arena-main-content"><img src="./assets/creator--201606--gl--logo" alt="Experience the majestic Carousel!" className="arena__logo" data-test="arena-primary-logo" />
                                                <h2
                                                    className="arena__title" data-test="arena-title" style={colorRgb255}><span className="markup">Experience the majestic Carousel!</span></h2><span className="arena__marketing-text markup" data-test="arena-marketing-text"
                                                        style={colorRgb0}>Available on shop.LEGO.com for a limited time!</span>
                                                <div className="arena__call-to-action-container"
                                                    data-test="arena-call-to-action-container"><button type="button" className="arena__call-to-action-button" data-test="arena-call-to-action"><span>SHOP NOW</span></button></div>
                                            </div><img src={spacer} alt="Experience the majestic Carousel!" className="arena__foreground-image" data-test="arena-exclusives-foreground-image" /></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="carousel__item" data-test="carousel-item-2" style={width33}>
                            <div className="arena__item" data-test="arena-item" style={arenaItem2Style}>
                                <a className="arena__link" data-test="arena-link" href="https://shop.lego.com/en-US/exclusives?icmp=SHTO_NA_75144">
                                    <div>
                                        <img src="https://sh-s7-live-s.legocdn.com/is/image/LEGOMKTG/mt4%2D2017%2Dsnowspeeder%2D%2D201705%2D%2Dgl%2D%2Dexclusive%2Dbackground%2D%2Dlarge?$MainStageBackgroundLarge$" alt="Snowspeeder™!" />
                                        <div
                                            className="arena__content-container" data-test="arena-content-container">
                                            <div className="arena__main-content" data-test="arena-main-content"><img src={starWarsUcs} alt="Snowspeeder™!" className="arena__logo" data-test="arena-primary-logo" />
                                                <h2
                                                    className="arena__title" data-test="arena-title" style={colorRgb255}><span className="markup">Snowspeeder™!</span></h2><span className="arena__marketing-text markup" data-test="arena-marketing-text"
                                                        style={colorRgb255}>Available on shop.LEGO.com for a limited time!</span>
                                                <div className="arena__call-to-action-container"
                                                    data-test="arena-call-to-action-container"><button type="button" className="arena__call-to-action-button" data-test="arena-call-to-action"><span>SHOP NOW</span></button></div>
                                            </div><img src={spacer} alt="Snowspeeder™!" className="arena__foreground-image" data-test="arena-exclusives-foreground-image" /></div>
                                    </div>
                                </a>
                            </div>
                        </div>*/}
                    </div>
                    <ol className="carousel__control-container" data-test="carousel-control-container">
                        <li className="carousel__controls--active" data-test="controls-0--active"><span>0</span></li>
                        <li className="carousel__controls" data-test="controls-1"><span>1</span></li>
                        <li className="carousel__controls" data-test="controls-2"><span>2</span></li>
                    </ol>
                    <button type="button" className="carousel__next-button" data-test="carousel-next-button"><span>NEXT</span></button>
                    <button
                        type="button" className="carousel__previous-button" data-test="carousel-previous-button"><span>common_button_previous</span></button>
                </div>
            </section>
        );
    }
}