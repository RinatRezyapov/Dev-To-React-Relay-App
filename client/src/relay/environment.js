import React from 'react';
import {
    Store,
    RecordSource,
    Environment,
    Network,
    Observable,
} from "relay-runtime";
import { RelayEnvironmentProvider } from "react-relay";

const fetchFn = (params, variables) => {
    const response = fetch("http://localhost:5000/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query: params.text,
            variables,
        }),
    });

    return Observable.from(response.then((data) => data.json()));
};

function createEnvironment() {
    const network = Network.create(fetchFn);
    const store = new Store(new RecordSource());
    return new Environment({ store, network });
}

export default function RelayEnvironment({ children }) {
    const environment = React.useMemo(() => {
        return createEnvironment();
    }, []);

    return (
        <RelayEnvironmentProvider environment={environment}>
            {children}
        </RelayEnvironmentProvider>
    );
}
