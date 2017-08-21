import React from "react";

import productFeaturesSVG from "../../../../assets/svg/product-features.svg";

export default class Features extends React.Component {
    render() {
        return (
            <div className="product-features">
                <div className="product-features__wrapper">
                    <div className="section-title">
                        <h2><img src={productFeaturesSVG} alt="" data-test="section-title-image" /><span data-test="section-title"><span className="markup">Features</span></span></h2></div>
                    <div className="product-features__img-holder"><img src="https://sh-s7-live-s.legocdn.com/is/image//LEGO/21036_alt1?$main$" alt="<p>Explore iconic architecture with this detailed LEGO® Architecture interpretation of the Arc de Triomphe, with bold lines, curves and contours, statue-adorned pillars and sculptural reliefs.</p>" className="product-features__img" data-test="product-features-img" itemProp="image" />
                        <button type="button" className="add-to-cart-button" data-test="add-to-cart-button-21036-features"><span>ADD TO BAG</span></button>
                    </div>
                    <div className="product-features__expand--hidden" data-test="expanding-menu-item">
                        <header className="product-features__expand__header" data-test="expanding-menu-item-header">See More Features</header>
                        <div className="product-features__expand__body" data-test="expanding-menu-item-body">
                            <span className="product-features__description markup" data-test="product-features-description"><p>Capture the architectural elegance of one of the world’s best-known monuments with this impressive LEGO® Architecture interpretation of the Arc de Triomphe. This detailed model faithfully reproduces Paris’ iconic masterpiece, with statue-adorned pillars, sculptural reliefs and subtle coloring that adds warmth while emphasizing the model’s bold lines, curves and contours. It also includes a golden plate to represent the Tomb of the Unknown Soldier, a LEGO interpretation of the eternal flame and a decorative “Arc de Triomphe” nameplate. This LEGO brick model has been designed to deliver a pleasantly challenging and rewarding building experience for all with an interest in architecture, travel, history and design, and makes a perfect display piece for the home or office.</p>
                                <ul>
                                    <li> LEGO® Architecture interpretation of the real-world architectural landmark, the Arc de Triomphe.</li>
                                    <li> Features statue-adorned pillars, sculptural reliefs and subtle coloring that adds warmth and emphasis to the model’s bold lines, curves and contours. Also includes a golden plate to represent the Tomb of the Unknown Soldier and a buildable LEGO® interpretation of the eternal flame.</li>
                                    <li> Includes a decorative “Arc de Triomphe” nameplate.</li>
                                    <li> The included booklet contains information about the design, architecture and history of the monument (French and English languages only. Other languages available for download at LEGO.com/architecture/booklet).</li>
                                    <li> LEGO® Architecture celebrates the world of architecture through the medium of the LEGO brick, and is developed for all with an interest in travel, architecture, history and design.</li>
                                    <li> Delivers a pleasantly challenging and rewarding building experience.</li>
                                    <li> Measures over 4” (11cm) high, 5” (14cm) wide and 3” (9cm) deep.</li>
                                </ul>
                            </span>
                            <div className="product-features__instructions-container"><a href="https://wwwsecure.us.lego.com/service/buildinginstructions/search#?search&amp;text=21036" className="product-features__building-instructions" data-test="building-instructions" target="_blank">Building Instructions</a></div>
                            <button type="button" className="add-to-cart-button" data-test="add-to-cart-button-21036-features"><span>ADD TO BAG</span></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}