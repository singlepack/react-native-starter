import React from 'react';

import Home from "./Home";
import CoreLayout from "../layouts/CoreLayout";
import { Router, Scene, Tabs,Drawer } from 'react-native-router-flux';
import Page from "./Page";
import News from "./News";
import TabsContent from "../components/TabsContent";
import DrawerContent from "../components/DrawerContent";
import NavBarContent from "../components/NavBarContent";



const RoutesList = () => {

    return (
        <CoreLayout>
            <Router navBar={NavBarContent}>
                <Scene key="root" hideNavBar>
                    <Drawer key="drawer" contentComponent={DrawerContent}>
                        <Tabs key="dashboard" tabBarComponent={TabsContent} initial>
                            <Scene key="home" icon="home" component={Home} title="Home"/>
                            <Scene key="news" icon="paper" component={News} title="News"/>
                        </Tabs>
                        <Scene key="some-page" icon="link" component={Page} title="Some page"/>
                    </Drawer>
                </Scene>
            </Router>
        </CoreLayout>
    )
};

export default RoutesList;