import React from 'react'
import {Header, Body, Title } from 'native-base';

class AuthHeader extends React.Component{

    render() {
        return (
                <Header>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                </Header>
        );
    }

}

export default AuthHeader;