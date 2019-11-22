import React from 'react'
import {Footer, FooterTab, Button, Text } from 'native-base';

class AuthFooter extends React.Component{

    render() {
        return (
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>
        );
    }

}

export default AuthFooter;