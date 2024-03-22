import * as Types from '../types';
import * as Apollo from '@apollo/client';
export type ConditionsBatchQueryVariables = Types.Exact<{
    conditionFilter?: Types.InputMaybe<Types.Condition_Filter>;
}>;
export type ConditionsBatchQuery = {
    __typename?: 'Query';
    conditions: Array<{
        __typename?: 'Condition';
        id: string;
        status: Types.ConditionStatus;
        outcomes: Array<{
            __typename?: 'Outcome';
            id: string;
            outcomeId: any;
            odds: any;
        }>;
    }>;
};
export declare const ConditionsBatchDocument: Apollo.DocumentNode;
export type ConditionsBatchQueryResult = Apollo.QueryResult<ConditionsBatchQuery, ConditionsBatchQueryVariables>;
