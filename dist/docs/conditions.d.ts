import * as Types from '../types';
import * as Apollo from '@apollo/client';
export type ConditionsQueryVariables = Types.Exact<{
    where: Types.Condition_Filter;
}>;
export type ConditionsQuery = {
    __typename?: 'Query';
    conditions: Array<{
        __typename?: 'Condition';
        id: string;
        conditionId: any;
        status: Types.ConditionStatus;
        outcomes: Array<{
            __typename?: 'Outcome';
            outcomeId: any;
            odds: any;
        }>;
        core: {
            __typename?: 'CoreContract';
            address: string;
            liquidityPool: {
                __typename?: 'LiquidityPoolContract';
                address: string;
            };
        };
        game: {
            __typename?: 'Game';
            gameId: any;
            sport: {
                __typename?: 'Sport';
                sportId: any;
            };
        };
    }>;
};
export declare const ConditionsDocument: Apollo.DocumentNode;
export type ConditionsQueryResult = Apollo.QueryResult<ConditionsQuery, ConditionsQueryVariables>;
