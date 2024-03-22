import * as Types from '../types';
import * as Apollo from '@apollo/client';
export type GamesQueryVariables = Types.Exact<{
    first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
    skip?: Types.InputMaybe<Types.Scalars['Int']['input']>;
    where: Types.Game_Filter;
    orderBy?: Types.InputMaybe<Types.Game_OrderBy>;
    orderDirection?: Types.InputMaybe<Types.OrderDirection>;
}>;
export type GamesQuery = {
    __typename?: 'Query';
    games: Array<{
        __typename?: 'Game';
        id: string;
        gameId: any;
        title?: string | null;
        startsAt: any;
        status: Types.GameStatus;
        sport: {
            __typename?: 'Sport';
            slug: string;
            name: string;
        };
        league: {
            __typename?: 'League';
            slug: string;
            name: string;
            country: {
                __typename?: 'Country';
                slug: string;
                name: string;
            };
        };
        participants: Array<{
            __typename?: 'Participant';
            image?: string | null;
            name: string;
        }>;
    }>;
};
export declare const GamesDocument: Apollo.DocumentNode;
export type GamesQueryResult = Apollo.QueryResult<GamesQuery, GamesQueryVariables>;
