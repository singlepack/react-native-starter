import React from 'react'
import {Footer, FooterTab, Button, Text, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

const TabsContent = (props) => {

    const { state } = props.navigation;
    const activeTabIndex = state.index;

    return (
        <Footer>
            <FooterTab>
                {
                    state.routes.map((element,index) => {
                        return (
                            <Button vertical key={element.key} onPress={() => Actions[element.key]()} active={index === activeTabIndex}>
                                <Icon name={element.routes[0].params.icon}/>
                                <Text>{element.key.toUpperCase()}</Text>
                            </Button>
                        )
                    })
                }
            </FooterTab>
        </Footer>
    );
};

export default TabsContent