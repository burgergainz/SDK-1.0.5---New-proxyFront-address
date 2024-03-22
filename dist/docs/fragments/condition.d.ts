import * as Types from '../../types';
export type ConditionFragment = {
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
};
export declare const ConditionFragmentDoc: import("@apollo/client").DocumentNode;
