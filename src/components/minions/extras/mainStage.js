import React from "react";

export default class MainStage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { activeSlide: 0 };

        this.slideAutomater();
    }

    toggler(sid) {
        this.setState(
            { activeSlide: sid }
        );
        this.slideAutomater();
    }

    slideAutomater() {

        this.slideInterval ? window.clearInterval(this.slideInterval):null;

        this.slideInterval = setInterval(() => {
            var slideCount = this.props.data.link_items.length;
            var newSlideNo = this.state.activeSlide + 1;
            
            if(newSlideNo === slideCount) {
                newSlideNo = 0;
            }

            this.setState({
                activeSlide: newSlideNo
            });

        }, 5000);
    }

    render() {

        var slideCount = this.props.data.link_items.length;

        var activeSlide = this.state.activeSlide;

        var CarouselItems = this.props.data.link_items.map((linkData, key) => <CarouselItem key={key} slideKey={key} activeSlide={activeSlide} data={linkData} />);
        var CarouselControls = this.props.data.link_items.map((linkData, key) => <CarouselControl toggler={this.toggler.bind(this)} activeSlide={activeSlide} key={key} slideKey={key} />);

        return (
            <section className="mainstage">
                <div className="carousel--fade" data-test="arena-carousel">
                    {CarouselItems}
                    <ol className="carousel__control-container" data-test="carousel-control-container">
                        {CarouselControls}
                    </ol>
                </div>
            </section>
        );
    }
}

class CarouselItem extends React.Component {

    render() {
        var { slideKey, activeSlide } = this.props;
        var slideData = this.props.data;

        var carouselItemClass = "carousel__item";
        if (slideKey === activeSlide)
            carouselItemClass = "carousel__item--active";

        var backgroungcolor = {
            background: slideData.background_color
        }

        var TitleColor = {
            color: slideData.contrast_style === "USE_DARK" ? "#000" : "#fff"
        }

        return (
            <div className={carouselItemClass} data-test={"carousel-item-" + slideKey}>
                <div className="arena__item" data-test="arena-item" style={backgroungcolor}>
                    <a className="arena__link" data-test="arena-link" href={"https://shop.lego.com/en-US/" + slideData.url.path + "?icmp=" + slideData.icmp}>
                        <div>
                            <picture className="arena__background-images" data-test="arena-background-images">
                                <source srcSet={slideData.media.background_media.large}
                                    media="(min-width:50.063rem)" />
                                <source srcSet={slideData.media.background_media.medium}
                                    media="(min-width:31.250rem)" />
                                <source srcSet={slideData.media.background_media.small} /><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="" /></picture>
                            <div className="arena__content-container" data-test="arena-content-container">
                                <div className="arena__main-content" data-test="arena-main-content">
                                    {slideData.media.logo !== null && <img src={slideData.media.logo} alt="" className="arena__logo" data-test="arena-primary-logo" />}
                                    <h2 className="arena__title" data-test="arena-title" style={TitleColor}>
                                        <span className="markup">
                                            {slideData.title}
                                        </span>
                                    </h2>
                                    {slideData.text_html !== null &&
                                        <span className="arena__marketing-text markup" data-test="arena-marketing-text" style={TitleColor}>
                                            {slideData.text_html}
                                        </span>
                                    }
                                    <div className="arena__call-to-action-container" data-test="arena-call-to-action-container"><button type="button" className="arena__call-to-action-button" data-test="arena-call-to-action"><span>{slideData.link_text}</span></button></div>
                                </div>
                                <picture className="arena__foreground-image" data-test="arena-foreground-image">
                                    <source srcSet={slideData.media.foreground_media + "?$MainStageForeground$"}
                                        media="(min-width:31.250rem)" /><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="" /></picture>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

class CarouselControl extends React.Component {
    render() {
        var { slideKey, activeSlide } = this.props;

        var classname = "carousel__controls";
        if (slideKey === activeSlide) {
            classname = "carousel__controls--active";
        }

        var clickHandler = this.props.toggler;
        return (
            <li className={classname} onClick={clickHandler.bind(this, slideKey)} data-test={"controls-" + slideKey}><span>{slideKey}</span></li>
        );
    }
}