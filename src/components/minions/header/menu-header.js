import React from "react";
import {Link}  from "react-router-dom";

import PageStore from "../../../dataStore/PageStore";
import MainBarNavItemsLi from "./minions/main-bar-nav-items-li";

// ------Resources------Start------------
import legoLogo from "../../../assets/svg/lego-logo.svg";
import wavingTom from "../../../assets/waving-tom.png";
import search from "../../../assets/svg/search.svg";
import account from "../../../assets/svg/account.svg";
import myBag from "../../../assets/svg/my-bag.svg";
// ------Resources------End-------------

export default class MenuHeader extends React.Component {

    constructor() {
        super();

        this.state = {
            pageData: PageStore.getPageData()
        }
    }

    componentWillMount() {
        PageStore.on("NewPageDataAvailable", () => {
            this.setState({
                pageData: PageStore.getPageData()
            })
        });
    }

    componentWillUnmount() {
        PageStore.removeListener("NewPageDataAvailable");
    }

    render() {
        
// console.log(this.state.pageData.header.data);

        // var MainBarNavItemsLis = this.state.pageData.header.data.forEach((id,menuData)=>{
        //     console.log(id, menuData);
        // });
        
        var MainBarNavItemsLis = [];

        for(var props in this.state.pageData.header.data){
            MainBarNavItemsLis.push(<MainBarNavItemsLi key={props} data={this.state.pageData.header.data[props]}/>);
        }

        return (
            <div className="main-bar" data-rtest="38">
                <div className="main-bar__container" data-rtest="39">
                    <nav data-test="main-bar-nav-mobile" className="main-bar__nav-mobile" data-rtest="40">
                        <div id="main-bar-dropdown-nav-mobile" className="dropdown" data-test="main-bar-dropdown-nav-mobile" data-rtest="41"><a rel="nofollow" className="dropdown__trigger" data-test="main-bar-trigger-nav-mobile" href="https://shop.lego.com/en-US/#nav-mobile" data-rtest="42"><span data-rtest="43"><img src={legoLogo} alt="" className="icon icon-nav-mobile" data-test="dropdown-icon" data-rtest="44" />SHOP</span></a>
                        </div>
                    </nav>
                    <nav data-test="main-bar-nav" className="main-bar__nav" data-rtest="46">
                        <Link className="main-bar__link-home" to="/">
                            <span data-rtest="48"><img src={legoLogo} alt="" data-rtest="49" /><span data-rtest="50">SHOP</span></span>
                        </Link>
                        <div className="main-bar__divider" data-rtest="51"></div>
                        <ul className="main-bar__nav-items" data-rtest="52">
                            {MainBarNavItemsLis}
                            {/*<li data-rtest="53">
                                <div id="main-bar-dropdown-sets" className="dropdown" data-test="main-bar-dropdown-sets" data-rtest="54">
                                    <a className="dropdown__trigger" onClick={this.menuClickHandler.bind(this)} data-test="main-bar-trigger-sets" href="https://shop.lego.com/en-US/Sets-Home" data-rtest="55">
                                        <span data-rtest="56">SETS</span>
                                    </a>
                                    {  showSubMenu && <DropDownContent/>  }                                    
                                </div>
                            </li>
                            <li data-rtest="58">
                                <div id="main-bar-dropdown-exclusives" className="dropdown" data-test="main-bar-dropdown-exclusives" data-rtest="59"><a className="dropdown__trigger" data-test="main-bar-trigger-exclusives" href="https://shop.lego.com/en-US/Exclusives-Home" data-rtest="60"><span data-rtest="61">EXCLUSIVES</span></a>
                                </div>
                            </li>
                            <li data-rtest="63">
                                <div id="main-bar-dropdown-bricks" className="dropdown" data-test="main-bar-dropdown-bricks" data-rtest="64"><a className="dropdown__trigger" data-test="main-bar-trigger-bricks" href="https://shop.lego.com/en-US/Bricks-Home" data-rtest="65"><span data-rtest="66">BRICKS</span></a>
                                </div>
                            </li>
                            <li data-rtest="68">
                                <div id="main-bar-dropdown-extras" className="dropdown" data-test="main-bar-dropdown-extras" data-rtest="69"><a className="dropdown__trigger" data-test="main-bar-trigger-extras" href="https://shop.lego.com/en-US/Extras-Home" data-rtest="70"><span data-rtest="71">EXTRAS</span></a>
                                </div>
                            </li>
                            <li data-rtest="73">
                                <div id="main-bar-dropdown-discover" className="dropdown" data-test="main-bar-dropdown-discover" data-rtest="74"><a className="dropdown__trigger" data-test="main-bar-trigger-discover" href="https://shop.lego.com/en-US/Discover-Home" data-rtest="75"><span data-rtest="76">DISCOVER</span></a>
                                </div>
                            </li>*/}
                        </ul>
                    </nav>
                    <div className="main-bar__wrapper--right" data-rtest="78">
                        <div className="main-bar__search" data-rtest="79">
                            <div className="main-bar__search-desktop-icon" data-test="animation" data-rtest="80"><img src={wavingTom} alt="" data-rtest="81" />
                                <div className="movieclip--paused" data-id="anim-waving-tom" data-test="animation-movieclip">

                                    <div className="movieclip__media" data-test="animation-movieclip-media"></div>
                                </div>
                            </div>
                            <form className="search-form" data-test="search-form" data-rtest="82">
                                <label data-rtest="83"><span className="search-form__label" data-test="search-input-label" data-rtest="84">Search</span><span className="search-form__input-container" data-rtest="85"><input type="search" name="query" autoComplete="off" data-test="search-input" data-rtest="86" /><button type="submit" className="search-form__submit" data-test="search-submit" data-rtest="87"><span data-rtest="88">SUBMIT SEARCH</span>
                                </button>
                                </span>
                                </label>
                            </form>
                            <div id="main-bar-dropdown-search" className="dropdown" data-test="main-bar-dropdown-search" data-rtest="89"><a rel="nofollow" className="dropdown__trigger" data-test="main-bar-trigger-search" href="https://shop.lego.com/en-US/#search" data-rtest="90"><span data-rtest="91"><img src={search} alt="" className="icon icon-search" data-test="dropdown-icon" data-rtest="92" /></span><div className="fade" data-rtest="93"></div></a>
                            </div>
                        </div>
                        <div className="main-bar__utils" data-rtest="94">
                            <div id="main-bar-dropdown-account-mobile" className="dropdown" data-test="main-bar-dropdown-account-mobile" data-rtest="95"><a rel="nofollow" className="dropdown__trigger" data-test="main-bar-trigger-account-mobile" href="https://shop.lego.com/en-US/#account-mobile" data-rtest="96"><span data-rtest="97"><img src={account} alt="" className="icon icon-account-mobile" data-test="dropdown-icon" data-rtest="98" /></span></a>
                            </div>
                            <div id="main-bar-dropdown-cart-mobile" className="dropdown" data-test="main-bar-dropdown-cart-mobile" data-rtest="99"><a rel="nofollow" className="dropdown__trigger" data-test="main-bar-trigger-cart-mobile" href="https://shop.lego.com/en-US/#cart-mobile" data-rtest="100"><span data-rtest="101"><img src={myBag} alt="" className="icon icon-cart-mobile" data-test="dropdown-icon" data-rtest="102" /><span className="count-badge" data-test="util-bar-cart-badge" data-rtest="103"><span data-test="util-bar-cart-count" data-rtest="104">0</span></span></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}