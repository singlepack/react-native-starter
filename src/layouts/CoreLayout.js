import React from 'react';
import Security from "../containers/Security";

export default class CoreLayout extends React.Component{

    render() {
        return (
            <Security>
                {this.props.children}
            </Security>
        );
    }
}