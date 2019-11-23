import React from 'react';
import Security from "../containers/Security";
import {StyleProvider} from 'native-base'
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

export default class CoreLayout extends React.Component{

    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Security>
                     {this.props.children}
                </Security>
            </StyleProvider>
        );
    }
}