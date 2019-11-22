import React from 'react'
import Login from '../routes/Login'
import { useStore, observer } from '../store'
import AuthLayout from "../layouts/AuthLayout";

const Security = observer(({ children }) => {
    const store = useStore();

    if (!store.user.auth) {
        return <Login />
    }

    return (
        <AuthLayout>
            {children}
        </AuthLayout>
    );
});

export default Security