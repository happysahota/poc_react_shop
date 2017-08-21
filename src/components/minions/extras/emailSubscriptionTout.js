import React from "react";

export default class EmailSubscriptionTout extends React.Component {
    render() {
        var data = this.props.data;
        return (
            <section className="subscribe-tout">
                <div className="subscribe-tout__container">
                    <div className="subscribe-tout__col">
                        <h2 className="subscribe-tout__title">{data.title}</h2>
                    </div>
                    <div className="subscribe-tout__col">
                        <form className="form" noValidate=""><label className="field " data-test="form-field-email-field"><span className="field__label" data-test="input-field-label">Email</span><input type="email" autoComplete="on" data-test="form-field-email" maxLength="75" required="" name="email" value="" /></label>
                            <button
                                type="submit" className="form-button-submit" data-test="button-submit"><span>{data.see_more_link.link_text}</span></button>
                        </form>
                        <div className="subscribe-tout__tooltip">
                            <div className="tooltip"><button type="button" className="tooltip__button"><span>tooltip.open</span></button><span className="tooltip__dialog-container"
                                data-test="dialog-container"></span></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}