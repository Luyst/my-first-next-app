"use client";

import { store } from "@/redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { Provider } from "react-redux";

export default function AllProvider({ children }: { children: ReactNode }) {
    const [client] = useState(() => new QueryClient());

    return (
        <Provider store={store}>

            <QueryClientProvider client={client}>
                {children}
            </QueryClientProvider>
        </Provider>
    );
}
