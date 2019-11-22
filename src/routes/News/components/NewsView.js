import React from 'react'
import {Content, Text, Card, CardItem,Body} from 'native-base'
import { useStore, observer } from '../../../store'

const NewsView = observer(() => {
    let store = useStore();
    return (
        <Content>
            <Card>
                <CardItem>
                    <Body>
                        <Text>News</Text>
                    </Body>
                </CardItem>
            </Card>
        </Content>
    );
});

export default NewsView;