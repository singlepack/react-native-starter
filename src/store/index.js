import React from 'react'
import { useLocalStore } from 'mobx-react'
import User from "./user";
export { observer } from 'mobx-react'

export function createStore() {
    return {
        user: User()
    }
}

const storeContext = React.createContext(null)

export const StoreProvider = ({ children }) => {
    const store = useLocalStore(createStore);
    return <storeContext.Provider value={store}>{children}</storeContext.Provider>
};

export const useStore = () => {
    const store = React.useContext(storeContext)
    if (!store) {
        // this is especially useful in TypeScript so you don't need to be checking for null all the time
        throw new Error('You have forgot to use StoreProvider, shame on you.')
    }
    return store
};
