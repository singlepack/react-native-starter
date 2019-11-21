import React from 'react'
import {Text, View} from "react-native";
import { useStore, observer } from '../../../store'

const HomeView = observer(() => {
    let store = useStore();
    return (
        <View>
            <Text>Hello, {store.user.data.name}</Text>
        </View>
    );
});

export default HomeView;