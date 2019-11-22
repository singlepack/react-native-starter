import React,{ useState } from 'react'
import {Footer, FooterTab, Button, Text, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

const AuthFooter = () => {
    const [currentScene, setCurrentScene] = useState("home");

    return (
        <Footer>
            <FooterTab>
                <Button vertical onPress={() => {setCurrentScene("home"); Actions.home()}} active={currentScene === "home"}>
                    <Icon name="home"/>
                    <Text>Home</Text>
                </Button>
                <Button vertical onPress={() => {setCurrentScene("news"); Actions.news()}} active={currentScene === "news"}>
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
};

export default AuthFooter