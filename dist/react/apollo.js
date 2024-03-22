import {jsx}from'react/jsx-runtime';import {useRef,useMemo}from'react';import {HttpLink,ApolloProvider as ApolloProvider$1,InMemoryCache,ApolloClient}from'@apollo/client';import {u as useChain}from'../chainContext.js';import {g as graphqlEndpoints}from'../config.js';import'wagmi';import'viem/chains';import'viem';const getLink = (chainId) => {
    return new HttpLink({
        uri: graphqlEndpoints[chainId],
    });
};
const getApolloClient = (chainId) => {
    const link = getLink(chainId);
    const cache = new InMemoryCache(); // TODO add typePolicies (and cache to not fetch game on game again) - added on 10/23/23 by pavelivanov
    return new ApolloClient({
        link,
        ssrMode: typeof window === 'undefined',
        cache,
        connectToDevTools: true,
        assumeImmutableResults: true,
    });
};
const ApolloProvider = (props) => {
    const { children, initialClient } = props;
    const { appChain } = useChain();
    const prevAppChainIdRef = useRef(appChain.id);
    const apolloClientRef = useRef(initialClient || getApolloClient(appChain.id));
    // set new link before render for send requests with new one
    useMemo(() => {
        if (appChain.id !== prevAppChainIdRef.current) {
            const link = new HttpLink({
                uri: graphqlEndpoints[appChain.id],
            });
            apolloClientRef.current.setLink(link);
            apolloClientRef.current.resetStore();
            prevAppChainIdRef.current = appChain.id;
        }
    }, [appChain.id]);
    return (jsx(ApolloProvider$1, { client: apolloClientRef.current, children: children }));
};export{ApolloProvider};