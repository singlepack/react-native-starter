import React from 'react';
import {createAppContainer } from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack'
import Home from "./Home";
import CoreLayout from "../layouts/CoreLayout";
import Login from "./Login";

const Stack = createStackNavigator({
    Home: {screen: Home},
    Login: {screen: Login},
});

export const Navigator = createAppContainer(Stack);

export const createRoutes = () => (
    <CoreLayout>
        <Navigator/>
    </CoreLayout>
);

export default createRoutes