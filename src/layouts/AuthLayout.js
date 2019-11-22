import React from 'react'
import {Container} from 'native-base'
import AuthHeader from "../components/AuthHeader";
import AuthFooter from "../components/AuthFooter";

class AuthLayout extends React.Component{

    render() {
        return (
            <Container>
                <AuthHeader/>
                {this.props.children}
                <AuthFooter/>
            </Container>
        );
    }

}

export default AuthLayout;