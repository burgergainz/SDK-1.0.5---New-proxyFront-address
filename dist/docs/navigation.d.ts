import * as Types from '../types';
import * as Apollo from '@apollo/client';
export type NavigationQueryVariables = Types.Exact<{
    first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
    where?: Types.InputMaybe<Types.Game_Filter>;
    withGameCount: Types.Scalars['Boolean']['input'];
}>;
export type NavigationQuery = {
    __typename?: 'Query';
    sports: Array<{
        __typename?: 'Sport';
        id: string;
        slug: string;
        name: string;
        games?: Array<{
            __typename?: 'Game';
            id: string;
        }>;
    }>;
};
export declare const NavigationDocument: Apollo.DocumentNode;
export type NavigationQueryResult = Apollo.QueryResult<NavigationQuery, NavigationQueryVariables>;
