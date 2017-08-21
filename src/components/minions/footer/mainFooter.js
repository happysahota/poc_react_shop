import React from "react";

import PageStore from "../../../dataStore/PageStore";
// import ShareSection from "./footerShareSection";

// ------Resources------Start------------
import LondonBus10258 from "../../../assets/10258-londonbus201708";
import purchaseLocation from "../../../assets/svg/purchase-location.svg";
import shopEmails from "../../../assets/svg/shop-emails.svg";
import stayConnected from "../../../assets/svg/stay-connected.svg";
import checkOrderStatus from "../../../assets/svg/check-order-status.svg";
import redBrick201606Footer from "../../../assets/red-brick--201606--gl--footer.png";
// ------Resources------End--------------

export default class Footer extends React.Component {

    constructor() {
        super();
        this.footerData = PageStore.getPageData();
    }

    render() {
        return (
            <footer className="page-footer" data-rtest="568">
                <div className="mktg-banner" role="banner" aria-label="Marketing Banner" data-rtest="569">
                    <div className="mktg-banner__container" data-rtest="570"><a className="mktg-banner__link" data-test="mktg-banner-link" href="https://shop.lego.com/en-US/London-Bus-10258?icmp=SHB_NA_London_Bus"
                        data-rtest="571"><img src={LondonBus10258} alt="" className="mktg-banner__link-image" data-test="mktg-banner-link-image" data-rtest="572" /><span data-rtest="573"><span className="mktg-banner__link-title" data-test="mktg-banner-link-title" data-rtest="574">All aboard the London Bus!</span><span className="mktg-banner__link-cta" data-test="mktg-banner-link-cta" data-rtest="575">SHOP NOW</span></span></a></div>
                </div>
                <div className="page-footer__container" data-rtest="576">
                    <form className="footer-find-store" data-test="footer-find-store" method="get" action="https://www.lego.com/stores/search-results"
                        data-rtest="577"><a href="https://www.lego.com/stores/search-results" className="page-footer__link" data-test="find-store-link" target="_blank"
                            data-rtest="578"><img src={purchaseLocation} alt="" className="page-footer__link-img" data-test="find-store-image" data-rtest="579" /><span className="page-footer__link-text markup" data-rtest="580">Find a LEGO<sup>®</sup> Store</span></a>
                        <input type="text" className="footer-find-store__search" placeholder="Find a LEGO® Store" data-test="footer-find-store-search-input" name="q" data-rtest="581" /><button type="submit" className="footer-find-store__search-button" data-test="find-store-button" data-rtest="582"><span data-rtest="583">Find a LEGO® Store</span></button>
                        <p
                            className="footer-find-store__explain" data-rtest="584"><span className="markup" data-rtest="585">Enter your zip code, city or country to find the closest <a href="http://stores.lego.com/" target="_blank">LEGO <sup>®</sup> Store</a> near you!</span></p>
                    </form>
                    <div className="page-footer__link-container" data-rtest="586">
                        <a className="page-footer__link" data-test="major-link-subscribe" href="https://shop.lego.com/en-US/subscribe" data-rtest="587">
                            <img src={shopEmails} alt="" className="page-footer__link-img" data-rtest="588" />
                            <span className="page-footer__link-text" data-rtest="589">Subscribe to LEGO® Shop Emails</span>
                        </a>
                        <button type="button" className="page-footer__link" data-test="major-link-connect" data-rtest="590">
                            <span data-rtest="591"> 
                                <img src={stayConnected} alt="" className="page-footer__link-img" data-rtest="592" />
                                <span className="page-footer__link-text" data-rtest="593">Stay Connected to LEGO® Community</span></span>
                        </button><a className="page-footer__link" data-test="major-link-order" href="https://shop.lego.com/en-US/Order-status" data-rtest="594"><img src={checkOrderStatus} alt="" className="page-footer__link-img" data-rtest="595" /><span className="page-footer__link-text" data-rtest="596">Check Order Status</span></a></div>
                    <div
                        className="page-footer__expand-container" data-rtest="597">
                        <div className="footer-expand--hidden" data-test="expanding-menu-item" data-rtest="598">
                            <header className="footer-expand__header" data-test="expanding-menu-item-header" data-rtest="599">Customer Service</header>
                            <div className="footer-expand__body" data-test="expanding-menu-item-body" data-rtest="600">
                                <ul data-rtest="601">
                                    <li className="page-footer__item-text" data-rtest="602">001-800-835-4386</li>
                                    <li data-rtest="603"><a href="http://service.lego.com/" className="page-footer__link" data-test="expand-link-1" target="_blank" data-rtest="604">Contact Us</a></li>
                                    <li
                                        data-rtest="605"><a href="https://wwwsecure.us.lego.com/service/buildinginstructions?domainredir=service.lego.com&amp;ignorereferer=true"
                                            className="page-footer__link" data-test="expand-link-2" target="_blank" data-rtest="606">Building Instructions</a></li>
                                    <li
                                        data-rtest="607"><a href="https://wwwsecure.us.lego.com/service/replacementparts?domainredir=service.lego.com&amp;ignorereferer=true"
                                            className="page-footer__link" data-test="expand-link-3" target="_blank" data-rtest="608">Missing Parts</a></li>
                                    <li
                                        data-rtest="609"><a href="https://wwwsecure.us.lego.com/en-gb/service/help-topics" className="page-footer__link" data-test="expand-link-4"
                                            target="_blank" data-rtest="610">Common Questions</a></li>
                                    <li data-rtest="611"><a className="page-footer__link" data-test="expand-link-5" href="https://shop.lego.com/en-US/Your-Satisfaction" data-rtest="612">Your Satisfaction</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-expand--hidden" data-test="expanding-menu-item" data-rtest="613">
                            <header className="footer-expand__header" data-test="expanding-menu-item-header" data-rtest="614">Shopping</header>
                            <div className="footer-expand__body" data-test="expanding-menu-item-body" data-rtest="615">
                                <ul data-rtest="616">
                                    <li data-rtest="617"><a className="page-footer__link" data-test="expand-link-0" href="https://shop.lego.com/en-US/Shipping-Returns" data-rtest="618">Shipping &amp; Handling</a></li>
                                    <li
                                        data-rtest="619"><a className="page-footer__link" data-test="expand-link-1" href="https://shop.lego.com/en-US/Payment-Methods" data-rtest="620">Payment Methods</a></li>
                                    <li
                                        data-rtest="621"><a className="page-footer__link" data-test="expand-link-2" href="https://shop.lego.com/en-US/Terms-And-Conditions" data-rtest="622">Terms &amp; Conditions</a></li>
                                    <li
                                        data-rtest="623"><a className="page-footer__link" data-test="expand-link-3" href="https://shop.lego.com/en-US/Give-Gift-Card" data-rtest="624">Gift Cards</a></li>
                                    <li
                                        data-rtest="625"><a href="https://www.lego.com/legal/legal-notice/privacy-policy-full" className="page-footer__link" data-test="expand-link-4"
                                            target="_blank" data-rtest="626">Privacy Policy</a></li>
                                    <li data-rtest="627"><a className="page-footer__link" data-test="expand-link-5" href="https://shop.lego.com/en-US/LEGO-Offers-Promotions"
                                        data-rtest="628">Offers and Promotions</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-expand--hidden" data-test="expanding-menu-item" data-rtest="629">
                            <header className="footer-expand__header" data-test="expanding-menu-item-header" data-rtest="630">Features</header>
                            <div className="footer-expand__body" data-test="expanding-menu-item-body" data-rtest="631">
                                <ul data-rtest="632">
                                    <li data-rtest="633"><a className="page-footer__link" data-test="expand-link-0" href="https://shop.lego.com/en-US/CATALOGS" data-rtest="634">Request a LEGO® Catalog</a></li>
                                    <li
                                        data-rtest="635"><a className="page-footer__link" data-test="expand-link-1" href="https://shop.lego.com/en-US/VIP" data-rtest="636">LEGO® VIP Program</a></li>
                                    <li
                                        data-rtest="637"><a href="http://www.legoland.com/" className="page-footer__link" data-test="expand-link-2" target="_blank" data-rtest="638">LEGOLAND®</a></li>
                                    <li
                                        data-rtest="639"><a href="http://www.lego.com/life?ignorereferer=true" className="page-footer__link" data-test="expand-link-3" target="_blank"
                                            data-rtest="640">LEGO® Life</a></li>
                                    <li data-rtest="641"><a href="https://www.lego.com/stores/" className="page-footer__link" data-test="expand-link-4" target="_blank" data-rtest="642">The LEGO® Store</a></li>
                                    <li
                                        data-rtest="643"><a className="page-footer__link" data-test="expand-link-5" href="https://shop.lego.com/en-US/LEGO-Education" data-rtest="644">LEGO® Education</a></li>
                                </ul>
                            </div>
                        </div>
                    </div><img src={redBrick201606Footer} alt="Red Lego brick" className="page-footer__red-brick" data-rtest="645" /></div>
                <div
                    className="footer-notes" data-rtest="646">
                    <p data-test="footer-notes-disclaimer" data-rtest="647">LEGO Systems, Inc. 555 Taylor Road, Enfield, CT 06082, USA. Must be 18 years or older to purchase online.</p>
                    <div className="footer-notes__container"
                        data-rtest="648"><a href="https://www.lego.com/legal/legal-notice/privacy-policy-full" className="footer-notes__link" data-test="policy-link"
                            target="_blank" data-rtest="649">Privacy Policy</a><a href="http://www.lego.com/legal/cookieinfo" className="footer-notes__link"
                                data-test="cookies-link" target="_blank" data-rtest="650">Cookies</a><a href="https://shop.lego.com/en-US/legal-notice"
                                    className="footer-notes__link" data-test="legal-link" target="_blank" data-rtest="651">Legal Notice</a><a href="http://aboutus.lego.com/en-us/legal-notice"
                                        className="footer-notes__link" data-test="terms-link" target="_blank" data-rtest="652">Terms of Use</a></div><span className="markup"
                                            data-test="footer-notes-trademark" data-rtest="653">LEGO, the LEGO logo, DUPLO, the DUPLO logo, BIONICLE, the BIONICLE logo, LEGENDS OF CHIMA, the LEGENDS OF CHIMA logo, DIMENSIONS, the DIMENSIONS logo, the FRIENDS logo, the Minifigure, the MINIFIGURES logo, MINDSTORMS, the MINDSTORMS EV3 logo, MIXELS, the MIXELS logo, NINJAGO, the NINJAGO logo, NEXO KNIGHTS, and the NEXO KNIGHTS logo are trademarks and/or copyrights of the LEGO Group.  ©2017 the LEGO Group.  All rights reserved. Use of this site signifies your agreement to the <a href="https://shop.lego.com/en-US/legal-notice">terms of use</a></span>
                    <span
                        className="markup" data-test="footer-notes-copyright" data-rtest="654">©2017 The LEGO Group. All rights reserved. Use of this site signifies your agreement to the terms of use.</span>
                </div>
            </footer >
        );
    }
}