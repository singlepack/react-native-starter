import React from 'react'
import {StoreProvider} from "../store";
import Routes from '../routes'
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { AppLoading } from 'expo';


class App extends React.Component{

    state = {
        isReady: false
    };

    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require('../../node_modules/native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('../../node_modules/native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
        this.setState({ isReady: true });
    }


    render() {
        if (!this.state.isReady) {
            return <AppLoading />;
        }

        const routes = Routes();
        return <StoreProvider>{routes}</StoreProvider>
    }

}

export default App;