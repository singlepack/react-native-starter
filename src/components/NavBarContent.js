import React from 'react'
import {Header, Body, Title, Left, Icon, Button, Right } from 'native-base';
import { Actions } from 'react-native-router-flux';

const NavBarContent = (props) => {

    return (
        <Header>
            <Left>
                <Button transparent onPress={() => {Actions.drawerOpen()}}>
                    <Icon name="menu"/>
                </Button>
            </Left>
            <Body>
            <Title>{props.title}</Title>
            </Body>
            <Right />
        </Header>
    );

};

export default NavBarContent;