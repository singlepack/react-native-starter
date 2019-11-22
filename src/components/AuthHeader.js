import React from 'react'
import {Header, Body, Title } from 'native-base';

class AuthHeader extends React.Component{

    render() {
        return (
                <Header style={{ backgroundColor: 'red' }}>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                </Header>
        );
    }

}

export default AuthHeader;