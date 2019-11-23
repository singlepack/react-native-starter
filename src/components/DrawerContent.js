import React from 'react'
import {Text, Icon,Container,Content, List, ListItem, Left, Body, Right, Header } from 'native-base';
import { Actions } from 'react-native-router-flux';

const DrawerContent = (props) => {

    const { state } = props.navigation;
    const activeTabIndex = state.index;

    return (
        <Container>
            <Header>
                <Body>
                    <Text>Header</Text>
                </Body>
            </Header>
            <Content>
                <List>
                {
                    state.routes.map((element,index) => {
                        return (
                            <ListItem noBorder icon key={element.key} onPress={() => Actions[element.key]()} selected={index === activeTabIndex}>
                                <Left><Icon name={element.routes[0].params.icon}/></Left>
                                <Body><Text>{element.routes[0].params.title.toUpperCase()}</Text></Body>
                                <Right/>
                            </ListItem>
                        )
                    })
                }
                </List>
            </Content>
        </Container>
    );
};

export default DrawerContent