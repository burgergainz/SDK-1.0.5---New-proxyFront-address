import { type ApolloClient } from '@apollo/client';
import { ConditionStatus } from '../types';
type OutcomeData = {
    status: ConditionStatus;
    odds: string;
};
type Result = Record<string, OutcomeData>;
export declare const batchFetchOutcome: (conditionEntityId: string, client: ApolloClient<object>) => Promise<Result | undefined>;
export {};
