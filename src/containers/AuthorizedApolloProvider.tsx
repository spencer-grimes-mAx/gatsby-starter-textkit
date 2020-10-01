import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import React from 'react';

const activeEnv =
process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";
console.log(`Using environment config: '${activeEnv}'`);

require("dotenv").config({
path: `.env.${activeEnv}`,
});

import { useAuth0 } from './Auth0Provider';

const AuthorizedApolloProvider = ({ children }) => {
    const auth0 = useAuth0();

    const cache = new InMemoryCache();

    const httpLink = createHttpLink({
        uri: process.env.TEXKIT_GRAPHQL,
    });
    const authLink = setContext(async (_, { headers }) => {
        const token = await auth0.getTokenSilently();
        return {
            headers: {
                ...headers,
                Authorization: `Bearer ${token}`,
            },
        };
    });

    const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
        cache,
        link: authLink.concat(httpLink),
    });

    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default AuthorizedApolloProvider;
