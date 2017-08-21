import React from "react";

export default class CookieConsent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            showCookie: true
        }
    }

    clickHandler() {
        this.setState({showCookie: false});
    }

    render() {
        if(!this.state.showCookie)
            return null;

        return (
            <div className="cookie-consent" data-test="cookie-consent">
                <div className="cookie-consent__container" data-test="cookie-consent-container">
                    <div><span className="cookie-consent__message markup" data-test="remarketing-consent-message">We use cookies for storing your selections, compiling statistics, targeted advertising and personalised marketing. We also track your behaviour. This information may be shared with third parties.&nbsp;By accepting the policy, you agree to our use of cookies. <a href="https://www.lego.com/legal/cookieinfo" target="_blank">Learn more about cookies, including how to disable them.</a></span>
                        <button onClick={this.clickHandler.bind(this)} type="button" className="cookie-consent__accept-consent-button--remarketing" data-test="remarketing-consent-button"><span>ACCEPT</span></button>
                    </div>
                </div>
            </div>
        );
    }
}