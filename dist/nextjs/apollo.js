import {jsx}from'react/jsx-runtime';import {useRef,useMemo}from'react';import {HttpLink,ApolloLink}from'@apollo/client';import {ApolloNextAppProvider,SSRMultipartLink,NextSSRApolloClient,NextSSRInMemoryCache}from'@apollo/experimental-nextjs-app-support/ssr';import {u as useChain}from'../chainContext.js';import {g as graphqlEndpoints}from'../config.js';import'wagmi';import'viem/chains';import'viem';const getLink = (chainId) => {
    return new HttpLink({
        uri: graphqlEndpoints[chainId],
    });
};
const getApolloClient = (chainId) => {
    const httpLink = getLink(chainId);
    let link = httpLink;
    if (typeof window === 'undefined') {
        link = ApolloLink.from([
            new SSRMultipartLink({
                stripDefer: true,
            }),
            httpLink,
        ]);
    }
    return new NextSSRApolloClient({
        cache: new NextSSRInMemoryCache(),
        link,
        connectToDevTools: true,
    });
};
const ApolloProvider = (props) => {
    const { children } = props;
    const { appChain } = useChain();
    const prevAppChainIdRef = useRef();
    const apolloClientRef = useRef();
    // set new link before render for send requests with new one
    useMemo(() => {
        if (appChain.id !== prevAppChainIdRef.current && apolloClientRef.current) {
            const link = new HttpLink({
                uri: graphqlEndpoints[appChain.id],
            });
            apolloClientRef.current.setLink(link);
            apolloClientRef.current.resetStore();
            prevAppChainIdRef.current = appChain.id;
        }
    }, [appChain.id]);
    const makeClient = () => {
        apolloClientRef.current = getApolloClient(appChain.id);
        return apolloClientRef.current;
    };
    return (jsx(ApolloNextAppProvider, { makeClient: makeClient, children: children }));
};export{ApolloProvider};