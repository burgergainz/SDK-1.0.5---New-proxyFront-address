import * as Types from '../types';
import * as Apollo from '@apollo/client';
export type GameQueryVariables = Types.Exact<{
    gameId: Types.Scalars['BigInt']['input'];
}>;
export type GameQuery = {
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
export declare const GameDocument: Apollo.DocumentNode;
export type GameQueryResult = Apollo.QueryResult<GameQuery, GameQueryVariables>;
