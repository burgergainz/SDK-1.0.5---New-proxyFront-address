import { type Address } from 'wagmi';
import { GameQuery } from '../docs/game';
import { Bet_OrderBy, OrderDirection, BetStatus } from '../types';
import { Selection } from '../global';
export type BetOutcome = {
    selectionName: string;
    odds: number;
    marketName: string;
    game: GameQuery['games'][0];
    isWin: boolean | null;
    isLose: boolean | null;
    isCanceled: boolean;
} & Selection;
export type Bet = {
    tokenId: string;
    freebetId: string | null;
    freebetContractAddress?: Address;
    totalOdds: number;
    coreAddress: Address;
    lpAddress: Address;
    outcomes: BetOutcome[];
    txHash: string;
    status: BetStatus;
    amount: string;
    possibleWin: number;
    payout: number;
    createdAt: number;
    isWin: boolean;
    isLose: boolean;
    isRedeemable: boolean;
    isRedeemed: boolean;
    isCanceled: boolean;
};
export type UseBetsProps = {
    filter: {
        bettor: Address;
        limit?: number;
        offset?: number;
    };
    orderBy?: Bet_OrderBy;
    orderDir?: OrderDirection;
};
export declare const useBets: (props: UseBetsProps) => {
    loading: boolean;
    data: Bet[];
    error: import("@apollo/client").ApolloError | undefined;
};
