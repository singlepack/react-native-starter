import React from 'react'
import {Content, Text} from 'native-base'
import { useStore, observer } from '../../../store'

const HomeView = observer(() => {
    let store = useStore();
    return (
        <Content>
            <Text>Hello, {store.user.data.name}</Text>
        </Content>
    );
});

export default HomeView;