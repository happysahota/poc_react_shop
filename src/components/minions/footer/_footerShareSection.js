import React from "react";

import PageStore from "../../../dataStore/PageStore";

export default class ShareSection extends React.Component {

    constructor() {
        super();

        this.state = {
            footerData: PageStore.getPageData()
        }
    }

    componentWillMount() {
        PageStore.on("NewPageDataAvailable", () => {
            this.setState({
                footerData: PageStore.getPageData()
            })
        });
    }

    componentWillUnmount(){
        PageStore.removeListener("NewPageDataAvailable");
    }



    render() {

        let footerData = this.state.footerData.footer.share;

        let LeftBorder1 = {
            borderLeftWidth: '0px',
        };

        let CommunityLinks = [];
        let ContactInfo = [];

        const showLinks = footerData.links ? true : false;
        const showContacts = footerData.contacts ? true : false;

        if (showLinks) {
            for (var key in footerData.links) {
                if (!footerData.links.hasOwnProperty(key)) continue;
                CommunityLinks.push(<a key={key} class="footer__link_share" target="_blank" href={footerData.links[key]}><span class={"footer__link_share-icon icon-" + key}></span><span class="tabletdesktop">{key}</span></a>);
            }
        }

        if (showContacts) {
            for (var key in footerData.contacts) {
                if (!footerData.contacts.hasOwnProperty(key)) continue;

                if(key=="phone"){
                    <span class="footer__link_contacts"><a href={"tel:"+footerData.contacts[key]} class="block-phone"><span class="footer__link_contacts-icon icon-phone"></span><span>{footerData.contacts[key]}</span></a></span>
                }else{
                    <span class="footer__link_contacts footer__link_contacts_mail"><a href={"mailto:"+footerData.contacts[key]} class="block-phone"><span class="footer__link_contacts-icon footer__link_contacts-icon_mail icon-mail"></span><span>{footerData.contacts[key]}</span></a></span>
                }
                ContactInfo.push(<a key={key} class="footer__link_share" target="_blank" href={footerData.links[key]}><span class={"footer__link_share-icon icon-" + key}></span><span class="tabletdesktop">{key}</span></a>);
            }
        }

        if(showContacts && showLinks) {
            LeftBorder1 = {
                borderLeftWidth: '1px',
            };
        }

        

        if(!showContacts && !showLinks){
            return null;
        }

        return (

            <div class="layout footer__share">

                <div class="layout-inner">

                    <h6 class="footer__title_share">Follow us</h6>
                    <div class="clearfix layout__inner ">
                        {showLinks && <div class="footer__share__links ng-isolate-scope">
                            {CommunityLinks}
                        </div>}
                        {showContacts && <div class="footer__share__contact" style={LeftBorder1}>                            
                            {ContactInfo}
                        </div>}
                    </div>
                </div>

            </div>
        );
    }
}