import { ConditionsQuery } from '../docs/conditions';
type UseConditionsProps = {
    gameId: string | bigint;
    filter?: {
        outcomeIds?: string[];
    };
};
export declare const useConditions: (props: UseConditionsProps) => import("@apollo/client").QueryResult<ConditionsQuery, import("../types").Exact<{
    where: import("../types").Condition_Filter;
}>>;
export {};
