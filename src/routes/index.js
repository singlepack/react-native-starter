import React from 'react';

import Home from "./Home";
import CoreLayout from "../layouts/CoreLayout";
import { Router, Scene, Tabs,Drawer,Stack } from 'react-native-router-flux';
import Login from "./Login";
import News from "./News";
import CustomTabs from "../components/CustomTabs";
import DrawerContent from "../components/DrawerContent";



const RoutesList = () => {

    return (
        <CoreLayout>
            <Router>
                <Scene key="root">
                    <Drawer hideNavBar key="drawer" contentComponent={DrawerContent}>
                        <Tabs key="tabs" tabBarComponent={CustomTabs} hideNavBar initial>
                            <Scene key="home" icon="home" component={Home} title="Home" hideNavBar/>
                            <Scene key="news" icon="paper" component={News} title="News" hideNavBar/>
                        </Tabs>
                        <Scene key="login" component={Login} title="Login" />
                    </Drawer>
                </Scene>
            </Router>
        </CoreLayout>
    )
};

export default RoutesList;