import React from 'react'
import Login from '../routes/Login'
import { useStore, observer } from '../store'
import {Container} from "native-base";

const Security = observer(({ children }) => {
    const store = useStore();

    if (!store.user.auth) {
        return <Login />
    }

    return (
        <Container>
            {children}
        </Container>
        );
});

export default Security