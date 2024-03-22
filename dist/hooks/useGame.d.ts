import { GameQuery } from '../docs/game';
type UseGameProps = {
    gameId: string | bigint;
};
export declare const useGame: (props: UseGameProps) => {
    data: {
        __typename?: "Game" | undefined;
        id: string;
        gameId: any;
        title?: string | null | undefined;
        startsAt: any;
        status: import("../types").GameStatus;
        sport: {
            __typename?: "Sport" | undefined;
            slug: string;
            name: string;
        };
        league: {
            __typename?: "League" | undefined;
            slug: string;
            name: string;
            country: {
                __typename?: "Country" | undefined;
                slug: string;
                name: string;
            };
        };
        participants: {
            __typename?: "Participant" | undefined;
            image?: string | null | undefined;
            name: string;
        }[];
    } | undefined;
    client: import("@apollo/client").ApolloClient<any>;
    observable: import("@apollo/client").ObservableQuery<GameQuery, import("../types").Exact<{
        gameId: any;
    }>>;
    previousData?: GameQuery | undefined;
    error?: import("@apollo/client").ApolloError | undefined;
    loading: boolean;
    networkStatus: import("@apollo/client").NetworkStatus;
    called: boolean;
    variables: import("../types").Exact<{
        gameId: any;
    }> | undefined;
    startPolling: (pollInterval: number) => void;
    stopPolling: () => void;
    subscribeToMore: <TSubscriptionData = GameQuery, TSubscriptionVariables extends import("@apollo/client").OperationVariables = import("../types").Exact<{
        gameId: any;
    }>>(options: import("@apollo/client").SubscribeToMoreOptions<GameQuery, TSubscriptionVariables, TSubscriptionData>) => () => void;
    updateQuery: <TVars extends import("@apollo/client").OperationVariables = import("../types").Exact<{
        gameId: any;
    }>>(mapFn: (previousQueryResult: GameQuery, options: Pick<import("@apollo/client").WatchQueryOptions<TVars, GameQuery>, "variables">) => GameQuery) => void;
    refetch: (variables?: Partial<import("../types").Exact<{
        gameId: any;
    }>> | undefined) => Promise<import("@apollo/client").ApolloQueryResult<GameQuery>>;
    reobserve: (newOptions?: Partial<import("@apollo/client").WatchQueryOptions<import("../types").Exact<{
        gameId: any;
    }>, GameQuery>> | undefined, newNetworkStatus?: import("@apollo/client").NetworkStatus | undefined) => Promise<import("@apollo/client").ApolloQueryResult<GameQuery>>;
    fetchMore: <TFetchData = GameQuery, TFetchVars extends import("@apollo/client").OperationVariables = import("../types").Exact<{
        gameId: any;
    }>>(fetchMoreOptions: import("@apollo/client").FetchMoreQueryOptions<TFetchVars, TFetchData> & {
        updateQuery?: ((previousQueryResult: GameQuery, options: {
            fetchMoreResult: TFetchData;
            variables: TFetchVars;
        }) => GameQuery) | undefined;
    }) => Promise<import("@apollo/client").ApolloQueryResult<TFetchData>>;
};
export {};
