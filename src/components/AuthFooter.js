import React from 'react'
import {Footer, FooterTab, Button, Text, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import {observer, useStore} from "../store"

const AuthFooter = observer(() => {
    const store = useStore();
    console.log(store.currentPage);

    return (
        <Footer>
            <FooterTab>
                <Button vertical onPress={() => {Actions.home()}} active={store.currentPage === "home"}>
                    <Icon name="home"/>
                    <Text>Home</Text>
                </Button>
                <Button vertical onPress={() => {Actions.news()}} active={store.currentPage === "news"}>
                    <Icon name="paper" />
                    <Text>News</Text>
                </Button>
                <Button vertical>
                    <Icon active name="navigate" />
                    <Text>Navigate</Text>
                </Button>
                <Button vertical>
                    <Icon name="person" />
                    <Text>Contact</Text>
                </Button>
            </FooterTab>
        </Footer>
    );
});

export default AuthFooter