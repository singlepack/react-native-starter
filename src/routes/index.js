import React from 'react';

import Home from "./Home";
import CoreLayout from "../layouts/CoreLayout";
import { Router, Scene, Tabs,Drawer } from 'react-native-router-flux';
import Login from "./Login";
import News from "./News";
import TabsContent from "../components/TabsContent";
import DrawerContent from "../components/DrawerContent";



const RoutesList = () => {

    return (
        <CoreLayout>
            <Router>
                <Scene key="root">
                    <Drawer hideNavBar key="drawer" contentComponent={DrawerContent}>
                        <Tabs key="tabs" tabBarComponent={TabsContent} hideNavBar initial>
                            <Scene key="home" icon="home" component={Home} title="Home" hideNavBar/>
                            <Scene key="news" icon="paper" component={News} title="News" hideNavBar/>
                        </Tabs>
                        <Scene key="login" icon="home" component={Login} title="Login" hideNavBar/>
                    </Drawer>
                </Scene>
            </Router>
        </CoreLayout>
    )
};

export default RoutesList;