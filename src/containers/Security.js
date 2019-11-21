import React from 'react'
import Login from '../routes/Login'
import { useStore, observer } from '../store'

const Security = observer(({ children }) => {
    const store = useStore();

    if (!store.user.auth) {
        return <Login />
    }

    return children
});

export default Security