import * as Types from '../../types';
export type BetFragment = {
    __typename?: 'Bet';
    id: string;
    amount: any;
    status: Types.BetStatus;
    potentialPayout: any;
    payout?: any | null;
    result?: Types.BetResult | null;
    isRedeemed: boolean;
    isRedeemable: boolean;
    odds: any;
    settledOdds?: any | null;
    tokenId: any;
    createdAt: any;
    txHash: string;
    core: {
        __typename?: 'CoreContract';
        address: string;
        liquidityPool: {
            __typename?: 'LiquidityPoolContract';
            address: string;
        };
    };
    selections: Array<{
        __typename?: 'Selection';
        odds: any;
        result?: Types.SelectionResult | null;
        outcome: {
            __typename?: 'Outcome';
            outcomeId: any;
            condition: {
                __typename?: 'Condition';
                conditionId: any;
                status: Types.ConditionStatus;
                game: {
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
                };
            };
        };
    }>;
    freebet?: {
        __typename?: 'Freebet';
        freebetId: any;
        contractAddress: string;
    } | null;
};
export declare const BetFragmentDoc: import("@apollo/client").DocumentNode;
