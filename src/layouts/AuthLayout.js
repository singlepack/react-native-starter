import React from 'react'
import {Container} from 'native-base'
import AuthHeader from "../components/AuthHeader";

class AuthLayout extends React.Component{

    render() {
        return (
            <Container>
                <AuthHeader/>
                {this.props.children}
            </Container>
        );
    }

}

export default AuthLayout;