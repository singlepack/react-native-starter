import React from 'react';

import Home from "./Home";
import CoreLayout from "../layouts/CoreLayout";
import { Router, Scene } from 'react-native-router-flux';
import Login from "./Login";
import News from "./News";


const RoutesList = () => {
    return (
        <CoreLayout>
            <Router>
                <Scene key="root" hideNavBar={true}>
                    <Scene key="home" component={Home} title="Home" initial={true} />
                    <Scene key="news" component={News} title="News" />
                    <Scene key="login" component={Login} title="Login" />
                </Scene>
            </Router>
        </CoreLayout>
    )
};

export default RoutesList;