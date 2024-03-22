import { ApolloClient, type NormalizedCacheObject } from '@apollo/client';
type Props = {
    children: any;
    initialClient?: ApolloClient<NormalizedCacheObject>;
};
export declare const ApolloProvider: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
