import React from 'react'
import {Content, Text, Card, CardItem,Body, Button} from 'native-base'
import { useStore, observer } from '../../../store'

const HomeView = observer(() => {
    let store = useStore();



    return (
        <Content>
            <Card>
                <CardItem>
                    <Body>
                        <Text>Hello, {store.user.data.name}</Text>
                        <Button onPress={() => { store.user.logout()}} primary><Text>Logout</Text></Button>
                    </Body>
                </CardItem>
            </Card>
        </Content>
    );
});

export default HomeView;