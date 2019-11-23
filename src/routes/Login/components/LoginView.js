import React from 'react'
import {Button, Content, Text, Container} from 'native-base'
import {observer, useStore} from '../../../store'
import { StyleSheet,View } from 'react-native';

const LoginView = observer(() => {
    const store = useStore();

    return (
        <Container>
            <Content contentContainerStyle={styles.center}>
                <View>
                    <Text>Hello, press login button</Text>
                    <Button style={styles.textCenter} onPress={() => { store.user.login()}} success><Text>Login</Text></Button>
                </View>
            </Content>
        </Container>
    );
});

const styles = StyleSheet.create({
    center: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    textCenter: {
        justifyContent:'center'
    }
});

export default LoginView;