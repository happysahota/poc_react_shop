import React from "react";

export default class ProductFeatures extends React.Component {

    render(){
        const feats = this.props.feats.map((feat, id)=><li key={id}>{feat}</li>);
        return (
            <span>
                <h5>Additional Features</h5>
                <ul>
                    {feats}
                </ul>
            </span>
        );
    }
}