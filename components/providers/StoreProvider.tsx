'use client'
import { Provider } from "react-redux";
import makeStore, { AppStore } from "@/lib/store";
import { ReactNode, useRef } from "react";

type Props = {
    children: ReactNode
}

const StoreProvider = (props: Props) => {
    const storeRef = useRef<AppStore | null>(null)

    if (!storeRef.current) {
        storeRef.current = makeStore()
    }

    return (
        <Provider store={storeRef.current}>
            {props.children}
        </Provider>
    )
}

export default StoreProvider