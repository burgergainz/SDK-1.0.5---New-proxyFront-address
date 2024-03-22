import { ConditionStatus } from 'src/types';
import { Selection } from '../global';
export type Condition = {
    conditionId: string | bigint;
};
export type MarketOutcome = {
    selectionName: string;
    odds: string;
    lpAddress: string;
    coreAddress: string;
    status: ConditionStatus;
    gameId: string | bigint;
} & Selection;
export type Market = {
    marketKey: string;
    name: string;
    description: string;
    outcomeRows: MarketOutcome[][];
};
export type GameMarkets = Market[];
type Props = {
    gameId: string | bigint;
    filter?: {
        outcomeIds?: string[];
    };
};
export declare const useGameMarkets: (props: Props) => {
    loading: boolean;
    data: GameMarkets | null | undefined;
    error: import("@apollo/client").ApolloError | undefined;
};
export {};
