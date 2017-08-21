import React from "react";

export default class SocialIcons extends React.Component {
    render() {
        return (
            <div className="social-icons">
                <div className="social-icons__container--no-margin">
                    <button type="button" className="social-icons__link--facebook" data-test="facebook-link"><span>Facebook</span></button>
                    <button type="button" className="social-icons__link--twitter" data-test="twitter-link"><span>Twitter</span></button>
                    <button type="button" className="social-icons__link--googleplus" data-test="googleplus-link"><span>Google Plus</span></button>
                    <button type="button" className="social-icons__link--pinterest" data-test="pinterest-link"><span>Pinterest</span></button>
                </div>
            </div>
        );
    }
}