export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<T extends {
    [key: string]: unknown;
}, K extends keyof T> = {
    [_ in K]?: never;
};
export type Incremental<T> = T | {
    [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: {
        input: string;
        output: string;
    };
    String: {
        input: string;
        output: string;
    };
    Boolean: {
        input: boolean;
        output: boolean;
    };
    Int: {
        input: number;
        output: number;
    };
    Float: {
        input: number;
        output: number;
    };
    BigDecimal: {
        input: any;
        output: any;
    };
    BigInt: {
        input: any;
        output: any;
    };
    Bytes: {
        input: any;
        output: any;
    };
};
export type AzuroBetContract = {
    __typename?: 'AzuroBetContract';
    address: Scalars['String']['output'];
    core: CoreContract;
    id: Scalars['ID']['output'];
};
export type AzuroBetContract_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    address?: InputMaybe<Scalars['String']['input']>;
    address_contains?: InputMaybe<Scalars['String']['input']>;
    address_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    address_ends_with?: InputMaybe<Scalars['String']['input']>;
    address_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    address_gt?: InputMaybe<Scalars['String']['input']>;
    address_gte?: InputMaybe<Scalars['String']['input']>;
    address_in?: InputMaybe<Array<Scalars['String']['input']>>;
    address_lt?: InputMaybe<Scalars['String']['input']>;
    address_lte?: InputMaybe<Scalars['String']['input']>;
    address_not?: InputMaybe<Scalars['String']['input']>;
    address_not_contains?: InputMaybe<Scalars['String']['input']>;
    address_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    address_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    address_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    address_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    address_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    address_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    address_starts_with?: InputMaybe<Scalars['String']['input']>;
    address_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    core?: InputMaybe<Scalars['String']['input']>;
    core_?: InputMaybe<CoreContract_Filter>;
    core_contains?: InputMaybe<Scalars['String']['input']>;
    core_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    core_ends_with?: InputMaybe<Scalars['String']['input']>;
    core_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    core_gt?: InputMaybe<Scalars['String']['input']>;
    core_gte?: InputMaybe<Scalars['String']['input']>;
    core_in?: InputMaybe<Array<Scalars['String']['input']>>;
    core_lt?: InputMaybe<Scalars['String']['input']>;
    core_lte?: InputMaybe<Scalars['String']['input']>;
    core_not?: InputMaybe<Scalars['String']['input']>;
    core_not_contains?: InputMaybe<Scalars['String']['input']>;
    core_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    core_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    core_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    core_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    core_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    core_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    core_starts_with?: InputMaybe<Scalars['String']['input']>;
    core_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    id_gt?: InputMaybe<Scalars['ID']['input']>;
    id_gte?: InputMaybe<Scalars['ID']['input']>;
    id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    id_lt?: InputMaybe<Scalars['ID']['input']>;
    id_lte?: InputMaybe<Scalars['ID']['input']>;
    id_not?: InputMaybe<Scalars['ID']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
};
export declare enum AzuroBetContract_OrderBy {
    Address = "address",
    Core = "core",
    Id = "id"
}
export type Bet = {
    __typename?: 'Bet';
    _canceledSubBetsCount: Scalars['Int']['output'];
    _conditionIds: Array<Scalars['BigInt']['output']>;
    _conditions: Array<Condition>;
    _games: Array<Game>;
    _isFreebet: Scalars['Boolean']['output'];
    _lostSubBetsCount: Scalars['Int']['output'];
    _marginsForSettle?: Maybe<Scalars['String']['output']>;
    _oddsDecimals: Scalars['Int']['output'];
    _subBetsCount: Scalars['Int']['output'];
    _tokenDecimals: Scalars['Int']['output'];
    _updatedAt: Scalars['BigInt']['output'];
    _wonSubBetsCount: Scalars['Int']['output'];
    actor: Scalars['String']['output'];
    affiliate?: Maybe<Scalars['String']['output']>;
    amount: Scalars['BigDecimal']['output'];
    /** when the last game from all sub bets starts at + 2h */
    approxSettledAt: Scalars['BigInt']['output'];
    betId: Scalars['BigInt']['output'];
    bettor: Scalars['String']['output'];
    core: CoreContract;
    createdBlockNumber: Scalars['BigInt']['output'];
    createdBlockTimestamp: Scalars['BigInt']['output'];
    createdTxHash: Scalars['String']['output'];
    freebet?: Maybe<Freebet>;
    /** Core contract address + Bet Id */
    id: Scalars['ID']['output'];
    isRedeemable: Scalars['Boolean']['output'];
    isRedeemed: Scalars['Boolean']['output'];
    odds: Scalars['BigDecimal']['output'];
    owner: Scalars['String']['output'];
    payout?: Maybe<Scalars['BigDecimal']['output']>;
    potentialPayout: Scalars['BigDecimal']['output'];
    rawAmount: Scalars['BigInt']['output'];
    rawOdds: Scalars['BigInt']['output'];
    rawPayout?: Maybe<Scalars['BigInt']['output']>;
    rawPotentialPayout: Scalars['BigInt']['output'];
    rawSettledMargin?: Maybe<Scalars['BigInt']['output']>;
    rawSettledOdds?: Maybe<Scalars['BigInt']['output']>;
    redeemedBlockNumber?: Maybe<Scalars['BigInt']['output']>;
    redeemedBlockTimestamp?: Maybe<Scalars['BigInt']['output']>;
    redeemedTxHash?: Maybe<Scalars['String']['output']>;
    resolvedBlockNumber?: Maybe<Scalars['BigInt']['output']>;
    resolvedBlockTimestamp?: Maybe<Scalars['BigInt']['output']>;
    resolvedTxHash?: Maybe<Scalars['String']['output']>;
    result?: Maybe<BetResult>;
    selections: Array<Selection>;
    settledMargin?: Maybe<Scalars['BigDecimal']['output']>;
    settledOdds?: Maybe<Scalars['BigDecimal']['output']>;
    status: BetStatus;
    type: BetType;
};
export type Bet_ConditionsArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Condition_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<Condition_Filter>;
};
export type Bet_GamesArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Game_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<Game_Filter>;
};
export type BetSelectionsArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Selection_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<Selection_Filter>;
};
export type BetMargin = {
    __typename?: 'BetMargin';
    id: Scalars['ID']['output'];
    margins: Scalars['String']['output'];
};
export type BetMargin_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    id?: InputMaybe<Scalars['ID']['input']>;
    id_gt?: InputMaybe<Scalars['ID']['input']>;
    id_gte?: InputMaybe<Scalars['ID']['input']>;
    id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    id_lt?: InputMaybe<Scalars['ID']['input']>;
    id_lte?: InputMaybe<Scalars['ID']['input']>;
    id_not?: InputMaybe<Scalars['ID']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    margins?: InputMaybe<Scalars['String']['input']>;
    margins_contains?: InputMaybe<Scalars['String']['input']>;
    margins_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    margins_ends_with?: InputMaybe<Scalars['String']['input']>;
    margins_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    margins_gt?: InputMaybe<Scalars['String']['input']>;
    margins_gte?: InputMaybe<Scalars['String']['input']>;
    margins_in?: InputMaybe<Array<Scalars['String']['input']>>;
    margins_lt?: InputMaybe<Scalars['String']['input']>;
    margins_lte?: InputMaybe<Scalars['String']['input']>;
    margins_not?: InputMaybe<Scalars['String']['input']>;
    margins_not_contains?: InputMaybe<Scalars['String']['input']>;
    margins_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    margins_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    margins_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    margins_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    margins_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    margins_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    margins_starts_with?: InputMaybe<Scalars['String']['input']>;
    margins_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};
export declare enum BetMargin_OrderBy {
    Id = "id",
    Margins = "margins"
}
export declare enum BetResult {
    Lost = "Lost",
    Won = "Won"
}
export declare enum BetStatus {
    Accepted = "Accepted",
    Canceled = "Canceled",
    Resolved = "Resolved"
}
export declare enum BetType {
    Express = "Express",
    Ordinar = "Ordinar"
}
export type Bet_Filter = {
    _canceledSubBetsCount?: InputMaybe<Scalars['Int']['input']>;
    _canceledSubBetsCount_gt?: InputMaybe<Scalars['Int']['input']>;
    _canceledSubBetsCount_gte?: InputMaybe<Scalars['Int']['input']>;
    _canceledSubBetsCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    _canceledSubBetsCount_lt?: InputMaybe<Scalars['Int']['input']>;
    _canceledSubBetsCount_lte?: InputMaybe<Scalars['Int']['input']>;
    _canceledSubBetsCount_not?: InputMaybe<Scalars['Int']['input']>;
    _canceledSubBetsCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    _conditionIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    _conditionIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    _conditionIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    _conditionIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    _conditionIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    _conditionIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    _conditions?: InputMaybe<Array<Scalars['String']['input']>>;
    _conditions_?: InputMaybe<Condition_Filter>;
    _conditions_contains?: InputMaybe<Array<Scalars['String']['input']>>;
    _conditions_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
    _conditions_not?: InputMaybe<Array<Scalars['String']['input']>>;
    _conditions_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
    _conditions_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
    _games?: InputMaybe<Array<Scalars['String']['input']>>;
    _games_?: InputMaybe<Game_Filter>;
    _games_contains?: InputMaybe<Array<Scalars['String']['input']>>;
    _games_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
    _games_not?: InputMaybe<Array<Scalars['String']['input']>>;
    _games_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
    _games_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
    _isFreebet?: InputMaybe<Scalars['Boolean']['input']>;
    _isFreebet_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    _isFreebet_not?: InputMaybe<Scalars['Boolean']['input']>;
    _isFreebet_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    _lostSubBetsCount?: InputMaybe<Scalars['Int']['input']>;
    _lostSubBetsCount_gt?: InputMaybe<Scalars['Int']['input']>;
    _lostSubBetsCount_gte?: InputMaybe<Scalars['Int']['input']>;
    _lostSubBetsCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    _lostSubBetsCount_lt?: InputMaybe<Scalars['Int']['input']>;
    _lostSubBetsCount_lte?: InputMaybe<Scalars['Int']['input']>;
    _lostSubBetsCount_not?: InputMaybe<Scalars['Int']['input']>;
    _lostSubBetsCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    _marginsForSettle?: InputMaybe<Scalars['String']['input']>;
    _marginsForSettle_contains?: InputMaybe<Scalars['String']['input']>;
    _marginsForSettle_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    _marginsForSettle_ends_with?: InputMaybe<Scalars['String']['input']>;
    _marginsForSettle_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    _marginsForSettle_gt?: InputMaybe<Scalars['String']['input']>;
    _marginsForSettle_gte?: InputMaybe<Scalars['String']['input']>;
    _marginsForSettle_in?: InputMaybe<Array<Scalars['String']['input']>>;
    _marginsForSettle_lt?: InputMaybe<Scalars['String']['input']>;
    _marginsForSettle_lte?: InputMaybe<Scalars['String']['input']>;
    _marginsForSettle_not?: InputMaybe<Scalars['String']['input']>;
    _marginsForSettle_not_contains?: InputMaybe<Scalars['String']['input']>;
    _marginsForSettle_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    _marginsForSettle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    _marginsForSettle_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    _marginsForSettle_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    _marginsForSettle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    _marginsForSettle_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    _marginsForSettle_starts_with?: InputMaybe<Scalars['String']['input']>;
    _marginsForSettle_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    _oddsDecimals?: InputMaybe<Scalars['Int']['input']>;
    _oddsDecimals_gt?: InputMaybe<Scalars['Int']['input']>;
    _oddsDecimals_gte?: InputMaybe<Scalars['Int']['input']>;
    _oddsDecimals_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    _oddsDecimals_lt?: InputMaybe<Scalars['Int']['input']>;
    _oddsDecimals_lte?: InputMaybe<Scalars['Int']['input']>;
    _oddsDecimals_not?: InputMaybe<Scalars['Int']['input']>;
    _oddsDecimals_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    _subBetsCount?: InputMaybe<Scalars['Int']['input']>;
    _subBetsCount_gt?: InputMaybe<Scalars['Int']['input']>;
    _subBetsCount_gte?: InputMaybe<Scalars['Int']['input']>;
    _subBetsCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    _subBetsCount_lt?: InputMaybe<Scalars['Int']['input']>;
    _subBetsCount_lte?: InputMaybe<Scalars['Int']['input']>;
    _subBetsCount_not?: InputMaybe<Scalars['Int']['input']>;
    _subBetsCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    _tokenDecimals?: InputMaybe<Scalars['Int']['input']>;
    _tokenDecimals_gt?: InputMaybe<Scalars['Int']['input']>;
    _tokenDecimals_gte?: InputMaybe<Scalars['Int']['input']>;
    _tokenDecimals_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    _tokenDecimals_lt?: InputMaybe<Scalars['Int']['input']>;
    _tokenDecimals_lte?: InputMaybe<Scalars['Int']['input']>;
    _tokenDecimals_not?: InputMaybe<Scalars['Int']['input']>;
    _tokenDecimals_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    _updatedAt?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    _updatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    _wonSubBetsCount?: InputMaybe<Scalars['Int']['input']>;
    _wonSubBetsCount_gt?: InputMaybe<Scalars['Int']['input']>;
    _wonSubBetsCount_gte?: InputMaybe<Scalars['Int']['input']>;
    _wonSubBetsCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    _wonSubBetsCount_lt?: InputMaybe<Scalars['Int']['input']>;
    _wonSubBetsCount_lte?: InputMaybe<Scalars['Int']['input']>;
    _wonSubBetsCount_not?: InputMaybe<Scalars['Int']['input']>;
    _wonSubBetsCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    actor?: InputMaybe<Scalars['String']['input']>;
    actor_contains?: InputMaybe<Scalars['String']['input']>;
    actor_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    actor_ends_with?: InputMaybe<Scalars['String']['input']>;
    actor_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    actor_gt?: InputMaybe<Scalars['String']['input']>;
    actor_gte?: InputMaybe<Scalars['String']['input']>;
    actor_in?: InputMaybe<Array<Scalars['String']['input']>>;
    actor_lt?: InputMaybe<Scalars['String']['input']>;
    actor_lte?: InputMaybe<Scalars['String']['input']>;
    actor_not?: InputMaybe<Scalars['String']['input']>;
    actor_not_contains?: InputMaybe<Scalars['String']['input']>;
    actor_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    actor_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    actor_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    actor_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    actor_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    actor_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    actor_starts_with?: InputMaybe<Scalars['String']['input']>;
    actor_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    affiliate?: InputMaybe<Scalars['String']['input']>;
    affiliate_contains?: InputMaybe<Scalars['String']['input']>;
    affiliate_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    affiliate_ends_with?: InputMaybe<Scalars['String']['input']>;
    affiliate_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    affiliate_gt?: InputMaybe<Scalars['String']['input']>;
    affiliate_gte?: InputMaybe<Scalars['String']['input']>;
    affiliate_in?: InputMaybe<Array<Scalars['String']['input']>>;
    affiliate_lt?: InputMaybe<Scalars['String']['input']>;
    affiliate_lte?: InputMaybe<Scalars['String']['input']>;
    affiliate_not?: InputMaybe<Scalars['String']['input']>;
    affiliate_not_contains?: InputMaybe<Scalars['String']['input']>;
    affiliate_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    affiliate_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    affiliate_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    affiliate_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    affiliate_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    affiliate_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    affiliate_starts_with?: InputMaybe<Scalars['String']['input']>;
    affiliate_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    amount?: InputMaybe<Scalars['BigDecimal']['input']>;
    amount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
    amount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
    amount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    amount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
    amount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
    amount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
    amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    approxSettledAt?: InputMaybe<Scalars['BigInt']['input']>;
    approxSettledAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
    approxSettledAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
    approxSettledAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    approxSettledAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
    approxSettledAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
    approxSettledAt_not?: InputMaybe<Scalars['BigInt']['input']>;
    approxSettledAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    betId?: InputMaybe<Scalars['BigInt']['input']>;
    betId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    betId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    betId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    betId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    betId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    betId_not?: InputMaybe<Scalars['BigInt']['input']>;
    betId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    bettor?: InputMaybe<Scalars['String']['input']>;
    bettor_contains?: InputMaybe<Scalars['String']['input']>;
    bettor_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    bettor_ends_with?: InputMaybe<Scalars['String']['input']>;
    bettor_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    bettor_gt?: InputMaybe<Scalars['String']['input']>;
    bettor_gte?: InputMaybe<Scalars['String']['input']>;
    bettor_in?: InputMaybe<Array<Scalars['String']['input']>>;
    bettor_lt?: InputMaybe<Scalars['String']['input']>;
    bettor_lte?: InputMaybe<Scalars['String']['input']>;
    bettor_not?: InputMaybe<Scalars['String']['input']>;
    bettor_not_contains?: InputMaybe<Scalars['String']['input']>;
    bettor_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    bettor_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    bettor_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    bettor_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    bettor_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    bettor_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    bettor_starts_with?: InputMaybe<Scalars['String']['input']>;
    bettor_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    core?: InputMaybe<Scalars['String']['input']>;
    core_?: InputMaybe<CoreContract_Filter>;
    core_contains?: InputMaybe<Scalars['String']['input']>;
    core_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    core_ends_with?: InputMaybe<Scalars['String']['input']>;
    core_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    core_gt?: InputMaybe<Scalars['String']['input']>;
    core_gte?: InputMaybe<Scalars['String']['input']>;
    core_in?: InputMaybe<Array<Scalars['String']['input']>>;
    core_lt?: InputMaybe<Scalars['String']['input']>;
    core_lte?: InputMaybe<Scalars['String']['input']>;
    core_not?: InputMaybe<Scalars['String']['input']>;
    core_not_contains?: InputMaybe<Scalars['String']['input']>;
    core_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    core_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    core_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    core_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    core_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    core_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    core_starts_with?: InputMaybe<Scalars['String']['input']>;
    core_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    createdBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    createdBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    createdBlockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    createdBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    createdTxHash?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_contains?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_ends_with?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_gt?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_gte?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
    createdTxHash_lt?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_lte?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not_contains?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    createdTxHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_starts_with?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    freebet?: InputMaybe<Scalars['String']['input']>;
    freebet_?: InputMaybe<Freebet_Filter>;
    freebet_contains?: InputMaybe<Scalars['String']['input']>;
    freebet_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    freebet_ends_with?: InputMaybe<Scalars['String']['input']>;
    freebet_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    freebet_gt?: InputMaybe<Scalars['String']['input']>;
    freebet_gte?: InputMaybe<Scalars['String']['input']>;
    freebet_in?: InputMaybe<Array<Scalars['String']['input']>>;
    freebet_lt?: InputMaybe<Scalars['String']['input']>;
    freebet_lte?: InputMaybe<Scalars['String']['input']>;
    freebet_not?: InputMaybe<Scalars['String']['input']>;
    freebet_not_contains?: InputMaybe<Scalars['String']['input']>;
    freebet_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    freebet_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    freebet_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    freebet_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    freebet_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    freebet_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    freebet_starts_with?: InputMaybe<Scalars['String']['input']>;
    freebet_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    id_gt?: InputMaybe<Scalars['ID']['input']>;
    id_gte?: InputMaybe<Scalars['ID']['input']>;
    id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    id_lt?: InputMaybe<Scalars['ID']['input']>;
    id_lte?: InputMaybe<Scalars['ID']['input']>;
    id_not?: InputMaybe<Scalars['ID']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    isRedeemable?: InputMaybe<Scalars['Boolean']['input']>;
    isRedeemable_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    isRedeemable_not?: InputMaybe<Scalars['Boolean']['input']>;
    isRedeemable_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    isRedeemed?: InputMaybe<Scalars['Boolean']['input']>;
    isRedeemed_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    isRedeemed_not?: InputMaybe<Scalars['Boolean']['input']>;
    isRedeemed_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    odds?: InputMaybe<Scalars['BigDecimal']['input']>;
    odds_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
    odds_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
    odds_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    odds_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
    odds_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
    odds_not?: InputMaybe<Scalars['BigDecimal']['input']>;
    odds_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    owner?: InputMaybe<Scalars['String']['input']>;
    owner_contains?: InputMaybe<Scalars['String']['input']>;
    owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_ends_with?: InputMaybe<Scalars['String']['input']>;
    owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_gt?: InputMaybe<Scalars['String']['input']>;
    owner_gte?: InputMaybe<Scalars['String']['input']>;
    owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
    owner_lt?: InputMaybe<Scalars['String']['input']>;
    owner_lte?: InputMaybe<Scalars['String']['input']>;
    owner_not?: InputMaybe<Scalars['String']['input']>;
    owner_not_contains?: InputMaybe<Scalars['String']['input']>;
    owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_starts_with?: InputMaybe<Scalars['String']['input']>;
    owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    payout?: InputMaybe<Scalars['BigDecimal']['input']>;
    payout_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
    payout_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
    payout_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    payout_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
    payout_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
    payout_not?: InputMaybe<Scalars['BigDecimal']['input']>;
    payout_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    potentialPayout?: InputMaybe<Scalars['BigDecimal']['input']>;
    potentialPayout_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
    potentialPayout_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
    potentialPayout_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    potentialPayout_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
    potentialPayout_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
    potentialPayout_not?: InputMaybe<Scalars['BigDecimal']['input']>;
    potentialPayout_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    rawAmount?: InputMaybe<Scalars['BigInt']['input']>;
    rawAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    rawAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    rawAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    rawAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    rawAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
    rawAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawOdds?: InputMaybe<Scalars['BigInt']['input']>;
    rawOdds_gt?: InputMaybe<Scalars['BigInt']['input']>;
    rawOdds_gte?: InputMaybe<Scalars['BigInt']['input']>;
    rawOdds_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawOdds_lt?: InputMaybe<Scalars['BigInt']['input']>;
    rawOdds_lte?: InputMaybe<Scalars['BigInt']['input']>;
    rawOdds_not?: InputMaybe<Scalars['BigInt']['input']>;
    rawOdds_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawPayout?: InputMaybe<Scalars['BigInt']['input']>;
    rawPayout_gt?: InputMaybe<Scalars['BigInt']['input']>;
    rawPayout_gte?: InputMaybe<Scalars['BigInt']['input']>;
    rawPayout_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawPayout_lt?: InputMaybe<Scalars['BigInt']['input']>;
    rawPayout_lte?: InputMaybe<Scalars['BigInt']['input']>;
    rawPayout_not?: InputMaybe<Scalars['BigInt']['input']>;
    rawPayout_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawPotentialPayout?: InputMaybe<Scalars['BigInt']['input']>;
    rawPotentialPayout_gt?: InputMaybe<Scalars['BigInt']['input']>;
    rawPotentialPayout_gte?: InputMaybe<Scalars['BigInt']['input']>;
    rawPotentialPayout_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawPotentialPayout_lt?: InputMaybe<Scalars['BigInt']['input']>;
    rawPotentialPayout_lte?: InputMaybe<Scalars['BigInt']['input']>;
    rawPotentialPayout_not?: InputMaybe<Scalars['BigInt']['input']>;
    rawPotentialPayout_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawSettledMargin?: InputMaybe<Scalars['BigInt']['input']>;
    rawSettledMargin_gt?: InputMaybe<Scalars['BigInt']['input']>;
    rawSettledMargin_gte?: InputMaybe<Scalars['BigInt']['input']>;
    rawSettledMargin_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawSettledMargin_lt?: InputMaybe<Scalars['BigInt']['input']>;
    rawSettledMargin_lte?: InputMaybe<Scalars['BigInt']['input']>;
    rawSettledMargin_not?: InputMaybe<Scalars['BigInt']['input']>;
    rawSettledMargin_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawSettledOdds?: InputMaybe<Scalars['BigInt']['input']>;
    rawSettledOdds_gt?: InputMaybe<Scalars['BigInt']['input']>;
    rawSettledOdds_gte?: InputMaybe<Scalars['BigInt']['input']>;
    rawSettledOdds_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawSettledOdds_lt?: InputMaybe<Scalars['BigInt']['input']>;
    rawSettledOdds_lte?: InputMaybe<Scalars['BigInt']['input']>;
    rawSettledOdds_not?: InputMaybe<Scalars['BigInt']['input']>;
    rawSettledOdds_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    redeemedBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    redeemedBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    redeemedBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    redeemedBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    redeemedBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    redeemedBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    redeemedBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    redeemedBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    redeemedBlockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    redeemedBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    redeemedBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    redeemedBlockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    redeemedBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    redeemedBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    redeemedBlockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    redeemedBlockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    redeemedTxHash?: InputMaybe<Scalars['String']['input']>;
    redeemedTxHash_contains?: InputMaybe<Scalars['String']['input']>;
    redeemedTxHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    redeemedTxHash_ends_with?: InputMaybe<Scalars['String']['input']>;
    redeemedTxHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    redeemedTxHash_gt?: InputMaybe<Scalars['String']['input']>;
    redeemedTxHash_gte?: InputMaybe<Scalars['String']['input']>;
    redeemedTxHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
    redeemedTxHash_lt?: InputMaybe<Scalars['String']['input']>;
    redeemedTxHash_lte?: InputMaybe<Scalars['String']['input']>;
    redeemedTxHash_not?: InputMaybe<Scalars['String']['input']>;
    redeemedTxHash_not_contains?: InputMaybe<Scalars['String']['input']>;
    redeemedTxHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    redeemedTxHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    redeemedTxHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    redeemedTxHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    redeemedTxHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    redeemedTxHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    redeemedTxHash_starts_with?: InputMaybe<Scalars['String']['input']>;
    redeemedTxHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    resolvedBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    resolvedBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    resolvedBlockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    resolvedBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    resolvedTxHash?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_contains?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_ends_with?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_gt?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_gte?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
    resolvedTxHash_lt?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_lte?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_not?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_not_contains?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    resolvedTxHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_starts_with?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    result?: InputMaybe<BetResult>;
    result_in?: InputMaybe<Array<BetResult>>;
    result_not?: InputMaybe<BetResult>;
    result_not_in?: InputMaybe<Array<BetResult>>;
    selections_?: InputMaybe<Selection_Filter>;
    settledMargin?: InputMaybe<Scalars['BigDecimal']['input']>;
    settledMargin_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
    settledMargin_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
    settledMargin_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    settledMargin_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
    settledMargin_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
    settledMargin_not?: InputMaybe<Scalars['BigDecimal']['input']>;
    settledMargin_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    settledOdds?: InputMaybe<Scalars['BigDecimal']['input']>;
    settledOdds_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
    settledOdds_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
    settledOdds_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    settledOdds_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
    settledOdds_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
    settledOdds_not?: InputMaybe<Scalars['BigDecimal']['input']>;
    settledOdds_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    status?: InputMaybe<BetStatus>;
    status_in?: InputMaybe<Array<BetStatus>>;
    status_not?: InputMaybe<BetStatus>;
    status_not_in?: InputMaybe<Array<BetStatus>>;
    type?: InputMaybe<BetType>;
    type_in?: InputMaybe<Array<BetType>>;
    type_not?: InputMaybe<BetType>;
    type_not_in?: InputMaybe<Array<BetType>>;
};
export declare enum Bet_OrderBy {
    CanceledSubBetsCount = "_canceledSubBetsCount",
    ConditionIds = "_conditionIds",
    Conditions = "_conditions",
    Games = "_games",
    IsFreebet = "_isFreebet",
    LostSubBetsCount = "_lostSubBetsCount",
    MarginsForSettle = "_marginsForSettle",
    OddsDecimals = "_oddsDecimals",
    SubBetsCount = "_subBetsCount",
    TokenDecimals = "_tokenDecimals",
    UpdatedAt = "_updatedAt",
    WonSubBetsCount = "_wonSubBetsCount",
    Actor = "actor",
    Affiliate = "affiliate",
    Amount = "amount",
    ApproxSettledAt = "approxSettledAt",
    BetId = "betId",
    Bettor = "bettor",
    Core = "core",
    CreatedBlockNumber = "createdBlockNumber",
    CreatedBlockTimestamp = "createdBlockTimestamp",
    CreatedTxHash = "createdTxHash",
    Freebet = "freebet",
    Id = "id",
    IsRedeemable = "isRedeemable",
    IsRedeemed = "isRedeemed",
    Odds = "odds",
    Owner = "owner",
    Payout = "payout",
    PotentialPayout = "potentialPayout",
    RawAmount = "rawAmount",
    RawOdds = "rawOdds",
    RawPayout = "rawPayout",
    RawPotentialPayout = "rawPotentialPayout",
    RawSettledMargin = "rawSettledMargin",
    RawSettledOdds = "rawSettledOdds",
    RedeemedBlockNumber = "redeemedBlockNumber",
    RedeemedBlockTimestamp = "redeemedBlockTimestamp",
    RedeemedTxHash = "redeemedTxHash",
    ResolvedBlockNumber = "resolvedBlockNumber",
    ResolvedBlockTimestamp = "resolvedBlockTimestamp",
    ResolvedTxHash = "resolvedTxHash",
    Result = "result",
    Selections = "selections",
    SettledMargin = "settledMargin",
    SettledOdds = "settledOdds",
    Status = "status",
    Type = "type"
}
export type Bettor = {
    __typename?: 'Bettor';
    _updatedAt: Scalars['BigInt']['output'];
    address: Scalars['String']['output'];
    affiliate: Scalars['String']['output'];
    avgBetAmount: Scalars['BigDecimal']['output'];
    betsCount: Scalars['Int']['output'];
    biggestBetAmount: Scalars['BigDecimal']['output'];
    biggestPayout: Scalars['BigDecimal']['output'];
    canceledBetsCount: Scalars['Int']['output'];
    /** Bettor entity Id - LP Contract address + affiliate address + bettor address */
    id: Scalars['ID']['output'];
    inBets: Scalars['BigDecimal']['output'];
    lostBetsCount: Scalars['Int']['output'];
    pnl: Scalars['BigDecimal']['output'];
    rawAvgBetAmount: Scalars['BigInt']['output'];
    rawBiggestBetAmount: Scalars['BigInt']['output'];
    rawBiggestPayout: Scalars['BigInt']['output'];
    rawInBets: Scalars['BigInt']['output'];
    rawToPayout: Scalars['BigInt']['output'];
    rawTotalPayout: Scalars['BigInt']['output'];
    rawTotalProfit: Scalars['BigInt']['output'];
    rawTurnover: Scalars['BigInt']['output'];
    redeemedBetsCount: Scalars['Int']['output'];
    settledBetsCount: Scalars['Int']['output'];
    toPayout: Scalars['BigDecimal']['output'];
    totalPayout: Scalars['BigDecimal']['output'];
    totalProfit: Scalars['BigDecimal']['output'];
    turnover: Scalars['BigDecimal']['output'];
    wonBetsCount: Scalars['Int']['output'];
};
export type Bettor_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    _updatedAt?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    _updatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    address?: InputMaybe<Scalars['String']['input']>;
    address_contains?: InputMaybe<Scalars['String']['input']>;
    address_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    address_ends_with?: InputMaybe<Scalars['String']['input']>;
    address_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    address_gt?: InputMaybe<Scalars['String']['input']>;
    address_gte?: InputMaybe<Scalars['String']['input']>;
    address_in?: InputMaybe<Array<Scalars['String']['input']>>;
    address_lt?: InputMaybe<Scalars['String']['input']>;
    address_lte?: InputMaybe<Scalars['String']['input']>;
    address_not?: InputMaybe<Scalars['String']['input']>;
    address_not_contains?: InputMaybe<Scalars['String']['input']>;
    address_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    address_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    address_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    address_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    address_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    address_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    address_starts_with?: InputMaybe<Scalars['String']['input']>;
    address_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    affiliate?: InputMaybe<Scalars['String']['input']>;
    affiliate_contains?: InputMaybe<Scalars['String']['input']>;
    affiliate_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    affiliate_ends_with?: InputMaybe<Scalars['String']['input']>;
    affiliate_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    affiliate_gt?: InputMaybe<Scalars['String']['input']>;
    affiliate_gte?: InputMaybe<Scalars['String']['input']>;
    affiliate_in?: InputMaybe<Array<Scalars['String']['input']>>;
    affiliate_lt?: InputMaybe<Scalars['String']['input']>;
    affiliate_lte?: InputMaybe<Scalars['String']['input']>;
    affiliate_not?: InputMaybe<Scalars['String']['input']>;
    affiliate_not_contains?: InputMaybe<Scalars['String']['input']>;
    affiliate_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    affiliate_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    affiliate_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    affiliate_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    affiliate_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    affiliate_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    affiliate_starts_with?: InputMaybe<Scalars['String']['input']>;
    affiliate_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    avgBetAmount?: InputMaybe<Scalars['BigDecimal']['input']>;
    avgBetAmount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
    avgBetAmount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
    avgBetAmount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    avgBetAmount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
    avgBetAmount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
    avgBetAmount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
    avgBetAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    betsCount?: InputMaybe<Scalars['Int']['input']>;
    betsCount_gt?: InputMaybe<Scalars['Int']['input']>;
    betsCount_gte?: InputMaybe<Scalars['Int']['input']>;
    betsCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    betsCount_lt?: InputMaybe<Scalars['Int']['input']>;
    betsCount_lte?: InputMaybe<Scalars['Int']['input']>;
    betsCount_not?: InputMaybe<Scalars['Int']['input']>;
    betsCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    biggestBetAmount?: InputMaybe<Scalars['BigDecimal']['input']>;
    biggestBetAmount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
    biggestBetAmount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
    biggestBetAmount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    biggestBetAmount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
    biggestBetAmount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
    biggestBetAmount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
    biggestBetAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    biggestPayout?: InputMaybe<Scalars['BigDecimal']['input']>;
    biggestPayout_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
    biggestPayout_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
    biggestPayout_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    biggestPayout_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
    biggestPayout_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
    biggestPayout_not?: InputMaybe<Scalars['BigDecimal']['input']>;
    biggestPayout_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    canceledBetsCount?: InputMaybe<Scalars['Int']['input']>;
    canceledBetsCount_gt?: InputMaybe<Scalars['Int']['input']>;
    canceledBetsCount_gte?: InputMaybe<Scalars['Int']['input']>;
    canceledBetsCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    canceledBetsCount_lt?: InputMaybe<Scalars['Int']['input']>;
    canceledBetsCount_lte?: InputMaybe<Scalars['Int']['input']>;
    canceledBetsCount_not?: InputMaybe<Scalars['Int']['input']>;
    canceledBetsCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    id?: InputMaybe<Scalars['ID']['input']>;
    id_gt?: InputMaybe<Scalars['ID']['input']>;
    id_gte?: InputMaybe<Scalars['ID']['input']>;
    id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    id_lt?: InputMaybe<Scalars['ID']['input']>;
    id_lte?: InputMaybe<Scalars['ID']['input']>;
    id_not?: InputMaybe<Scalars['ID']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    inBets?: InputMaybe<Scalars['BigDecimal']['input']>;
    inBets_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
    inBets_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
    inBets_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    inBets_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
    inBets_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
    inBets_not?: InputMaybe<Scalars['BigDecimal']['input']>;
    inBets_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    lostBetsCount?: InputMaybe<Scalars['Int']['input']>;
    lostBetsCount_gt?: InputMaybe<Scalars['Int']['input']>;
    lostBetsCount_gte?: InputMaybe<Scalars['Int']['input']>;
    lostBetsCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    lostBetsCount_lt?: InputMaybe<Scalars['Int']['input']>;
    lostBetsCount_lte?: InputMaybe<Scalars['Int']['input']>;
    lostBetsCount_not?: InputMaybe<Scalars['Int']['input']>;
    lostBetsCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    pnl?: InputMaybe<Scalars['BigDecimal']['input']>;
    pnl_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
    pnl_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
    pnl_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    pnl_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
    pnl_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
    pnl_not?: InputMaybe<Scalars['BigDecimal']['input']>;
    pnl_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    rawAvgBetAmount?: InputMaybe<Scalars['BigInt']['input']>;
    rawAvgBetAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    rawAvgBetAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    rawAvgBetAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawAvgBetAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    rawAvgBetAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    rawAvgBetAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
    rawAvgBetAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawBiggestBetAmount?: InputMaybe<Scalars['BigInt']['input']>;
    rawBiggestBetAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    rawBiggestBetAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    rawBiggestBetAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawBiggestBetAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    rawBiggestBetAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    rawBiggestBetAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
    rawBiggestBetAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawBiggestPayout?: InputMaybe<Scalars['BigInt']['input']>;
    rawBiggestPayout_gt?: InputMaybe<Scalars['BigInt']['input']>;
    rawBiggestPayout_gte?: InputMaybe<Scalars['BigInt']['input']>;
    rawBiggestPayout_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawBiggestPayout_lt?: InputMaybe<Scalars['BigInt']['input']>;
    rawBiggestPayout_lte?: InputMaybe<Scalars['BigInt']['input']>;
    rawBiggestPayout_not?: InputMaybe<Scalars['BigInt']['input']>;
    rawBiggestPayout_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawInBets?: InputMaybe<Scalars['BigInt']['input']>;
    rawInBets_gt?: InputMaybe<Scalars['BigInt']['input']>;
    rawInBets_gte?: InputMaybe<Scalars['BigInt']['input']>;
    rawInBets_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawInBets_lt?: InputMaybe<Scalars['BigInt']['input']>;
    rawInBets_lte?: InputMaybe<Scalars['BigInt']['input']>;
    rawInBets_not?: InputMaybe<Scalars['BigInt']['input']>;
    rawInBets_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawToPayout?: InputMaybe<Scalars['BigInt']['input']>;
    rawToPayout_gt?: InputMaybe<Scalars['BigInt']['input']>;
    rawToPayout_gte?: InputMaybe<Scalars['BigInt']['input']>;
    rawToPayout_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawToPayout_lt?: InputMaybe<Scalars['BigInt']['input']>;
    rawToPayout_lte?: InputMaybe<Scalars['BigInt']['input']>;
    rawToPayout_not?: InputMaybe<Scalars['BigInt']['input']>;
    rawToPayout_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawTotalPayout?: InputMaybe<Scalars['BigInt']['input']>;
    rawTotalPayout_gt?: InputMaybe<Scalars['BigInt']['input']>;
    rawTotalPayout_gte?: InputMaybe<Scalars['BigInt']['input']>;
    rawTotalPayout_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawTotalPayout_lt?: InputMaybe<Scalars['BigInt']['input']>;
    rawTotalPayout_lte?: InputMaybe<Scalars['BigInt']['input']>;
    rawTotalPayout_not?: InputMaybe<Scalars['BigInt']['input']>;
    rawTotalPayout_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawTotalProfit?: InputMaybe<Scalars['BigInt']['input']>;
    rawTotalProfit_gt?: InputMaybe<Scalars['BigInt']['input']>;
    rawTotalProfit_gte?: InputMaybe<Scalars['BigInt']['input']>;
    rawTotalProfit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawTotalProfit_lt?: InputMaybe<Scalars['BigInt']['input']>;
    rawTotalProfit_lte?: InputMaybe<Scalars['BigInt']['input']>;
    rawTotalProfit_not?: InputMaybe<Scalars['BigInt']['input']>;
    rawTotalProfit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawTurnover?: InputMaybe<Scalars['BigInt']['input']>;
    rawTurnover_gt?: InputMaybe<Scalars['BigInt']['input']>;
    rawTurnover_gte?: InputMaybe<Scalars['BigInt']['input']>;
    rawTurnover_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawTurnover_lt?: InputMaybe<Scalars['BigInt']['input']>;
    rawTurnover_lte?: InputMaybe<Scalars['BigInt']['input']>;
    rawTurnover_not?: InputMaybe<Scalars['BigInt']['input']>;
    rawTurnover_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    redeemedBetsCount?: InputMaybe<Scalars['Int']['input']>;
    redeemedBetsCount_gt?: InputMaybe<Scalars['Int']['input']>;
    redeemedBetsCount_gte?: InputMaybe<Scalars['Int']['input']>;
    redeemedBetsCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    redeemedBetsCount_lt?: InputMaybe<Scalars['Int']['input']>;
    redeemedBetsCount_lte?: InputMaybe<Scalars['Int']['input']>;
    redeemedBetsCount_not?: InputMaybe<Scalars['Int']['input']>;
    redeemedBetsCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    settledBetsCount?: InputMaybe<Scalars['Int']['input']>;
    settledBetsCount_gt?: InputMaybe<Scalars['Int']['input']>;
    settledBetsCount_gte?: InputMaybe<Scalars['Int']['input']>;
    settledBetsCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    settledBetsCount_lt?: InputMaybe<Scalars['Int']['input']>;
    settledBetsCount_lte?: InputMaybe<Scalars['Int']['input']>;
    settledBetsCount_not?: InputMaybe<Scalars['Int']['input']>;
    settledBetsCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    toPayout?: InputMaybe<Scalars['BigDecimal']['input']>;
    toPayout_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
    toPayout_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
    toPayout_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    toPayout_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
    toPayout_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
    toPayout_not?: InputMaybe<Scalars['BigDecimal']['input']>;
    toPayout_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    totalPayout?: InputMaybe<Scalars['BigDecimal']['input']>;
    totalPayout_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
    totalPayout_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
    totalPayout_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    totalPayout_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
    totalPayout_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
    totalPayout_not?: InputMaybe<Scalars['BigDecimal']['input']>;
    totalPayout_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    totalProfit?: InputMaybe<Scalars['BigDecimal']['input']>;
    totalProfit_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
    totalProfit_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
    totalProfit_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    totalProfit_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
    totalProfit_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
    totalProfit_not?: InputMaybe<Scalars['BigDecimal']['input']>;
    totalProfit_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    turnover?: InputMaybe<Scalars['BigDecimal']['input']>;
    turnover_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
    turnover_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
    turnover_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    turnover_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
    turnover_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
    turnover_not?: InputMaybe<Scalars['BigDecimal']['input']>;
    turnover_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    wonBetsCount?: InputMaybe<Scalars['Int']['input']>;
    wonBetsCount_gt?: InputMaybe<Scalars['Int']['input']>;
    wonBetsCount_gte?: InputMaybe<Scalars['Int']['input']>;
    wonBetsCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    wonBetsCount_lt?: InputMaybe<Scalars['Int']['input']>;
    wonBetsCount_lte?: InputMaybe<Scalars['Int']['input']>;
    wonBetsCount_not?: InputMaybe<Scalars['Int']['input']>;
    wonBetsCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};
export declare enum Bettor_OrderBy {
    UpdatedAt = "_updatedAt",
    Address = "address",
    Affiliate = "affiliate",
    AvgBetAmount = "avgBetAmount",
    BetsCount = "betsCount",
    BiggestBetAmount = "biggestBetAmount",
    BiggestPayout = "biggestPayout",
    CanceledBetsCount = "canceledBetsCount",
    Id = "id",
    InBets = "inBets",
    LostBetsCount = "lostBetsCount",
    Pnl = "pnl",
    RawAvgBetAmount = "rawAvgBetAmount",
    RawBiggestBetAmount = "rawBiggestBetAmount",
    RawBiggestPayout = "rawBiggestPayout",
    RawInBets = "rawInBets",
    RawToPayout = "rawToPayout",
    RawTotalPayout = "rawTotalPayout",
    RawTotalProfit = "rawTotalProfit",
    RawTurnover = "rawTurnover",
    RedeemedBetsCount = "redeemedBetsCount",
    SettledBetsCount = "settledBetsCount",
    ToPayout = "toPayout",
    TotalPayout = "totalPayout",
    TotalProfit = "totalProfit",
    Turnover = "turnover",
    WonBetsCount = "wonBetsCount"
}
export type BlockChangedFilter = {
    number_gte: Scalars['Int']['input'];
};
export type Block_Height = {
    hash?: InputMaybe<Scalars['Bytes']['input']>;
    number?: InputMaybe<Scalars['Int']['input']>;
    number_gte?: InputMaybe<Scalars['Int']['input']>;
};
export type Condition = {
    __typename?: 'Condition';
    _updatedAt: Scalars['BigInt']['output'];
    _winningOutcomesCount: Scalars['Int']['output'];
    conditionId: Scalars['BigInt']['output'];
    core: CoreContract;
    coreAddress: Scalars['String']['output'];
    createdBlockNumber: Scalars['BigInt']['output'];
    createdBlockTimestamp: Scalars['BigInt']['output'];
    createdTxHash: Scalars['String']['output'];
    game: Game;
    /** Core Contract address + Condition Id */
    id: Scalars['ID']['output'];
    internalStartsAt?: Maybe<Scalars['BigInt']['output']>;
    isExpressForbidden: Scalars['Boolean']['output'];
    margin: Scalars['BigInt']['output'];
    outcomes: Array<Outcome>;
    outcomesIds?: Maybe<Array<Scalars['BigInt']['output']>>;
    provider: Scalars['BigInt']['output'];
    reinforcement: Scalars['BigInt']['output'];
    resolvedBlockNumber?: Maybe<Scalars['BigInt']['output']>;
    resolvedBlockTimestamp?: Maybe<Scalars['BigInt']['output']>;
    resolvedTxHash?: Maybe<Scalars['String']['output']>;
    status: ConditionStatus;
    turnover: Scalars['BigInt']['output'];
    wonOutcomeIds?: Maybe<Array<Scalars['BigInt']['output']>>;
    wonOutcomes?: Maybe<Array<Outcome>>;
};
export type ConditionOutcomesArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Outcome_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<Outcome_Filter>;
};
export type ConditionWonOutcomesArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Outcome_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<Outcome_Filter>;
};
export declare enum ConditionStatus {
    Canceled = "Canceled",
    Created = "Created",
    Paused = "Paused",
    Resolved = "Resolved"
}
export type Condition_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    _updatedAt?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    _updatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    _winningOutcomesCount?: InputMaybe<Scalars['Int']['input']>;
    _winningOutcomesCount_gt?: InputMaybe<Scalars['Int']['input']>;
    _winningOutcomesCount_gte?: InputMaybe<Scalars['Int']['input']>;
    _winningOutcomesCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    _winningOutcomesCount_lt?: InputMaybe<Scalars['Int']['input']>;
    _winningOutcomesCount_lte?: InputMaybe<Scalars['Int']['input']>;
    _winningOutcomesCount_not?: InputMaybe<Scalars['Int']['input']>;
    _winningOutcomesCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    conditionId?: InputMaybe<Scalars['BigInt']['input']>;
    conditionId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    conditionId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    conditionId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    conditionId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    conditionId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    conditionId_not?: InputMaybe<Scalars['BigInt']['input']>;
    conditionId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    core?: InputMaybe<Scalars['String']['input']>;
    coreAddress?: InputMaybe<Scalars['String']['input']>;
    coreAddress_contains?: InputMaybe<Scalars['String']['input']>;
    coreAddress_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    coreAddress_ends_with?: InputMaybe<Scalars['String']['input']>;
    coreAddress_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    coreAddress_gt?: InputMaybe<Scalars['String']['input']>;
    coreAddress_gte?: InputMaybe<Scalars['String']['input']>;
    coreAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
    coreAddress_lt?: InputMaybe<Scalars['String']['input']>;
    coreAddress_lte?: InputMaybe<Scalars['String']['input']>;
    coreAddress_not?: InputMaybe<Scalars['String']['input']>;
    coreAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
    coreAddress_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    coreAddress_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    coreAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    coreAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    coreAddress_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    coreAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    coreAddress_starts_with?: InputMaybe<Scalars['String']['input']>;
    coreAddress_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    core_?: InputMaybe<CoreContract_Filter>;
    core_contains?: InputMaybe<Scalars['String']['input']>;
    core_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    core_ends_with?: InputMaybe<Scalars['String']['input']>;
    core_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    core_gt?: InputMaybe<Scalars['String']['input']>;
    core_gte?: InputMaybe<Scalars['String']['input']>;
    core_in?: InputMaybe<Array<Scalars['String']['input']>>;
    core_lt?: InputMaybe<Scalars['String']['input']>;
    core_lte?: InputMaybe<Scalars['String']['input']>;
    core_not?: InputMaybe<Scalars['String']['input']>;
    core_not_contains?: InputMaybe<Scalars['String']['input']>;
    core_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    core_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    core_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    core_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    core_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    core_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    core_starts_with?: InputMaybe<Scalars['String']['input']>;
    core_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    createdBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    createdBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    createdBlockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    createdBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    createdTxHash?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_contains?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_ends_with?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_gt?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_gte?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
    createdTxHash_lt?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_lte?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not_contains?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    createdTxHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_starts_with?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    game?: InputMaybe<Scalars['String']['input']>;
    game_?: InputMaybe<Game_Filter>;
    game_contains?: InputMaybe<Scalars['String']['input']>;
    game_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    game_ends_with?: InputMaybe<Scalars['String']['input']>;
    game_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    game_gt?: InputMaybe<Scalars['String']['input']>;
    game_gte?: InputMaybe<Scalars['String']['input']>;
    game_in?: InputMaybe<Array<Scalars['String']['input']>>;
    game_lt?: InputMaybe<Scalars['String']['input']>;
    game_lte?: InputMaybe<Scalars['String']['input']>;
    game_not?: InputMaybe<Scalars['String']['input']>;
    game_not_contains?: InputMaybe<Scalars['String']['input']>;
    game_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    game_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    game_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    game_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    game_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    game_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    game_starts_with?: InputMaybe<Scalars['String']['input']>;
    game_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    id_gt?: InputMaybe<Scalars['ID']['input']>;
    id_gte?: InputMaybe<Scalars['ID']['input']>;
    id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    id_lt?: InputMaybe<Scalars['ID']['input']>;
    id_lte?: InputMaybe<Scalars['ID']['input']>;
    id_not?: InputMaybe<Scalars['ID']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    internalStartsAt?: InputMaybe<Scalars['BigInt']['input']>;
    internalStartsAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
    internalStartsAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
    internalStartsAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    internalStartsAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
    internalStartsAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
    internalStartsAt_not?: InputMaybe<Scalars['BigInt']['input']>;
    internalStartsAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    isExpressForbidden?: InputMaybe<Scalars['Boolean']['input']>;
    isExpressForbidden_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    isExpressForbidden_not?: InputMaybe<Scalars['Boolean']['input']>;
    isExpressForbidden_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    margin?: InputMaybe<Scalars['BigInt']['input']>;
    margin_gt?: InputMaybe<Scalars['BigInt']['input']>;
    margin_gte?: InputMaybe<Scalars['BigInt']['input']>;
    margin_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    margin_lt?: InputMaybe<Scalars['BigInt']['input']>;
    margin_lte?: InputMaybe<Scalars['BigInt']['input']>;
    margin_not?: InputMaybe<Scalars['BigInt']['input']>;
    margin_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    outcomesIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    outcomesIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    outcomesIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    outcomesIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    outcomesIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    outcomesIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    outcomes_?: InputMaybe<Outcome_Filter>;
    provider?: InputMaybe<Scalars['BigInt']['input']>;
    provider_gt?: InputMaybe<Scalars['BigInt']['input']>;
    provider_gte?: InputMaybe<Scalars['BigInt']['input']>;
    provider_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    provider_lt?: InputMaybe<Scalars['BigInt']['input']>;
    provider_lte?: InputMaybe<Scalars['BigInt']['input']>;
    provider_not?: InputMaybe<Scalars['BigInt']['input']>;
    provider_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    reinforcement?: InputMaybe<Scalars['BigInt']['input']>;
    reinforcement_gt?: InputMaybe<Scalars['BigInt']['input']>;
    reinforcement_gte?: InputMaybe<Scalars['BigInt']['input']>;
    reinforcement_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    reinforcement_lt?: InputMaybe<Scalars['BigInt']['input']>;
    reinforcement_lte?: InputMaybe<Scalars['BigInt']['input']>;
    reinforcement_not?: InputMaybe<Scalars['BigInt']['input']>;
    reinforcement_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    resolvedBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    resolvedBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    resolvedBlockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    resolvedBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    resolvedTxHash?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_contains?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_ends_with?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_gt?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_gte?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
    resolvedTxHash_lt?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_lte?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_not?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_not_contains?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    resolvedTxHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_starts_with?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    status?: InputMaybe<ConditionStatus>;
    status_in?: InputMaybe<Array<ConditionStatus>>;
    status_not?: InputMaybe<ConditionStatus>;
    status_not_in?: InputMaybe<Array<ConditionStatus>>;
    turnover?: InputMaybe<Scalars['BigInt']['input']>;
    turnover_gt?: InputMaybe<Scalars['BigInt']['input']>;
    turnover_gte?: InputMaybe<Scalars['BigInt']['input']>;
    turnover_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    turnover_lt?: InputMaybe<Scalars['BigInt']['input']>;
    turnover_lte?: InputMaybe<Scalars['BigInt']['input']>;
    turnover_not?: InputMaybe<Scalars['BigInt']['input']>;
    turnover_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    wonOutcomeIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    wonOutcomeIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    wonOutcomeIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    wonOutcomeIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    wonOutcomeIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    wonOutcomeIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    wonOutcomes?: InputMaybe<Array<Scalars['String']['input']>>;
    wonOutcomes_?: InputMaybe<Outcome_Filter>;
    wonOutcomes_contains?: InputMaybe<Array<Scalars['String']['input']>>;
    wonOutcomes_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
    wonOutcomes_not?: InputMaybe<Array<Scalars['String']['input']>>;
    wonOutcomes_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
    wonOutcomes_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
};
export declare enum Condition_OrderBy {
    UpdatedAt = "_updatedAt",
    WinningOutcomesCount = "_winningOutcomesCount",
    ConditionId = "conditionId",
    Core = "core",
    CoreAddress = "coreAddress",
    CreatedBlockNumber = "createdBlockNumber",
    CreatedBlockTimestamp = "createdBlockTimestamp",
    CreatedTxHash = "createdTxHash",
    Game = "game",
    Id = "id",
    InternalStartsAt = "internalStartsAt",
    IsExpressForbidden = "isExpressForbidden",
    Margin = "margin",
    Outcomes = "outcomes",
    OutcomesIds = "outcomesIds",
    Provider = "provider",
    Reinforcement = "reinforcement",
    ResolvedBlockNumber = "resolvedBlockNumber",
    ResolvedBlockTimestamp = "resolvedBlockTimestamp",
    ResolvedTxHash = "resolvedTxHash",
    Status = "status",
    Turnover = "turnover",
    WonOutcomeIds = "wonOutcomeIds",
    WonOutcomes = "wonOutcomes"
}
export type CoreContract = {
    __typename?: 'CoreContract';
    address: Scalars['String']['output'];
    id: Scalars['ID']['output'];
    liquidityPool: LiquidityPoolContract;
    type: Scalars['String']['output'];
};
export type CoreContract_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    address?: InputMaybe<Scalars['String']['input']>;
    address_contains?: InputMaybe<Scalars['String']['input']>;
    address_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    address_ends_with?: InputMaybe<Scalars['String']['input']>;
    address_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    address_gt?: InputMaybe<Scalars['String']['input']>;
    address_gte?: InputMaybe<Scalars['String']['input']>;
    address_in?: InputMaybe<Array<Scalars['String']['input']>>;
    address_lt?: InputMaybe<Scalars['String']['input']>;
    address_lte?: InputMaybe<Scalars['String']['input']>;
    address_not?: InputMaybe<Scalars['String']['input']>;
    address_not_contains?: InputMaybe<Scalars['String']['input']>;
    address_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    address_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    address_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    address_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    address_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    address_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    address_starts_with?: InputMaybe<Scalars['String']['input']>;
    address_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    id_gt?: InputMaybe<Scalars['ID']['input']>;
    id_gte?: InputMaybe<Scalars['ID']['input']>;
    id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    id_lt?: InputMaybe<Scalars['ID']['input']>;
    id_lte?: InputMaybe<Scalars['ID']['input']>;
    id_not?: InputMaybe<Scalars['ID']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    liquidityPool?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_?: InputMaybe<LiquidityPoolContract_Filter>;
    liquidityPool_contains?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_ends_with?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_gt?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_gte?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_in?: InputMaybe<Array<Scalars['String']['input']>>;
    liquidityPool_lt?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_lte?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_not?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_not_contains?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    liquidityPool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_starts_with?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    type?: InputMaybe<Scalars['String']['input']>;
    type_contains?: InputMaybe<Scalars['String']['input']>;
    type_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    type_ends_with?: InputMaybe<Scalars['String']['input']>;
    type_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    type_gt?: InputMaybe<Scalars['String']['input']>;
    type_gte?: InputMaybe<Scalars['String']['input']>;
    type_in?: InputMaybe<Array<Scalars['String']['input']>>;
    type_lt?: InputMaybe<Scalars['String']['input']>;
    type_lte?: InputMaybe<Scalars['String']['input']>;
    type_not?: InputMaybe<Scalars['String']['input']>;
    type_not_contains?: InputMaybe<Scalars['String']['input']>;
    type_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    type_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    type_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    type_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    type_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    type_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    type_starts_with?: InputMaybe<Scalars['String']['input']>;
    type_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};
export declare enum CoreContract_OrderBy {
    Address = "address",
    Id = "id",
    LiquidityPool = "liquidityPool",
    Type = "type"
}
export type Country = {
    __typename?: 'Country';
    activeLeaguesEntityIds?: Maybe<Array<Scalars['String']['output']>>;
    hasActiveLeagues: Scalars['Boolean']['output'];
    id: Scalars['ID']['output'];
    leagues: Array<League>;
    name: Scalars['String']['output'];
    slug: Scalars['String']['output'];
    sport: Sport;
    turnover: Scalars['BigInt']['output'];
};
export type CountryLeaguesArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<League_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<League_Filter>;
};
export type Country_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    activeLeaguesEntityIds?: InputMaybe<Array<Scalars['String']['input']>>;
    activeLeaguesEntityIds_contains?: InputMaybe<Array<Scalars['String']['input']>>;
    activeLeaguesEntityIds_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
    activeLeaguesEntityIds_not?: InputMaybe<Array<Scalars['String']['input']>>;
    activeLeaguesEntityIds_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
    activeLeaguesEntityIds_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
    hasActiveLeagues?: InputMaybe<Scalars['Boolean']['input']>;
    hasActiveLeagues_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    hasActiveLeagues_not?: InputMaybe<Scalars['Boolean']['input']>;
    hasActiveLeagues_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    id?: InputMaybe<Scalars['ID']['input']>;
    id_gt?: InputMaybe<Scalars['ID']['input']>;
    id_gte?: InputMaybe<Scalars['ID']['input']>;
    id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    id_lt?: InputMaybe<Scalars['ID']['input']>;
    id_lte?: InputMaybe<Scalars['ID']['input']>;
    id_not?: InputMaybe<Scalars['ID']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    leagues_?: InputMaybe<League_Filter>;
    name?: InputMaybe<Scalars['String']['input']>;
    name_contains?: InputMaybe<Scalars['String']['input']>;
    name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    name_ends_with?: InputMaybe<Scalars['String']['input']>;
    name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    name_gt?: InputMaybe<Scalars['String']['input']>;
    name_gte?: InputMaybe<Scalars['String']['input']>;
    name_in?: InputMaybe<Array<Scalars['String']['input']>>;
    name_lt?: InputMaybe<Scalars['String']['input']>;
    name_lte?: InputMaybe<Scalars['String']['input']>;
    name_not?: InputMaybe<Scalars['String']['input']>;
    name_not_contains?: InputMaybe<Scalars['String']['input']>;
    name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    name_starts_with?: InputMaybe<Scalars['String']['input']>;
    name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
    slug_contains?: InputMaybe<Scalars['String']['input']>;
    slug_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    slug_ends_with?: InputMaybe<Scalars['String']['input']>;
    slug_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    slug_gt?: InputMaybe<Scalars['String']['input']>;
    slug_gte?: InputMaybe<Scalars['String']['input']>;
    slug_in?: InputMaybe<Array<Scalars['String']['input']>>;
    slug_lt?: InputMaybe<Scalars['String']['input']>;
    slug_lte?: InputMaybe<Scalars['String']['input']>;
    slug_not?: InputMaybe<Scalars['String']['input']>;
    slug_not_contains?: InputMaybe<Scalars['String']['input']>;
    slug_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    slug_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    slug_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    slug_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    slug_starts_with?: InputMaybe<Scalars['String']['input']>;
    slug_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    sport?: InputMaybe<Scalars['String']['input']>;
    sport_?: InputMaybe<Sport_Filter>;
    sport_contains?: InputMaybe<Scalars['String']['input']>;
    sport_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    sport_ends_with?: InputMaybe<Scalars['String']['input']>;
    sport_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    sport_gt?: InputMaybe<Scalars['String']['input']>;
    sport_gte?: InputMaybe<Scalars['String']['input']>;
    sport_in?: InputMaybe<Array<Scalars['String']['input']>>;
    sport_lt?: InputMaybe<Scalars['String']['input']>;
    sport_lte?: InputMaybe<Scalars['String']['input']>;
    sport_not?: InputMaybe<Scalars['String']['input']>;
    sport_not_contains?: InputMaybe<Scalars['String']['input']>;
    sport_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    sport_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    sport_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    sport_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    sport_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    sport_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    sport_starts_with?: InputMaybe<Scalars['String']['input']>;
    sport_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    turnover?: InputMaybe<Scalars['BigInt']['input']>;
    turnover_gt?: InputMaybe<Scalars['BigInt']['input']>;
    turnover_gte?: InputMaybe<Scalars['BigInt']['input']>;
    turnover_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    turnover_lt?: InputMaybe<Scalars['BigInt']['input']>;
    turnover_lte?: InputMaybe<Scalars['BigInt']['input']>;
    turnover_not?: InputMaybe<Scalars['BigInt']['input']>;
    turnover_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum Country_OrderBy {
    ActiveLeaguesEntityIds = "activeLeaguesEntityIds",
    HasActiveLeagues = "hasActiveLeagues",
    Id = "id",
    Leagues = "leagues",
    Name = "name",
    Slug = "slug",
    Sport = "sport",
    Turnover = "turnover"
}
export type Event = {
    __typename?: 'Event';
    betId?: Maybe<Scalars['String']['output']>;
    blockNumber: Scalars['BigInt']['output'];
    blockTimestamp: Scalars['BigInt']['output'];
    conditionId?: Maybe<Scalars['String']['output']>;
    contractAddress: Scalars['String']['output'];
    depositId?: Maybe<Scalars['String']['output']>;
    freebetId?: Maybe<Scalars['String']['output']>;
    gameId?: Maybe<Scalars['String']['output']>;
    gasPrice: Scalars['BigInt']['output'];
    gasUsed?: Maybe<Scalars['BigInt']['output']>;
    id: Scalars['ID']['output'];
    logIndex: Scalars['BigInt']['output'];
    name: EventName;
    sortOrder: Scalars['BigInt']['output'];
    transactionIndex: Scalars['BigInt']['output'];
    txHash: Scalars['String']['output'];
};
export declare enum EventName {
    AzuroBetTransfer = "AzuroBetTransfer",
    BetSettled = "BetSettled",
    BettorWin = "BettorWin",
    ConditionCreated = "ConditionCreated",
    ConditionResolved = "ConditionResolved",
    ConditionShifted = "ConditionShifted",
    ConditionStopped = "ConditionStopped",
    FreeBetBettorWin = "FreeBetBettorWin",
    FreeBetMinted = "FreeBetMinted",
    FreeBetRedeemed = "FreeBetRedeemed",
    FreeBetReissued = "FreeBetReissued",
    FreeBetTransfer = "FreeBetTransfer",
    GameShifted = "GameShifted",
    LiquidityAdded = "LiquidityAdded",
    LiquidityRemoved = "LiquidityRemoved",
    LiquidityTransfer = "LiquidityTransfer",
    LiveBetSettled = "LiveBetSettled",
    MarginChanged = "MarginChanged",
    NewBet = "NewBet",
    NewGame = "NewGame",
    NewLiveBet = "NewLiveBet",
    ReinforcementChanged = "ReinforcementChanged"
}
export type Event_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    betId?: InputMaybe<Scalars['String']['input']>;
    betId_contains?: InputMaybe<Scalars['String']['input']>;
    betId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    betId_ends_with?: InputMaybe<Scalars['String']['input']>;
    betId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    betId_gt?: InputMaybe<Scalars['String']['input']>;
    betId_gte?: InputMaybe<Scalars['String']['input']>;
    betId_in?: InputMaybe<Array<Scalars['String']['input']>>;
    betId_lt?: InputMaybe<Scalars['String']['input']>;
    betId_lte?: InputMaybe<Scalars['String']['input']>;
    betId_not?: InputMaybe<Scalars['String']['input']>;
    betId_not_contains?: InputMaybe<Scalars['String']['input']>;
    betId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    betId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    betId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    betId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    betId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    betId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    betId_starts_with?: InputMaybe<Scalars['String']['input']>;
    betId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    conditionId?: InputMaybe<Scalars['String']['input']>;
    conditionId_contains?: InputMaybe<Scalars['String']['input']>;
    conditionId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    conditionId_ends_with?: InputMaybe<Scalars['String']['input']>;
    conditionId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    conditionId_gt?: InputMaybe<Scalars['String']['input']>;
    conditionId_gte?: InputMaybe<Scalars['String']['input']>;
    conditionId_in?: InputMaybe<Array<Scalars['String']['input']>>;
    conditionId_lt?: InputMaybe<Scalars['String']['input']>;
    conditionId_lte?: InputMaybe<Scalars['String']['input']>;
    conditionId_not?: InputMaybe<Scalars['String']['input']>;
    conditionId_not_contains?: InputMaybe<Scalars['String']['input']>;
    conditionId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    conditionId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    conditionId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    conditionId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    conditionId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    conditionId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    conditionId_starts_with?: InputMaybe<Scalars['String']['input']>;
    conditionId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    contractAddress?: InputMaybe<Scalars['String']['input']>;
    contractAddress_contains?: InputMaybe<Scalars['String']['input']>;
    contractAddress_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    contractAddress_ends_with?: InputMaybe<Scalars['String']['input']>;
    contractAddress_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    contractAddress_gt?: InputMaybe<Scalars['String']['input']>;
    contractAddress_gte?: InputMaybe<Scalars['String']['input']>;
    contractAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
    contractAddress_lt?: InputMaybe<Scalars['String']['input']>;
    contractAddress_lte?: InputMaybe<Scalars['String']['input']>;
    contractAddress_not?: InputMaybe<Scalars['String']['input']>;
    contractAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
    contractAddress_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    contractAddress_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    contractAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    contractAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    contractAddress_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    contractAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    contractAddress_starts_with?: InputMaybe<Scalars['String']['input']>;
    contractAddress_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    depositId?: InputMaybe<Scalars['String']['input']>;
    depositId_contains?: InputMaybe<Scalars['String']['input']>;
    depositId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    depositId_ends_with?: InputMaybe<Scalars['String']['input']>;
    depositId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    depositId_gt?: InputMaybe<Scalars['String']['input']>;
    depositId_gte?: InputMaybe<Scalars['String']['input']>;
    depositId_in?: InputMaybe<Array<Scalars['String']['input']>>;
    depositId_lt?: InputMaybe<Scalars['String']['input']>;
    depositId_lte?: InputMaybe<Scalars['String']['input']>;
    depositId_not?: InputMaybe<Scalars['String']['input']>;
    depositId_not_contains?: InputMaybe<Scalars['String']['input']>;
    depositId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    depositId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    depositId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    depositId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    depositId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    depositId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    depositId_starts_with?: InputMaybe<Scalars['String']['input']>;
    depositId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    freebetId?: InputMaybe<Scalars['String']['input']>;
    freebetId_contains?: InputMaybe<Scalars['String']['input']>;
    freebetId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    freebetId_ends_with?: InputMaybe<Scalars['String']['input']>;
    freebetId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    freebetId_gt?: InputMaybe<Scalars['String']['input']>;
    freebetId_gte?: InputMaybe<Scalars['String']['input']>;
    freebetId_in?: InputMaybe<Array<Scalars['String']['input']>>;
    freebetId_lt?: InputMaybe<Scalars['String']['input']>;
    freebetId_lte?: InputMaybe<Scalars['String']['input']>;
    freebetId_not?: InputMaybe<Scalars['String']['input']>;
    freebetId_not_contains?: InputMaybe<Scalars['String']['input']>;
    freebetId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    freebetId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    freebetId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    freebetId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    freebetId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    freebetId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    freebetId_starts_with?: InputMaybe<Scalars['String']['input']>;
    freebetId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    gameId?: InputMaybe<Scalars['String']['input']>;
    gameId_contains?: InputMaybe<Scalars['String']['input']>;
    gameId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    gameId_ends_with?: InputMaybe<Scalars['String']['input']>;
    gameId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    gameId_gt?: InputMaybe<Scalars['String']['input']>;
    gameId_gte?: InputMaybe<Scalars['String']['input']>;
    gameId_in?: InputMaybe<Array<Scalars['String']['input']>>;
    gameId_lt?: InputMaybe<Scalars['String']['input']>;
    gameId_lte?: InputMaybe<Scalars['String']['input']>;
    gameId_not?: InputMaybe<Scalars['String']['input']>;
    gameId_not_contains?: InputMaybe<Scalars['String']['input']>;
    gameId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    gameId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    gameId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    gameId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    gameId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    gameId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    gameId_starts_with?: InputMaybe<Scalars['String']['input']>;
    gameId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
    gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
    gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
    gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
    gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
    gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
    gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
    gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
    gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
    gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
    gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
    gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
    gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['ID']['input']>;
    id_gt?: InputMaybe<Scalars['ID']['input']>;
    id_gte?: InputMaybe<Scalars['ID']['input']>;
    id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    id_lt?: InputMaybe<Scalars['ID']['input']>;
    id_lte?: InputMaybe<Scalars['ID']['input']>;
    id_not?: InputMaybe<Scalars['ID']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    logIndex?: InputMaybe<Scalars['BigInt']['input']>;
    logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
    logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
    logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
    logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
    logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
    logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    name?: InputMaybe<EventName>;
    name_in?: InputMaybe<Array<EventName>>;
    name_not?: InputMaybe<EventName>;
    name_not_in?: InputMaybe<Array<EventName>>;
    sortOrder?: InputMaybe<Scalars['BigInt']['input']>;
    sortOrder_gt?: InputMaybe<Scalars['BigInt']['input']>;
    sortOrder_gte?: InputMaybe<Scalars['BigInt']['input']>;
    sortOrder_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    sortOrder_lt?: InputMaybe<Scalars['BigInt']['input']>;
    sortOrder_lte?: InputMaybe<Scalars['BigInt']['input']>;
    sortOrder_not?: InputMaybe<Scalars['BigInt']['input']>;
    sortOrder_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    transactionIndex?: InputMaybe<Scalars['BigInt']['input']>;
    transactionIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
    transactionIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
    transactionIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    transactionIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
    transactionIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
    transactionIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
    transactionIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    txHash?: InputMaybe<Scalars['String']['input']>;
    txHash_contains?: InputMaybe<Scalars['String']['input']>;
    txHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    txHash_ends_with?: InputMaybe<Scalars['String']['input']>;
    txHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    txHash_gt?: InputMaybe<Scalars['String']['input']>;
    txHash_gte?: InputMaybe<Scalars['String']['input']>;
    txHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
    txHash_lt?: InputMaybe<Scalars['String']['input']>;
    txHash_lte?: InputMaybe<Scalars['String']['input']>;
    txHash_not?: InputMaybe<Scalars['String']['input']>;
    txHash_not_contains?: InputMaybe<Scalars['String']['input']>;
    txHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    txHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    txHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    txHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    txHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    txHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    txHash_starts_with?: InputMaybe<Scalars['String']['input']>;
    txHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};
export declare enum Event_OrderBy {
    BetId = "betId",
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    ConditionId = "conditionId",
    ContractAddress = "contractAddress",
    DepositId = "depositId",
    FreebetId = "freebetId",
    GameId = "gameId",
    GasPrice = "gasPrice",
    GasUsed = "gasUsed",
    Id = "id",
    LogIndex = "logIndex",
    Name = "name",
    SortOrder = "sortOrder",
    TransactionIndex = "transactionIndex",
    TxHash = "txHash"
}
export type ExpressPrematchRelation = {
    __typename?: 'ExpressPrematchRelation';
    /** Express (core) contract address */
    id: Scalars['ID']['output'];
    prematchAddress: Scalars['String']['output'];
};
export type ExpressPrematchRelation_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    id?: InputMaybe<Scalars['ID']['input']>;
    id_gt?: InputMaybe<Scalars['ID']['input']>;
    id_gte?: InputMaybe<Scalars['ID']['input']>;
    id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    id_lt?: InputMaybe<Scalars['ID']['input']>;
    id_lte?: InputMaybe<Scalars['ID']['input']>;
    id_not?: InputMaybe<Scalars['ID']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    prematchAddress?: InputMaybe<Scalars['String']['input']>;
    prematchAddress_contains?: InputMaybe<Scalars['String']['input']>;
    prematchAddress_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    prematchAddress_ends_with?: InputMaybe<Scalars['String']['input']>;
    prematchAddress_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    prematchAddress_gt?: InputMaybe<Scalars['String']['input']>;
    prematchAddress_gte?: InputMaybe<Scalars['String']['input']>;
    prematchAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
    prematchAddress_lt?: InputMaybe<Scalars['String']['input']>;
    prematchAddress_lte?: InputMaybe<Scalars['String']['input']>;
    prematchAddress_not?: InputMaybe<Scalars['String']['input']>;
    prematchAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
    prematchAddress_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    prematchAddress_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    prematchAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    prematchAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    prematchAddress_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    prematchAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    prematchAddress_starts_with?: InputMaybe<Scalars['String']['input']>;
    prematchAddress_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};
export declare enum ExpressPrematchRelation_OrderBy {
    Id = "id",
    PrematchAddress = "prematchAddress"
}
export type Freebet = {
    __typename?: 'Freebet';
    _updatedAt: Scalars['BigInt']['output'];
    amount: Scalars['BigDecimal']['output'];
    azuroBetId?: Maybe<Scalars['BigInt']['output']>;
    burned: Scalars['Boolean']['output'];
    core?: Maybe<CoreContract>;
    createdBlockNumber: Scalars['BigInt']['output'];
    createdBlockTimestamp: Scalars['BigInt']['output'];
    createdTxHash: Scalars['String']['output'];
    durationTime: Scalars['BigInt']['output'];
    expiresAt: Scalars['BigInt']['output'];
    freebet: FreebetContract;
    freebetContractAddress: Scalars['String']['output'];
    freebetContractAffiliate?: Maybe<Scalars['String']['output']>;
    freebetContractName?: Maybe<Scalars['String']['output']>;
    freebetId: Scalars['BigInt']['output'];
    /** Freebet Contract address + Freebet Id */
    id: Scalars['ID']['output'];
    isResolved: Scalars['Boolean']['output'];
    minOdds: Scalars['BigDecimal']['output'];
    owner: Scalars['String']['output'];
    rawAmount: Scalars['BigInt']['output'];
    rawMinOdds: Scalars['BigInt']['output'];
    status: FreebetStatus;
    tokenDecimals: Scalars['Int']['output'];
};
export type FreebetContract = {
    __typename?: 'FreebetContract';
    address: Scalars['String']['output'];
    affiliate?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    liquidityPool: LiquidityPoolContract;
    manager?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
};
export type FreebetContract_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    address?: InputMaybe<Scalars['String']['input']>;
    address_contains?: InputMaybe<Scalars['String']['input']>;
    address_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    address_ends_with?: InputMaybe<Scalars['String']['input']>;
    address_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    address_gt?: InputMaybe<Scalars['String']['input']>;
    address_gte?: InputMaybe<Scalars['String']['input']>;
    address_in?: InputMaybe<Array<Scalars['String']['input']>>;
    address_lt?: InputMaybe<Scalars['String']['input']>;
    address_lte?: InputMaybe<Scalars['String']['input']>;
    address_not?: InputMaybe<Scalars['String']['input']>;
    address_not_contains?: InputMaybe<Scalars['String']['input']>;
    address_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    address_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    address_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    address_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    address_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    address_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    address_starts_with?: InputMaybe<Scalars['String']['input']>;
    address_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    affiliate?: InputMaybe<Scalars['String']['input']>;
    affiliate_contains?: InputMaybe<Scalars['String']['input']>;
    affiliate_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    affiliate_ends_with?: InputMaybe<Scalars['String']['input']>;
    affiliate_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    affiliate_gt?: InputMaybe<Scalars['String']['input']>;
    affiliate_gte?: InputMaybe<Scalars['String']['input']>;
    affiliate_in?: InputMaybe<Array<Scalars['String']['input']>>;
    affiliate_lt?: InputMaybe<Scalars['String']['input']>;
    affiliate_lte?: InputMaybe<Scalars['String']['input']>;
    affiliate_not?: InputMaybe<Scalars['String']['input']>;
    affiliate_not_contains?: InputMaybe<Scalars['String']['input']>;
    affiliate_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    affiliate_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    affiliate_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    affiliate_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    affiliate_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    affiliate_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    affiliate_starts_with?: InputMaybe<Scalars['String']['input']>;
    affiliate_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    id_gt?: InputMaybe<Scalars['ID']['input']>;
    id_gte?: InputMaybe<Scalars['ID']['input']>;
    id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    id_lt?: InputMaybe<Scalars['ID']['input']>;
    id_lte?: InputMaybe<Scalars['ID']['input']>;
    id_not?: InputMaybe<Scalars['ID']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    liquidityPool?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_?: InputMaybe<LiquidityPoolContract_Filter>;
    liquidityPool_contains?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_ends_with?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_gt?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_gte?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_in?: InputMaybe<Array<Scalars['String']['input']>>;
    liquidityPool_lt?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_lte?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_not?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_not_contains?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    liquidityPool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_starts_with?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    manager?: InputMaybe<Scalars['String']['input']>;
    manager_contains?: InputMaybe<Scalars['String']['input']>;
    manager_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    manager_ends_with?: InputMaybe<Scalars['String']['input']>;
    manager_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    manager_gt?: InputMaybe<Scalars['String']['input']>;
    manager_gte?: InputMaybe<Scalars['String']['input']>;
    manager_in?: InputMaybe<Array<Scalars['String']['input']>>;
    manager_lt?: InputMaybe<Scalars['String']['input']>;
    manager_lte?: InputMaybe<Scalars['String']['input']>;
    manager_not?: InputMaybe<Scalars['String']['input']>;
    manager_not_contains?: InputMaybe<Scalars['String']['input']>;
    manager_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    manager_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    manager_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    manager_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    manager_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    manager_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    manager_starts_with?: InputMaybe<Scalars['String']['input']>;
    manager_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    name_contains?: InputMaybe<Scalars['String']['input']>;
    name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    name_ends_with?: InputMaybe<Scalars['String']['input']>;
    name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    name_gt?: InputMaybe<Scalars['String']['input']>;
    name_gte?: InputMaybe<Scalars['String']['input']>;
    name_in?: InputMaybe<Array<Scalars['String']['input']>>;
    name_lt?: InputMaybe<Scalars['String']['input']>;
    name_lte?: InputMaybe<Scalars['String']['input']>;
    name_not?: InputMaybe<Scalars['String']['input']>;
    name_not_contains?: InputMaybe<Scalars['String']['input']>;
    name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    name_starts_with?: InputMaybe<Scalars['String']['input']>;
    name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};
export declare enum FreebetContract_OrderBy {
    Address = "address",
    Affiliate = "affiliate",
    Id = "id",
    LiquidityPool = "liquidityPool",
    Manager = "manager",
    Name = "name"
}
export declare enum FreebetStatus {
    Created = "Created",
    Redeemed = "Redeemed",
    Reissued = "Reissued",
    Withdrawn = "Withdrawn"
}
export type Freebet_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    _updatedAt?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    _updatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    amount?: InputMaybe<Scalars['BigDecimal']['input']>;
    amount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
    amount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
    amount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    amount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
    amount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
    amount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
    amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    azuroBetId?: InputMaybe<Scalars['BigInt']['input']>;
    azuroBetId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    azuroBetId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    azuroBetId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    azuroBetId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    azuroBetId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    azuroBetId_not?: InputMaybe<Scalars['BigInt']['input']>;
    azuroBetId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    burned?: InputMaybe<Scalars['Boolean']['input']>;
    burned_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    burned_not?: InputMaybe<Scalars['Boolean']['input']>;
    burned_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    core?: InputMaybe<Scalars['String']['input']>;
    core_?: InputMaybe<CoreContract_Filter>;
    core_contains?: InputMaybe<Scalars['String']['input']>;
    core_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    core_ends_with?: InputMaybe<Scalars['String']['input']>;
    core_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    core_gt?: InputMaybe<Scalars['String']['input']>;
    core_gte?: InputMaybe<Scalars['String']['input']>;
    core_in?: InputMaybe<Array<Scalars['String']['input']>>;
    core_lt?: InputMaybe<Scalars['String']['input']>;
    core_lte?: InputMaybe<Scalars['String']['input']>;
    core_not?: InputMaybe<Scalars['String']['input']>;
    core_not_contains?: InputMaybe<Scalars['String']['input']>;
    core_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    core_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    core_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    core_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    core_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    core_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    core_starts_with?: InputMaybe<Scalars['String']['input']>;
    core_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    createdBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    createdBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    createdBlockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    createdBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    createdTxHash?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_contains?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_ends_with?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_gt?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_gte?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
    createdTxHash_lt?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_lte?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not_contains?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    createdTxHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_starts_with?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    durationTime?: InputMaybe<Scalars['BigInt']['input']>;
    durationTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
    durationTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
    durationTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    durationTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
    durationTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
    durationTime_not?: InputMaybe<Scalars['BigInt']['input']>;
    durationTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    expiresAt?: InputMaybe<Scalars['BigInt']['input']>;
    expiresAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
    expiresAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
    expiresAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    expiresAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
    expiresAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
    expiresAt_not?: InputMaybe<Scalars['BigInt']['input']>;
    expiresAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    freebet?: InputMaybe<Scalars['String']['input']>;
    freebetContractAddress?: InputMaybe<Scalars['String']['input']>;
    freebetContractAddress_contains?: InputMaybe<Scalars['String']['input']>;
    freebetContractAddress_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    freebetContractAddress_ends_with?: InputMaybe<Scalars['String']['input']>;
    freebetContractAddress_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    freebetContractAddress_gt?: InputMaybe<Scalars['String']['input']>;
    freebetContractAddress_gte?: InputMaybe<Scalars['String']['input']>;
    freebetContractAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
    freebetContractAddress_lt?: InputMaybe<Scalars['String']['input']>;
    freebetContractAddress_lte?: InputMaybe<Scalars['String']['input']>;
    freebetContractAddress_not?: InputMaybe<Scalars['String']['input']>;
    freebetContractAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
    freebetContractAddress_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    freebetContractAddress_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    freebetContractAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    freebetContractAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    freebetContractAddress_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    freebetContractAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    freebetContractAddress_starts_with?: InputMaybe<Scalars['String']['input']>;
    freebetContractAddress_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    freebetContractAffiliate?: InputMaybe<Scalars['String']['input']>;
    freebetContractAffiliate_contains?: InputMaybe<Scalars['String']['input']>;
    freebetContractAffiliate_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    freebetContractAffiliate_ends_with?: InputMaybe<Scalars['String']['input']>;
    freebetContractAffiliate_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    freebetContractAffiliate_gt?: InputMaybe<Scalars['String']['input']>;
    freebetContractAffiliate_gte?: InputMaybe<Scalars['String']['input']>;
    freebetContractAffiliate_in?: InputMaybe<Array<Scalars['String']['input']>>;
    freebetContractAffiliate_lt?: InputMaybe<Scalars['String']['input']>;
    freebetContractAffiliate_lte?: InputMaybe<Scalars['String']['input']>;
    freebetContractAffiliate_not?: InputMaybe<Scalars['String']['input']>;
    freebetContractAffiliate_not_contains?: InputMaybe<Scalars['String']['input']>;
    freebetContractAffiliate_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    freebetContractAffiliate_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    freebetContractAffiliate_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    freebetContractAffiliate_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    freebetContractAffiliate_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    freebetContractAffiliate_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    freebetContractAffiliate_starts_with?: InputMaybe<Scalars['String']['input']>;
    freebetContractAffiliate_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    freebetContractName?: InputMaybe<Scalars['String']['input']>;
    freebetContractName_contains?: InputMaybe<Scalars['String']['input']>;
    freebetContractName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    freebetContractName_ends_with?: InputMaybe<Scalars['String']['input']>;
    freebetContractName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    freebetContractName_gt?: InputMaybe<Scalars['String']['input']>;
    freebetContractName_gte?: InputMaybe<Scalars['String']['input']>;
    freebetContractName_in?: InputMaybe<Array<Scalars['String']['input']>>;
    freebetContractName_lt?: InputMaybe<Scalars['String']['input']>;
    freebetContractName_lte?: InputMaybe<Scalars['String']['input']>;
    freebetContractName_not?: InputMaybe<Scalars['String']['input']>;
    freebetContractName_not_contains?: InputMaybe<Scalars['String']['input']>;
    freebetContractName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    freebetContractName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    freebetContractName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    freebetContractName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    freebetContractName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    freebetContractName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    freebetContractName_starts_with?: InputMaybe<Scalars['String']['input']>;
    freebetContractName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    freebetId?: InputMaybe<Scalars['BigInt']['input']>;
    freebetId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    freebetId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    freebetId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    freebetId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    freebetId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    freebetId_not?: InputMaybe<Scalars['BigInt']['input']>;
    freebetId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    freebet_?: InputMaybe<FreebetContract_Filter>;
    freebet_contains?: InputMaybe<Scalars['String']['input']>;
    freebet_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    freebet_ends_with?: InputMaybe<Scalars['String']['input']>;
    freebet_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    freebet_gt?: InputMaybe<Scalars['String']['input']>;
    freebet_gte?: InputMaybe<Scalars['String']['input']>;
    freebet_in?: InputMaybe<Array<Scalars['String']['input']>>;
    freebet_lt?: InputMaybe<Scalars['String']['input']>;
    freebet_lte?: InputMaybe<Scalars['String']['input']>;
    freebet_not?: InputMaybe<Scalars['String']['input']>;
    freebet_not_contains?: InputMaybe<Scalars['String']['input']>;
    freebet_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    freebet_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    freebet_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    freebet_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    freebet_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    freebet_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    freebet_starts_with?: InputMaybe<Scalars['String']['input']>;
    freebet_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    id_gt?: InputMaybe<Scalars['ID']['input']>;
    id_gte?: InputMaybe<Scalars['ID']['input']>;
    id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    id_lt?: InputMaybe<Scalars['ID']['input']>;
    id_lte?: InputMaybe<Scalars['ID']['input']>;
    id_not?: InputMaybe<Scalars['ID']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    isResolved?: InputMaybe<Scalars['Boolean']['input']>;
    isResolved_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    isResolved_not?: InputMaybe<Scalars['Boolean']['input']>;
    isResolved_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    minOdds?: InputMaybe<Scalars['BigDecimal']['input']>;
    minOdds_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
    minOdds_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
    minOdds_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    minOdds_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
    minOdds_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
    minOdds_not?: InputMaybe<Scalars['BigDecimal']['input']>;
    minOdds_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    owner?: InputMaybe<Scalars['String']['input']>;
    owner_contains?: InputMaybe<Scalars['String']['input']>;
    owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_ends_with?: InputMaybe<Scalars['String']['input']>;
    owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_gt?: InputMaybe<Scalars['String']['input']>;
    owner_gte?: InputMaybe<Scalars['String']['input']>;
    owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
    owner_lt?: InputMaybe<Scalars['String']['input']>;
    owner_lte?: InputMaybe<Scalars['String']['input']>;
    owner_not?: InputMaybe<Scalars['String']['input']>;
    owner_not_contains?: InputMaybe<Scalars['String']['input']>;
    owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_starts_with?: InputMaybe<Scalars['String']['input']>;
    owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    rawAmount?: InputMaybe<Scalars['BigInt']['input']>;
    rawAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    rawAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    rawAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    rawAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    rawAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
    rawAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawMinOdds?: InputMaybe<Scalars['BigInt']['input']>;
    rawMinOdds_gt?: InputMaybe<Scalars['BigInt']['input']>;
    rawMinOdds_gte?: InputMaybe<Scalars['BigInt']['input']>;
    rawMinOdds_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawMinOdds_lt?: InputMaybe<Scalars['BigInt']['input']>;
    rawMinOdds_lte?: InputMaybe<Scalars['BigInt']['input']>;
    rawMinOdds_not?: InputMaybe<Scalars['BigInt']['input']>;
    rawMinOdds_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    status?: InputMaybe<FreebetStatus>;
    status_in?: InputMaybe<Array<FreebetStatus>>;
    status_not?: InputMaybe<FreebetStatus>;
    status_not_in?: InputMaybe<Array<FreebetStatus>>;
    tokenDecimals?: InputMaybe<Scalars['Int']['input']>;
    tokenDecimals_gt?: InputMaybe<Scalars['Int']['input']>;
    tokenDecimals_gte?: InputMaybe<Scalars['Int']['input']>;
    tokenDecimals_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    tokenDecimals_lt?: InputMaybe<Scalars['Int']['input']>;
    tokenDecimals_lte?: InputMaybe<Scalars['Int']['input']>;
    tokenDecimals_not?: InputMaybe<Scalars['Int']['input']>;
    tokenDecimals_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};
export declare enum Freebet_OrderBy {
    UpdatedAt = "_updatedAt",
    Amount = "amount",
    AzuroBetId = "azuroBetId",
    Burned = "burned",
    Core = "core",
    CreatedBlockNumber = "createdBlockNumber",
    CreatedBlockTimestamp = "createdBlockTimestamp",
    CreatedTxHash = "createdTxHash",
    DurationTime = "durationTime",
    ExpiresAt = "expiresAt",
    Freebet = "freebet",
    FreebetContractAddress = "freebetContractAddress",
    FreebetContractAffiliate = "freebetContractAffiliate",
    FreebetContractName = "freebetContractName",
    FreebetId = "freebetId",
    Id = "id",
    IsResolved = "isResolved",
    MinOdds = "minOdds",
    Owner = "owner",
    RawAmount = "rawAmount",
    RawMinOdds = "rawMinOdds",
    Status = "status",
    TokenDecimals = "tokenDecimals"
}
export type Game = {
    __typename?: 'Game';
    _activeConditionsEntityIds?: Maybe<Array<Scalars['String']['output']>>;
    _canceledConditionsEntityIds?: Maybe<Array<Scalars['String']['output']>>;
    _pausedConditionsEntityIds?: Maybe<Array<Scalars['String']['output']>>;
    _resolvedConditionsEntityIds?: Maybe<Array<Scalars['String']['output']>>;
    _updatedAt: Scalars['BigInt']['output'];
    conditions: Array<Condition>;
    createdBlockNumber: Scalars['BigInt']['output'];
    createdBlockTimestamp: Scalars['BigInt']['output'];
    createdTxHash: Scalars['String']['output'];
    gameId: Scalars['BigInt']['output'];
    hasActiveConditions: Scalars['Boolean']['output'];
    /** LP Contract address + Game Id */
    id: Scalars['ID']['output'];
    league: League;
    liquidityPool: LiquidityPoolContract;
    participants: Array<Participant>;
    provider: Scalars['BigInt']['output'];
    resolvedBlockNumber?: Maybe<Scalars['BigInt']['output']>;
    resolvedBlockTimestamp?: Maybe<Scalars['BigInt']['output']>;
    resolvedTxHash?: Maybe<Scalars['String']['output']>;
    shiftedBlockNumber?: Maybe<Scalars['BigInt']['output']>;
    shiftedBlockTimestamp?: Maybe<Scalars['BigInt']['output']>;
    shiftedTxHash?: Maybe<Scalars['String']['output']>;
    slug?: Maybe<Scalars['String']['output']>;
    sport: Sport;
    startsAt: Scalars['BigInt']['output'];
    status: GameStatus;
    title?: Maybe<Scalars['String']['output']>;
    turnover: Scalars['BigInt']['output'];
};
export type GameConditionsArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Condition_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<Condition_Filter>;
};
export type GameParticipantsArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Participant_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<Participant_Filter>;
};
export declare enum GameStatus {
    Canceled = "Canceled",
    Created = "Created",
    Paused = "Paused",
    Resolved = "Resolved"
}
export type Game_Filter = {
    _activeConditionsEntityIds?: InputMaybe<Array<Scalars['String']['input']>>;
    _activeConditionsEntityIds_contains?: InputMaybe<Array<Scalars['String']['input']>>;
    _activeConditionsEntityIds_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
    _activeConditionsEntityIds_not?: InputMaybe<Array<Scalars['String']['input']>>;
    _activeConditionsEntityIds_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
    _activeConditionsEntityIds_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
    _canceledConditionsEntityIds?: InputMaybe<Array<Scalars['String']['input']>>;
    _canceledConditionsEntityIds_contains?: InputMaybe<Array<Scalars['String']['input']>>;
    _canceledConditionsEntityIds_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
    _canceledConditionsEntityIds_not?: InputMaybe<Array<Scalars['String']['input']>>;
    _canceledConditionsEntityIds_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
    _canceledConditionsEntityIds_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    _pausedConditionsEntityIds?: InputMaybe<Array<Scalars['String']['input']>>;
    _pausedConditionsEntityIds_contains?: InputMaybe<Array<Scalars['String']['input']>>;
    _pausedConditionsEntityIds_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
    _pausedConditionsEntityIds_not?: InputMaybe<Array<Scalars['String']['input']>>;
    _pausedConditionsEntityIds_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
    _pausedConditionsEntityIds_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
    _resolvedConditionsEntityIds?: InputMaybe<Array<Scalars['String']['input']>>;
    _resolvedConditionsEntityIds_contains?: InputMaybe<Array<Scalars['String']['input']>>;
    _resolvedConditionsEntityIds_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
    _resolvedConditionsEntityIds_not?: InputMaybe<Array<Scalars['String']['input']>>;
    _resolvedConditionsEntityIds_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
    _resolvedConditionsEntityIds_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
    _updatedAt?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    _updatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    conditions_?: InputMaybe<Condition_Filter>;
    createdBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    createdBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    createdBlockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    createdBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    createdTxHash?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_contains?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_ends_with?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_gt?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_gte?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
    createdTxHash_lt?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_lte?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not_contains?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    createdTxHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_starts_with?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    gameId?: InputMaybe<Scalars['BigInt']['input']>;
    gameId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    gameId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    gameId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    gameId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    gameId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    gameId_not?: InputMaybe<Scalars['BigInt']['input']>;
    gameId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    hasActiveConditions?: InputMaybe<Scalars['Boolean']['input']>;
    hasActiveConditions_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    hasActiveConditions_not?: InputMaybe<Scalars['Boolean']['input']>;
    hasActiveConditions_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    id?: InputMaybe<Scalars['ID']['input']>;
    id_gt?: InputMaybe<Scalars['ID']['input']>;
    id_gte?: InputMaybe<Scalars['ID']['input']>;
    id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    id_lt?: InputMaybe<Scalars['ID']['input']>;
    id_lte?: InputMaybe<Scalars['ID']['input']>;
    id_not?: InputMaybe<Scalars['ID']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    league?: InputMaybe<Scalars['String']['input']>;
    league_?: InputMaybe<League_Filter>;
    league_contains?: InputMaybe<Scalars['String']['input']>;
    league_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    league_ends_with?: InputMaybe<Scalars['String']['input']>;
    league_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    league_gt?: InputMaybe<Scalars['String']['input']>;
    league_gte?: InputMaybe<Scalars['String']['input']>;
    league_in?: InputMaybe<Array<Scalars['String']['input']>>;
    league_lt?: InputMaybe<Scalars['String']['input']>;
    league_lte?: InputMaybe<Scalars['String']['input']>;
    league_not?: InputMaybe<Scalars['String']['input']>;
    league_not_contains?: InputMaybe<Scalars['String']['input']>;
    league_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    league_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    league_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    league_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    league_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    league_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    league_starts_with?: InputMaybe<Scalars['String']['input']>;
    league_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    liquidityPool?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_?: InputMaybe<LiquidityPoolContract_Filter>;
    liquidityPool_contains?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_ends_with?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_gt?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_gte?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_in?: InputMaybe<Array<Scalars['String']['input']>>;
    liquidityPool_lt?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_lte?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_not?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_not_contains?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    liquidityPool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_starts_with?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    participants_?: InputMaybe<Participant_Filter>;
    provider?: InputMaybe<Scalars['BigInt']['input']>;
    provider_gt?: InputMaybe<Scalars['BigInt']['input']>;
    provider_gte?: InputMaybe<Scalars['BigInt']['input']>;
    provider_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    provider_lt?: InputMaybe<Scalars['BigInt']['input']>;
    provider_lte?: InputMaybe<Scalars['BigInt']['input']>;
    provider_not?: InputMaybe<Scalars['BigInt']['input']>;
    provider_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    resolvedBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    resolvedBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    resolvedBlockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    resolvedBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    resolvedTxHash?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_contains?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_ends_with?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_gt?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_gte?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
    resolvedTxHash_lt?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_lte?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_not?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_not_contains?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    resolvedTxHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_starts_with?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    shiftedBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    shiftedBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    shiftedBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    shiftedBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    shiftedBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    shiftedBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    shiftedBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    shiftedBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    shiftedBlockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    shiftedBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    shiftedBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    shiftedBlockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    shiftedBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    shiftedBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    shiftedBlockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    shiftedBlockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    shiftedTxHash?: InputMaybe<Scalars['String']['input']>;
    shiftedTxHash_contains?: InputMaybe<Scalars['String']['input']>;
    shiftedTxHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    shiftedTxHash_ends_with?: InputMaybe<Scalars['String']['input']>;
    shiftedTxHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    shiftedTxHash_gt?: InputMaybe<Scalars['String']['input']>;
    shiftedTxHash_gte?: InputMaybe<Scalars['String']['input']>;
    shiftedTxHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
    shiftedTxHash_lt?: InputMaybe<Scalars['String']['input']>;
    shiftedTxHash_lte?: InputMaybe<Scalars['String']['input']>;
    shiftedTxHash_not?: InputMaybe<Scalars['String']['input']>;
    shiftedTxHash_not_contains?: InputMaybe<Scalars['String']['input']>;
    shiftedTxHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    shiftedTxHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    shiftedTxHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    shiftedTxHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    shiftedTxHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    shiftedTxHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    shiftedTxHash_starts_with?: InputMaybe<Scalars['String']['input']>;
    shiftedTxHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
    slug_contains?: InputMaybe<Scalars['String']['input']>;
    slug_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    slug_ends_with?: InputMaybe<Scalars['String']['input']>;
    slug_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    slug_gt?: InputMaybe<Scalars['String']['input']>;
    slug_gte?: InputMaybe<Scalars['String']['input']>;
    slug_in?: InputMaybe<Array<Scalars['String']['input']>>;
    slug_lt?: InputMaybe<Scalars['String']['input']>;
    slug_lte?: InputMaybe<Scalars['String']['input']>;
    slug_not?: InputMaybe<Scalars['String']['input']>;
    slug_not_contains?: InputMaybe<Scalars['String']['input']>;
    slug_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    slug_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    slug_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    slug_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    slug_starts_with?: InputMaybe<Scalars['String']['input']>;
    slug_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    sport?: InputMaybe<Scalars['String']['input']>;
    sport_?: InputMaybe<Sport_Filter>;
    sport_contains?: InputMaybe<Scalars['String']['input']>;
    sport_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    sport_ends_with?: InputMaybe<Scalars['String']['input']>;
    sport_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    sport_gt?: InputMaybe<Scalars['String']['input']>;
    sport_gte?: InputMaybe<Scalars['String']['input']>;
    sport_in?: InputMaybe<Array<Scalars['String']['input']>>;
    sport_lt?: InputMaybe<Scalars['String']['input']>;
    sport_lte?: InputMaybe<Scalars['String']['input']>;
    sport_not?: InputMaybe<Scalars['String']['input']>;
    sport_not_contains?: InputMaybe<Scalars['String']['input']>;
    sport_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    sport_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    sport_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    sport_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    sport_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    sport_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    sport_starts_with?: InputMaybe<Scalars['String']['input']>;
    sport_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    startsAt?: InputMaybe<Scalars['BigInt']['input']>;
    startsAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
    startsAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
    startsAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    startsAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
    startsAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
    startsAt_not?: InputMaybe<Scalars['BigInt']['input']>;
    startsAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    status?: InputMaybe<GameStatus>;
    status_in?: InputMaybe<Array<GameStatus>>;
    status_not?: InputMaybe<GameStatus>;
    status_not_in?: InputMaybe<Array<GameStatus>>;
    title?: InputMaybe<Scalars['String']['input']>;
    title_contains?: InputMaybe<Scalars['String']['input']>;
    title_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    title_ends_with?: InputMaybe<Scalars['String']['input']>;
    title_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    title_gt?: InputMaybe<Scalars['String']['input']>;
    title_gte?: InputMaybe<Scalars['String']['input']>;
    title_in?: InputMaybe<Array<Scalars['String']['input']>>;
    title_lt?: InputMaybe<Scalars['String']['input']>;
    title_lte?: InputMaybe<Scalars['String']['input']>;
    title_not?: InputMaybe<Scalars['String']['input']>;
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    title_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    title_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    title_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    title_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    title_starts_with?: InputMaybe<Scalars['String']['input']>;
    title_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    turnover?: InputMaybe<Scalars['BigInt']['input']>;
    turnover_gt?: InputMaybe<Scalars['BigInt']['input']>;
    turnover_gte?: InputMaybe<Scalars['BigInt']['input']>;
    turnover_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    turnover_lt?: InputMaybe<Scalars['BigInt']['input']>;
    turnover_lte?: InputMaybe<Scalars['BigInt']['input']>;
    turnover_not?: InputMaybe<Scalars['BigInt']['input']>;
    turnover_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum Game_OrderBy {
    ActiveConditionsEntityIds = "_activeConditionsEntityIds",
    CanceledConditionsEntityIds = "_canceledConditionsEntityIds",
    PausedConditionsEntityIds = "_pausedConditionsEntityIds",
    ResolvedConditionsEntityIds = "_resolvedConditionsEntityIds",
    UpdatedAt = "_updatedAt",
    Conditions = "conditions",
    CreatedBlockNumber = "createdBlockNumber",
    CreatedBlockTimestamp = "createdBlockTimestamp",
    CreatedTxHash = "createdTxHash",
    GameId = "gameId",
    HasActiveConditions = "hasActiveConditions",
    Id = "id",
    League = "league",
    LiquidityPool = "liquidityPool",
    Participants = "participants",
    Provider = "provider",
    ResolvedBlockNumber = "resolvedBlockNumber",
    ResolvedBlockTimestamp = "resolvedBlockTimestamp",
    ResolvedTxHash = "resolvedTxHash",
    ShiftedBlockNumber = "shiftedBlockNumber",
    ShiftedBlockTimestamp = "shiftedBlockTimestamp",
    ShiftedTxHash = "shiftedTxHash",
    Slug = "slug",
    Sport = "sport",
    StartsAt = "startsAt",
    Status = "status",
    Title = "title",
    Turnover = "turnover"
}
export type League = {
    __typename?: 'League';
    activeGamesEntityIds?: Maybe<Array<Scalars['String']['output']>>;
    country: Country;
    games: Array<Game>;
    hasActiveGames: Scalars['Boolean']['output'];
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
    slug: Scalars['String']['output'];
    turnover: Scalars['BigInt']['output'];
};
export type LeagueGamesArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Game_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<Game_Filter>;
};
export type League_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    activeGamesEntityIds?: InputMaybe<Array<Scalars['String']['input']>>;
    activeGamesEntityIds_contains?: InputMaybe<Array<Scalars['String']['input']>>;
    activeGamesEntityIds_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
    activeGamesEntityIds_not?: InputMaybe<Array<Scalars['String']['input']>>;
    activeGamesEntityIds_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
    activeGamesEntityIds_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
    country?: InputMaybe<Scalars['String']['input']>;
    country_?: InputMaybe<Country_Filter>;
    country_contains?: InputMaybe<Scalars['String']['input']>;
    country_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    country_ends_with?: InputMaybe<Scalars['String']['input']>;
    country_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    country_gt?: InputMaybe<Scalars['String']['input']>;
    country_gte?: InputMaybe<Scalars['String']['input']>;
    country_in?: InputMaybe<Array<Scalars['String']['input']>>;
    country_lt?: InputMaybe<Scalars['String']['input']>;
    country_lte?: InputMaybe<Scalars['String']['input']>;
    country_not?: InputMaybe<Scalars['String']['input']>;
    country_not_contains?: InputMaybe<Scalars['String']['input']>;
    country_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    country_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    country_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    country_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    country_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    country_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    country_starts_with?: InputMaybe<Scalars['String']['input']>;
    country_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    games_?: InputMaybe<Game_Filter>;
    hasActiveGames?: InputMaybe<Scalars['Boolean']['input']>;
    hasActiveGames_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    hasActiveGames_not?: InputMaybe<Scalars['Boolean']['input']>;
    hasActiveGames_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    id?: InputMaybe<Scalars['ID']['input']>;
    id_gt?: InputMaybe<Scalars['ID']['input']>;
    id_gte?: InputMaybe<Scalars['ID']['input']>;
    id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    id_lt?: InputMaybe<Scalars['ID']['input']>;
    id_lte?: InputMaybe<Scalars['ID']['input']>;
    id_not?: InputMaybe<Scalars['ID']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    name?: InputMaybe<Scalars['String']['input']>;
    name_contains?: InputMaybe<Scalars['String']['input']>;
    name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    name_ends_with?: InputMaybe<Scalars['String']['input']>;
    name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    name_gt?: InputMaybe<Scalars['String']['input']>;
    name_gte?: InputMaybe<Scalars['String']['input']>;
    name_in?: InputMaybe<Array<Scalars['String']['input']>>;
    name_lt?: InputMaybe<Scalars['String']['input']>;
    name_lte?: InputMaybe<Scalars['String']['input']>;
    name_not?: InputMaybe<Scalars['String']['input']>;
    name_not_contains?: InputMaybe<Scalars['String']['input']>;
    name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    name_starts_with?: InputMaybe<Scalars['String']['input']>;
    name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
    slug_contains?: InputMaybe<Scalars['String']['input']>;
    slug_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    slug_ends_with?: InputMaybe<Scalars['String']['input']>;
    slug_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    slug_gt?: InputMaybe<Scalars['String']['input']>;
    slug_gte?: InputMaybe<Scalars['String']['input']>;
    slug_in?: InputMaybe<Array<Scalars['String']['input']>>;
    slug_lt?: InputMaybe<Scalars['String']['input']>;
    slug_lte?: InputMaybe<Scalars['String']['input']>;
    slug_not?: InputMaybe<Scalars['String']['input']>;
    slug_not_contains?: InputMaybe<Scalars['String']['input']>;
    slug_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    slug_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    slug_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    slug_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    slug_starts_with?: InputMaybe<Scalars['String']['input']>;
    slug_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    turnover?: InputMaybe<Scalars['BigInt']['input']>;
    turnover_gt?: InputMaybe<Scalars['BigInt']['input']>;
    turnover_gte?: InputMaybe<Scalars['BigInt']['input']>;
    turnover_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    turnover_lt?: InputMaybe<Scalars['BigInt']['input']>;
    turnover_lte?: InputMaybe<Scalars['BigInt']['input']>;
    turnover_not?: InputMaybe<Scalars['BigInt']['input']>;
    turnover_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum League_OrderBy {
    ActiveGamesEntityIds = "activeGamesEntityIds",
    Country = "country",
    Games = "games",
    HasActiveGames = "hasActiveGames",
    Id = "id",
    Name = "name",
    Slug = "slug",
    Turnover = "turnover"
}
export type LiquidityPoolContract = {
    __typename?: 'LiquidityPoolContract';
    address: Scalars['String']['output'];
    apr: Scalars['BigDecimal']['output'];
    asset: Scalars['String']['output'];
    betsAmount: Scalars['BigInt']['output'];
    betsCount: Scalars['BigInt']['output'];
    chainId: Scalars['Int']['output'];
    chainName: Scalars['String']['output'];
    coreAddresses?: Maybe<Array<Scalars['String']['output']>>;
    cores: Array<CoreContract>;
    daysSinceDeployment: Scalars['BigInt']['output'];
    depositedAmount: Scalars['BigInt']['output'];
    depositedWithStakingAmount: Scalars['BigInt']['output'];
    firstCalculatedBlockNumber: Scalars['BigInt']['output'];
    firstCalculatedBlockTimestamp: Scalars['BigInt']['output'];
    id: Scalars['ID']['output'];
    lastCalculatedBlockNumber: Scalars['BigInt']['output'];
    lastCalculatedBlockTimestamp: Scalars['BigInt']['output'];
    liquidityManager?: Maybe<Scalars['String']['output']>;
    nfts: Array<LiquidityPoolNft>;
    /** (betsAmount - wonBetsAmount) * Xprofit / (depositedAmount - withdrawnAmount) / daysSinceDeployment * 365 */
    rawApr: Scalars['BigInt']['output'];
    /** all funds on Liquidity Pool */
    rawTvl: Scalars['BigInt']['output'];
    token: Scalars['String']['output'];
    tokenDecimals: Scalars['Int']['output'];
    tvl: Scalars['BigDecimal']['output'];
    type: LiquidityPoolContractType;
    withdrawTimeout: Scalars['BigInt']['output'];
    withdrawnAmount: Scalars['BigInt']['output'];
    withdrawnWithStakingAmount: Scalars['BigInt']['output'];
    wonBetsAmount: Scalars['BigInt']['output'];
    wonBetsCount: Scalars['BigInt']['output'];
};
export type LiquidityPoolContractCoresArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<CoreContract_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<CoreContract_Filter>;
};
export type LiquidityPoolContractNftsArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<LiquidityPoolNft_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<LiquidityPoolNft_Filter>;
};
export declare enum LiquidityPoolContractType {
    V1 = "V1",
    V2 = "V2"
}
export type LiquidityPoolContract_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    address?: InputMaybe<Scalars['String']['input']>;
    address_contains?: InputMaybe<Scalars['String']['input']>;
    address_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    address_ends_with?: InputMaybe<Scalars['String']['input']>;
    address_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    address_gt?: InputMaybe<Scalars['String']['input']>;
    address_gte?: InputMaybe<Scalars['String']['input']>;
    address_in?: InputMaybe<Array<Scalars['String']['input']>>;
    address_lt?: InputMaybe<Scalars['String']['input']>;
    address_lte?: InputMaybe<Scalars['String']['input']>;
    address_not?: InputMaybe<Scalars['String']['input']>;
    address_not_contains?: InputMaybe<Scalars['String']['input']>;
    address_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    address_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    address_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    address_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    address_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    address_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    address_starts_with?: InputMaybe<Scalars['String']['input']>;
    address_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    apr?: InputMaybe<Scalars['BigDecimal']['input']>;
    apr_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
    apr_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
    apr_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    apr_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
    apr_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
    apr_not?: InputMaybe<Scalars['BigDecimal']['input']>;
    apr_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    asset?: InputMaybe<Scalars['String']['input']>;
    asset_contains?: InputMaybe<Scalars['String']['input']>;
    asset_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    asset_ends_with?: InputMaybe<Scalars['String']['input']>;
    asset_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    asset_gt?: InputMaybe<Scalars['String']['input']>;
    asset_gte?: InputMaybe<Scalars['String']['input']>;
    asset_in?: InputMaybe<Array<Scalars['String']['input']>>;
    asset_lt?: InputMaybe<Scalars['String']['input']>;
    asset_lte?: InputMaybe<Scalars['String']['input']>;
    asset_not?: InputMaybe<Scalars['String']['input']>;
    asset_not_contains?: InputMaybe<Scalars['String']['input']>;
    asset_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    asset_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    asset_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    asset_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    asset_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    asset_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    asset_starts_with?: InputMaybe<Scalars['String']['input']>;
    asset_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    betsAmount?: InputMaybe<Scalars['BigInt']['input']>;
    betsAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    betsAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    betsAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    betsAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    betsAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    betsAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
    betsAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    betsCount?: InputMaybe<Scalars['BigInt']['input']>;
    betsCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    betsCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    betsCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    betsCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    betsCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    betsCount_not?: InputMaybe<Scalars['BigInt']['input']>;
    betsCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    chainId?: InputMaybe<Scalars['Int']['input']>;
    chainId_gt?: InputMaybe<Scalars['Int']['input']>;
    chainId_gte?: InputMaybe<Scalars['Int']['input']>;
    chainId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    chainId_lt?: InputMaybe<Scalars['Int']['input']>;
    chainId_lte?: InputMaybe<Scalars['Int']['input']>;
    chainId_not?: InputMaybe<Scalars['Int']['input']>;
    chainId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    chainName?: InputMaybe<Scalars['String']['input']>;
    chainName_contains?: InputMaybe<Scalars['String']['input']>;
    chainName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    chainName_ends_with?: InputMaybe<Scalars['String']['input']>;
    chainName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    chainName_gt?: InputMaybe<Scalars['String']['input']>;
    chainName_gte?: InputMaybe<Scalars['String']['input']>;
    chainName_in?: InputMaybe<Array<Scalars['String']['input']>>;
    chainName_lt?: InputMaybe<Scalars['String']['input']>;
    chainName_lte?: InputMaybe<Scalars['String']['input']>;
    chainName_not?: InputMaybe<Scalars['String']['input']>;
    chainName_not_contains?: InputMaybe<Scalars['String']['input']>;
    chainName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    chainName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    chainName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    chainName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    chainName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    chainName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    chainName_starts_with?: InputMaybe<Scalars['String']['input']>;
    chainName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    coreAddresses?: InputMaybe<Array<Scalars['String']['input']>>;
    coreAddresses_contains?: InputMaybe<Array<Scalars['String']['input']>>;
    coreAddresses_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
    coreAddresses_not?: InputMaybe<Array<Scalars['String']['input']>>;
    coreAddresses_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
    coreAddresses_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
    cores_?: InputMaybe<CoreContract_Filter>;
    daysSinceDeployment?: InputMaybe<Scalars['BigInt']['input']>;
    daysSinceDeployment_gt?: InputMaybe<Scalars['BigInt']['input']>;
    daysSinceDeployment_gte?: InputMaybe<Scalars['BigInt']['input']>;
    daysSinceDeployment_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    daysSinceDeployment_lt?: InputMaybe<Scalars['BigInt']['input']>;
    daysSinceDeployment_lte?: InputMaybe<Scalars['BigInt']['input']>;
    daysSinceDeployment_not?: InputMaybe<Scalars['BigInt']['input']>;
    daysSinceDeployment_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    depositedAmount?: InputMaybe<Scalars['BigInt']['input']>;
    depositedAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    depositedAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    depositedAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    depositedAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    depositedAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    depositedAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
    depositedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    depositedWithStakingAmount?: InputMaybe<Scalars['BigInt']['input']>;
    depositedWithStakingAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    depositedWithStakingAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    depositedWithStakingAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    depositedWithStakingAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    depositedWithStakingAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    depositedWithStakingAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
    depositedWithStakingAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    firstCalculatedBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    firstCalculatedBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    firstCalculatedBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    firstCalculatedBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    firstCalculatedBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    firstCalculatedBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    firstCalculatedBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    firstCalculatedBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    firstCalculatedBlockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    firstCalculatedBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    firstCalculatedBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    firstCalculatedBlockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    firstCalculatedBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    firstCalculatedBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    firstCalculatedBlockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    firstCalculatedBlockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['ID']['input']>;
    id_gt?: InputMaybe<Scalars['ID']['input']>;
    id_gte?: InputMaybe<Scalars['ID']['input']>;
    id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    id_lt?: InputMaybe<Scalars['ID']['input']>;
    id_lte?: InputMaybe<Scalars['ID']['input']>;
    id_not?: InputMaybe<Scalars['ID']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    lastCalculatedBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    lastCalculatedBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    lastCalculatedBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    lastCalculatedBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    lastCalculatedBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    lastCalculatedBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    lastCalculatedBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    lastCalculatedBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    lastCalculatedBlockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    lastCalculatedBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    lastCalculatedBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    lastCalculatedBlockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    lastCalculatedBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    lastCalculatedBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    lastCalculatedBlockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    lastCalculatedBlockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    liquidityManager?: InputMaybe<Scalars['String']['input']>;
    liquidityManager_contains?: InputMaybe<Scalars['String']['input']>;
    liquidityManager_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    liquidityManager_ends_with?: InputMaybe<Scalars['String']['input']>;
    liquidityManager_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    liquidityManager_gt?: InputMaybe<Scalars['String']['input']>;
    liquidityManager_gte?: InputMaybe<Scalars['String']['input']>;
    liquidityManager_in?: InputMaybe<Array<Scalars['String']['input']>>;
    liquidityManager_lt?: InputMaybe<Scalars['String']['input']>;
    liquidityManager_lte?: InputMaybe<Scalars['String']['input']>;
    liquidityManager_not?: InputMaybe<Scalars['String']['input']>;
    liquidityManager_not_contains?: InputMaybe<Scalars['String']['input']>;
    liquidityManager_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    liquidityManager_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    liquidityManager_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    liquidityManager_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    liquidityManager_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    liquidityManager_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    liquidityManager_starts_with?: InputMaybe<Scalars['String']['input']>;
    liquidityManager_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    nfts_?: InputMaybe<LiquidityPoolNft_Filter>;
    rawApr?: InputMaybe<Scalars['BigInt']['input']>;
    rawApr_gt?: InputMaybe<Scalars['BigInt']['input']>;
    rawApr_gte?: InputMaybe<Scalars['BigInt']['input']>;
    rawApr_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawApr_lt?: InputMaybe<Scalars['BigInt']['input']>;
    rawApr_lte?: InputMaybe<Scalars['BigInt']['input']>;
    rawApr_not?: InputMaybe<Scalars['BigInt']['input']>;
    rawApr_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawTvl?: InputMaybe<Scalars['BigInt']['input']>;
    rawTvl_gt?: InputMaybe<Scalars['BigInt']['input']>;
    rawTvl_gte?: InputMaybe<Scalars['BigInt']['input']>;
    rawTvl_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawTvl_lt?: InputMaybe<Scalars['BigInt']['input']>;
    rawTvl_lte?: InputMaybe<Scalars['BigInt']['input']>;
    rawTvl_not?: InputMaybe<Scalars['BigInt']['input']>;
    rawTvl_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    token?: InputMaybe<Scalars['String']['input']>;
    tokenDecimals?: InputMaybe<Scalars['Int']['input']>;
    tokenDecimals_gt?: InputMaybe<Scalars['Int']['input']>;
    tokenDecimals_gte?: InputMaybe<Scalars['Int']['input']>;
    tokenDecimals_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    tokenDecimals_lt?: InputMaybe<Scalars['Int']['input']>;
    tokenDecimals_lte?: InputMaybe<Scalars['Int']['input']>;
    tokenDecimals_not?: InputMaybe<Scalars['Int']['input']>;
    tokenDecimals_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    token_contains?: InputMaybe<Scalars['String']['input']>;
    token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    token_ends_with?: InputMaybe<Scalars['String']['input']>;
    token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    token_gt?: InputMaybe<Scalars['String']['input']>;
    token_gte?: InputMaybe<Scalars['String']['input']>;
    token_in?: InputMaybe<Array<Scalars['String']['input']>>;
    token_lt?: InputMaybe<Scalars['String']['input']>;
    token_lte?: InputMaybe<Scalars['String']['input']>;
    token_not?: InputMaybe<Scalars['String']['input']>;
    token_not_contains?: InputMaybe<Scalars['String']['input']>;
    token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    token_starts_with?: InputMaybe<Scalars['String']['input']>;
    token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    tvl?: InputMaybe<Scalars['BigDecimal']['input']>;
    tvl_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
    tvl_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
    tvl_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    tvl_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
    tvl_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
    tvl_not?: InputMaybe<Scalars['BigDecimal']['input']>;
    tvl_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    type?: InputMaybe<LiquidityPoolContractType>;
    type_in?: InputMaybe<Array<LiquidityPoolContractType>>;
    type_not?: InputMaybe<LiquidityPoolContractType>;
    type_not_in?: InputMaybe<Array<LiquidityPoolContractType>>;
    withdrawTimeout?: InputMaybe<Scalars['BigInt']['input']>;
    withdrawTimeout_gt?: InputMaybe<Scalars['BigInt']['input']>;
    withdrawTimeout_gte?: InputMaybe<Scalars['BigInt']['input']>;
    withdrawTimeout_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    withdrawTimeout_lt?: InputMaybe<Scalars['BigInt']['input']>;
    withdrawTimeout_lte?: InputMaybe<Scalars['BigInt']['input']>;
    withdrawTimeout_not?: InputMaybe<Scalars['BigInt']['input']>;
    withdrawTimeout_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    withdrawnAmount?: InputMaybe<Scalars['BigInt']['input']>;
    withdrawnAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    withdrawnAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    withdrawnAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    withdrawnAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    withdrawnAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    withdrawnAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
    withdrawnAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    withdrawnWithStakingAmount?: InputMaybe<Scalars['BigInt']['input']>;
    withdrawnWithStakingAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    withdrawnWithStakingAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    withdrawnWithStakingAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    withdrawnWithStakingAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    withdrawnWithStakingAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    withdrawnWithStakingAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
    withdrawnWithStakingAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    wonBetsAmount?: InputMaybe<Scalars['BigInt']['input']>;
    wonBetsAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    wonBetsAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    wonBetsAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    wonBetsAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    wonBetsAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    wonBetsAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
    wonBetsAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    wonBetsCount?: InputMaybe<Scalars['BigInt']['input']>;
    wonBetsCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    wonBetsCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    wonBetsCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    wonBetsCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    wonBetsCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    wonBetsCount_not?: InputMaybe<Scalars['BigInt']['input']>;
    wonBetsCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum LiquidityPoolContract_OrderBy {
    Address = "address",
    Apr = "apr",
    Asset = "asset",
    BetsAmount = "betsAmount",
    BetsCount = "betsCount",
    ChainId = "chainId",
    ChainName = "chainName",
    CoreAddresses = "coreAddresses",
    Cores = "cores",
    DaysSinceDeployment = "daysSinceDeployment",
    DepositedAmount = "depositedAmount",
    DepositedWithStakingAmount = "depositedWithStakingAmount",
    FirstCalculatedBlockNumber = "firstCalculatedBlockNumber",
    FirstCalculatedBlockTimestamp = "firstCalculatedBlockTimestamp",
    Id = "id",
    LastCalculatedBlockNumber = "lastCalculatedBlockNumber",
    LastCalculatedBlockTimestamp = "lastCalculatedBlockTimestamp",
    LiquidityManager = "liquidityManager",
    Nfts = "nfts",
    RawApr = "rawApr",
    RawTvl = "rawTvl",
    Token = "token",
    TokenDecimals = "tokenDecimals",
    Tvl = "tvl",
    Type = "type",
    WithdrawTimeout = "withdrawTimeout",
    WithdrawnAmount = "withdrawnAmount",
    WithdrawnWithStakingAmount = "withdrawnWithStakingAmount",
    WonBetsAmount = "wonBetsAmount",
    WonBetsCount = "wonBetsCount"
}
export type LiquidityPoolNft = {
    __typename?: 'LiquidityPoolNft';
    createBlockNumber: Scalars['BigInt']['output'];
    createBlockTimestamp: Scalars['BigInt']['output'];
    depositedAmount: Scalars['BigDecimal']['output'];
    historicalOwners: Array<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    isFullyWithdrawn: Scalars['Boolean']['output'];
    liquidityPool: LiquidityPoolContract;
    nftId: Scalars['BigInt']['output'];
    owner: Scalars['String']['output'];
    rawDepositedAmount: Scalars['BigInt']['output'];
    rawWithdrawnAmount: Scalars['BigInt']['output'];
    transactions: Array<LiquidityPoolTransaction>;
    withdrawTimeout: Scalars['BigInt']['output'];
    withdrawnAmount: Scalars['BigDecimal']['output'];
};
export type LiquidityPoolNftTransactionsArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<LiquidityPoolTransaction_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<LiquidityPoolTransaction_Filter>;
};
export type LiquidityPoolNft_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    createBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    createBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    createBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    createBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    createBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    createBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    createBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    createBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    createBlockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    createBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    createBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    createBlockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    createBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    createBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    createBlockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    createBlockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    depositedAmount?: InputMaybe<Scalars['BigDecimal']['input']>;
    depositedAmount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
    depositedAmount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
    depositedAmount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    depositedAmount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
    depositedAmount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
    depositedAmount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
    depositedAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    historicalOwners?: InputMaybe<Array<Scalars['String']['input']>>;
    historicalOwners_contains?: InputMaybe<Array<Scalars['String']['input']>>;
    historicalOwners_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
    historicalOwners_not?: InputMaybe<Array<Scalars['String']['input']>>;
    historicalOwners_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
    historicalOwners_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
    id?: InputMaybe<Scalars['ID']['input']>;
    id_gt?: InputMaybe<Scalars['ID']['input']>;
    id_gte?: InputMaybe<Scalars['ID']['input']>;
    id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    id_lt?: InputMaybe<Scalars['ID']['input']>;
    id_lte?: InputMaybe<Scalars['ID']['input']>;
    id_not?: InputMaybe<Scalars['ID']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    isFullyWithdrawn?: InputMaybe<Scalars['Boolean']['input']>;
    isFullyWithdrawn_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    isFullyWithdrawn_not?: InputMaybe<Scalars['Boolean']['input']>;
    isFullyWithdrawn_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    liquidityPool?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_?: InputMaybe<LiquidityPoolContract_Filter>;
    liquidityPool_contains?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_ends_with?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_gt?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_gte?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_in?: InputMaybe<Array<Scalars['String']['input']>>;
    liquidityPool_lt?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_lte?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_not?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_not_contains?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    liquidityPool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_starts_with?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    nftId?: InputMaybe<Scalars['BigInt']['input']>;
    nftId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    nftId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    nftId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    nftId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    nftId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    nftId_not?: InputMaybe<Scalars['BigInt']['input']>;
    nftId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    owner?: InputMaybe<Scalars['String']['input']>;
    owner_contains?: InputMaybe<Scalars['String']['input']>;
    owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_ends_with?: InputMaybe<Scalars['String']['input']>;
    owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_gt?: InputMaybe<Scalars['String']['input']>;
    owner_gte?: InputMaybe<Scalars['String']['input']>;
    owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
    owner_lt?: InputMaybe<Scalars['String']['input']>;
    owner_lte?: InputMaybe<Scalars['String']['input']>;
    owner_not?: InputMaybe<Scalars['String']['input']>;
    owner_not_contains?: InputMaybe<Scalars['String']['input']>;
    owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_starts_with?: InputMaybe<Scalars['String']['input']>;
    owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    rawDepositedAmount?: InputMaybe<Scalars['BigInt']['input']>;
    rawDepositedAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    rawDepositedAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    rawDepositedAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawDepositedAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    rawDepositedAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    rawDepositedAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
    rawDepositedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawWithdrawnAmount?: InputMaybe<Scalars['BigInt']['input']>;
    rawWithdrawnAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    rawWithdrawnAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    rawWithdrawnAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawWithdrawnAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    rawWithdrawnAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    rawWithdrawnAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
    rawWithdrawnAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    transactions_?: InputMaybe<LiquidityPoolTransaction_Filter>;
    withdrawTimeout?: InputMaybe<Scalars['BigInt']['input']>;
    withdrawTimeout_gt?: InputMaybe<Scalars['BigInt']['input']>;
    withdrawTimeout_gte?: InputMaybe<Scalars['BigInt']['input']>;
    withdrawTimeout_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    withdrawTimeout_lt?: InputMaybe<Scalars['BigInt']['input']>;
    withdrawTimeout_lte?: InputMaybe<Scalars['BigInt']['input']>;
    withdrawTimeout_not?: InputMaybe<Scalars['BigInt']['input']>;
    withdrawTimeout_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    withdrawnAmount?: InputMaybe<Scalars['BigDecimal']['input']>;
    withdrawnAmount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
    withdrawnAmount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
    withdrawnAmount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    withdrawnAmount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
    withdrawnAmount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
    withdrawnAmount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
    withdrawnAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};
export declare enum LiquidityPoolNft_OrderBy {
    CreateBlockNumber = "createBlockNumber",
    CreateBlockTimestamp = "createBlockTimestamp",
    DepositedAmount = "depositedAmount",
    HistoricalOwners = "historicalOwners",
    Id = "id",
    IsFullyWithdrawn = "isFullyWithdrawn",
    LiquidityPool = "liquidityPool",
    NftId = "nftId",
    Owner = "owner",
    RawDepositedAmount = "rawDepositedAmount",
    RawWithdrawnAmount = "rawWithdrawnAmount",
    Transactions = "transactions",
    WithdrawTimeout = "withdrawTimeout",
    WithdrawnAmount = "withdrawnAmount"
}
export type LiquidityPoolTransaction = {
    __typename?: 'LiquidityPoolTransaction';
    account: Scalars['String']['output'];
    amount: Scalars['BigDecimal']['output'];
    blockNumber: Scalars['BigInt']['output'];
    blockTimestamp: Scalars['BigInt']['output'];
    id: Scalars['ID']['output'];
    liquidityPool: LiquidityPoolContract;
    nft: LiquidityPoolNft;
    rawAmount: Scalars['BigInt']['output'];
    txHash: Scalars['String']['output'];
    type: LiquidityPoolTransactionType;
};
export declare enum LiquidityPoolTransactionType {
    Deposit = "Deposit",
    Withdrawal = "Withdrawal"
}
export type LiquidityPoolTransaction_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    account?: InputMaybe<Scalars['String']['input']>;
    account_contains?: InputMaybe<Scalars['String']['input']>;
    account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    account_ends_with?: InputMaybe<Scalars['String']['input']>;
    account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    account_gt?: InputMaybe<Scalars['String']['input']>;
    account_gte?: InputMaybe<Scalars['String']['input']>;
    account_in?: InputMaybe<Array<Scalars['String']['input']>>;
    account_lt?: InputMaybe<Scalars['String']['input']>;
    account_lte?: InputMaybe<Scalars['String']['input']>;
    account_not?: InputMaybe<Scalars['String']['input']>;
    account_not_contains?: InputMaybe<Scalars['String']['input']>;
    account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    account_starts_with?: InputMaybe<Scalars['String']['input']>;
    account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    amount?: InputMaybe<Scalars['BigDecimal']['input']>;
    amount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
    amount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
    amount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    amount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
    amount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
    amount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
    amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['ID']['input']>;
    id_gt?: InputMaybe<Scalars['ID']['input']>;
    id_gte?: InputMaybe<Scalars['ID']['input']>;
    id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    id_lt?: InputMaybe<Scalars['ID']['input']>;
    id_lte?: InputMaybe<Scalars['ID']['input']>;
    id_not?: InputMaybe<Scalars['ID']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    liquidityPool?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_?: InputMaybe<LiquidityPoolContract_Filter>;
    liquidityPool_contains?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_ends_with?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_gt?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_gte?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_in?: InputMaybe<Array<Scalars['String']['input']>>;
    liquidityPool_lt?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_lte?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_not?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_not_contains?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    liquidityPool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_starts_with?: InputMaybe<Scalars['String']['input']>;
    liquidityPool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    nft?: InputMaybe<Scalars['String']['input']>;
    nft_?: InputMaybe<LiquidityPoolNft_Filter>;
    nft_contains?: InputMaybe<Scalars['String']['input']>;
    nft_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    nft_ends_with?: InputMaybe<Scalars['String']['input']>;
    nft_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    nft_gt?: InputMaybe<Scalars['String']['input']>;
    nft_gte?: InputMaybe<Scalars['String']['input']>;
    nft_in?: InputMaybe<Array<Scalars['String']['input']>>;
    nft_lt?: InputMaybe<Scalars['String']['input']>;
    nft_lte?: InputMaybe<Scalars['String']['input']>;
    nft_not?: InputMaybe<Scalars['String']['input']>;
    nft_not_contains?: InputMaybe<Scalars['String']['input']>;
    nft_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    nft_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    nft_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    nft_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    nft_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    nft_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    nft_starts_with?: InputMaybe<Scalars['String']['input']>;
    nft_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    rawAmount?: InputMaybe<Scalars['BigInt']['input']>;
    rawAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    rawAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    rawAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    rawAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    rawAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
    rawAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    txHash?: InputMaybe<Scalars['String']['input']>;
    txHash_contains?: InputMaybe<Scalars['String']['input']>;
    txHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    txHash_ends_with?: InputMaybe<Scalars['String']['input']>;
    txHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    txHash_gt?: InputMaybe<Scalars['String']['input']>;
    txHash_gte?: InputMaybe<Scalars['String']['input']>;
    txHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
    txHash_lt?: InputMaybe<Scalars['String']['input']>;
    txHash_lte?: InputMaybe<Scalars['String']['input']>;
    txHash_not?: InputMaybe<Scalars['String']['input']>;
    txHash_not_contains?: InputMaybe<Scalars['String']['input']>;
    txHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    txHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    txHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    txHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    txHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    txHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    txHash_starts_with?: InputMaybe<Scalars['String']['input']>;
    txHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    type?: InputMaybe<LiquidityPoolTransactionType>;
    type_in?: InputMaybe<Array<LiquidityPoolTransactionType>>;
    type_not?: InputMaybe<LiquidityPoolTransactionType>;
    type_not_in?: InputMaybe<Array<LiquidityPoolTransactionType>>;
};
export declare enum LiquidityPoolTransaction_OrderBy {
    Account = "account",
    Amount = "amount",
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    LiquidityPool = "liquidityPool",
    Nft = "nft",
    RawAmount = "rawAmount",
    TxHash = "txHash",
    Type = "type"
}
export type LiveBet = {
    __typename?: 'LiveBet';
    _canceledSubBetsCount: Scalars['Int']['output'];
    _conditionIds: Array<Scalars['BigInt']['output']>;
    _conditions: Array<LiveCondition>;
    _gamesIds: Array<Scalars['String']['output']>;
    _isFreebet: Scalars['Boolean']['output'];
    _lostSubBetsCount: Scalars['Int']['output'];
    _marginsForSettle?: Maybe<Scalars['String']['output']>;
    _oddsDecimals: Scalars['Int']['output'];
    _subBetsCount: Scalars['Int']['output'];
    _tokenDecimals: Scalars['Int']['output'];
    _updatedAt: Scalars['BigInt']['output'];
    _wonSubBetsCount: Scalars['Int']['output'];
    actor: Scalars['String']['output'];
    affiliate?: Maybe<Scalars['String']['output']>;
    amount: Scalars['BigDecimal']['output'];
    betId: Scalars['BigInt']['output'];
    bettor: Scalars['String']['output'];
    core: CoreContract;
    createdBlockNumber: Scalars['BigInt']['output'];
    createdBlockTimestamp: Scalars['BigInt']['output'];
    createdTxHash: Scalars['String']['output'];
    freebet?: Maybe<Freebet>;
    /** Core contract address + Bet Id */
    id: Scalars['ID']['output'];
    isRedeemable: Scalars['Boolean']['output'];
    isRedeemed: Scalars['Boolean']['output'];
    nonce?: Maybe<Scalars['BigInt']['output']>;
    odds: Scalars['BigDecimal']['output'];
    owner: Scalars['String']['output'];
    payout?: Maybe<Scalars['BigDecimal']['output']>;
    payoutLimit: Scalars['BigDecimal']['output'];
    potentialPayout: Scalars['BigDecimal']['output'];
    rawAmount: Scalars['BigInt']['output'];
    rawOdds: Scalars['BigInt']['output'];
    rawPayout?: Maybe<Scalars['BigInt']['output']>;
    rawPayoutLimit: Scalars['BigInt']['output'];
    rawPotentialPayout: Scalars['BigInt']['output'];
    rawSettledMargin?: Maybe<Scalars['BigInt']['output']>;
    rawSettledOdds?: Maybe<Scalars['BigInt']['output']>;
    redeemedBlockNumber?: Maybe<Scalars['BigInt']['output']>;
    redeemedBlockTimestamp?: Maybe<Scalars['BigInt']['output']>;
    redeemedTxHash?: Maybe<Scalars['String']['output']>;
    resolvedBlockNumber?: Maybe<Scalars['BigInt']['output']>;
    resolvedBlockTimestamp?: Maybe<Scalars['BigInt']['output']>;
    resolvedTxHash?: Maybe<Scalars['String']['output']>;
    result?: Maybe<BetResult>;
    /** when the last game from all sub bets starts at + 2h */
    selections: Array<LiveSelection>;
    settledMargin?: Maybe<Scalars['BigDecimal']['output']>;
    settledOdds?: Maybe<Scalars['BigDecimal']['output']>;
    status: BetStatus;
};
export type LiveBet_ConditionsArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<LiveCondition_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<LiveCondition_Filter>;
};
export type LiveBetSelectionsArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<LiveSelection_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<LiveSelection_Filter>;
};
export type LiveBet_Filter = {
    _canceledSubBetsCount?: InputMaybe<Scalars['Int']['input']>;
    _canceledSubBetsCount_gt?: InputMaybe<Scalars['Int']['input']>;
    _canceledSubBetsCount_gte?: InputMaybe<Scalars['Int']['input']>;
    _canceledSubBetsCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    _canceledSubBetsCount_lt?: InputMaybe<Scalars['Int']['input']>;
    _canceledSubBetsCount_lte?: InputMaybe<Scalars['Int']['input']>;
    _canceledSubBetsCount_not?: InputMaybe<Scalars['Int']['input']>;
    _canceledSubBetsCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    _conditionIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    _conditionIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    _conditionIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    _conditionIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    _conditionIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    _conditionIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    _conditions?: InputMaybe<Array<Scalars['String']['input']>>;
    _conditions_?: InputMaybe<LiveCondition_Filter>;
    _conditions_contains?: InputMaybe<Array<Scalars['String']['input']>>;
    _conditions_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
    _conditions_not?: InputMaybe<Array<Scalars['String']['input']>>;
    _conditions_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
    _conditions_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
    _gamesIds?: InputMaybe<Array<Scalars['String']['input']>>;
    _gamesIds_contains?: InputMaybe<Array<Scalars['String']['input']>>;
    _gamesIds_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
    _gamesIds_not?: InputMaybe<Array<Scalars['String']['input']>>;
    _gamesIds_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
    _gamesIds_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
    _isFreebet?: InputMaybe<Scalars['Boolean']['input']>;
    _isFreebet_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    _isFreebet_not?: InputMaybe<Scalars['Boolean']['input']>;
    _isFreebet_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    _lostSubBetsCount?: InputMaybe<Scalars['Int']['input']>;
    _lostSubBetsCount_gt?: InputMaybe<Scalars['Int']['input']>;
    _lostSubBetsCount_gte?: InputMaybe<Scalars['Int']['input']>;
    _lostSubBetsCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    _lostSubBetsCount_lt?: InputMaybe<Scalars['Int']['input']>;
    _lostSubBetsCount_lte?: InputMaybe<Scalars['Int']['input']>;
    _lostSubBetsCount_not?: InputMaybe<Scalars['Int']['input']>;
    _lostSubBetsCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    _marginsForSettle?: InputMaybe<Scalars['String']['input']>;
    _marginsForSettle_contains?: InputMaybe<Scalars['String']['input']>;
    _marginsForSettle_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    _marginsForSettle_ends_with?: InputMaybe<Scalars['String']['input']>;
    _marginsForSettle_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    _marginsForSettle_gt?: InputMaybe<Scalars['String']['input']>;
    _marginsForSettle_gte?: InputMaybe<Scalars['String']['input']>;
    _marginsForSettle_in?: InputMaybe<Array<Scalars['String']['input']>>;
    _marginsForSettle_lt?: InputMaybe<Scalars['String']['input']>;
    _marginsForSettle_lte?: InputMaybe<Scalars['String']['input']>;
    _marginsForSettle_not?: InputMaybe<Scalars['String']['input']>;
    _marginsForSettle_not_contains?: InputMaybe<Scalars['String']['input']>;
    _marginsForSettle_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    _marginsForSettle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    _marginsForSettle_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    _marginsForSettle_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    _marginsForSettle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    _marginsForSettle_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    _marginsForSettle_starts_with?: InputMaybe<Scalars['String']['input']>;
    _marginsForSettle_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    _oddsDecimals?: InputMaybe<Scalars['Int']['input']>;
    _oddsDecimals_gt?: InputMaybe<Scalars['Int']['input']>;
    _oddsDecimals_gte?: InputMaybe<Scalars['Int']['input']>;
    _oddsDecimals_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    _oddsDecimals_lt?: InputMaybe<Scalars['Int']['input']>;
    _oddsDecimals_lte?: InputMaybe<Scalars['Int']['input']>;
    _oddsDecimals_not?: InputMaybe<Scalars['Int']['input']>;
    _oddsDecimals_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    _subBetsCount?: InputMaybe<Scalars['Int']['input']>;
    _subBetsCount_gt?: InputMaybe<Scalars['Int']['input']>;
    _subBetsCount_gte?: InputMaybe<Scalars['Int']['input']>;
    _subBetsCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    _subBetsCount_lt?: InputMaybe<Scalars['Int']['input']>;
    _subBetsCount_lte?: InputMaybe<Scalars['Int']['input']>;
    _subBetsCount_not?: InputMaybe<Scalars['Int']['input']>;
    _subBetsCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    _tokenDecimals?: InputMaybe<Scalars['Int']['input']>;
    _tokenDecimals_gt?: InputMaybe<Scalars['Int']['input']>;
    _tokenDecimals_gte?: InputMaybe<Scalars['Int']['input']>;
    _tokenDecimals_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    _tokenDecimals_lt?: InputMaybe<Scalars['Int']['input']>;
    _tokenDecimals_lte?: InputMaybe<Scalars['Int']['input']>;
    _tokenDecimals_not?: InputMaybe<Scalars['Int']['input']>;
    _tokenDecimals_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    _updatedAt?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    _updatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    _wonSubBetsCount?: InputMaybe<Scalars['Int']['input']>;
    _wonSubBetsCount_gt?: InputMaybe<Scalars['Int']['input']>;
    _wonSubBetsCount_gte?: InputMaybe<Scalars['Int']['input']>;
    _wonSubBetsCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    _wonSubBetsCount_lt?: InputMaybe<Scalars['Int']['input']>;
    _wonSubBetsCount_lte?: InputMaybe<Scalars['Int']['input']>;
    _wonSubBetsCount_not?: InputMaybe<Scalars['Int']['input']>;
    _wonSubBetsCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    actor?: InputMaybe<Scalars['String']['input']>;
    actor_contains?: InputMaybe<Scalars['String']['input']>;
    actor_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    actor_ends_with?: InputMaybe<Scalars['String']['input']>;
    actor_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    actor_gt?: InputMaybe<Scalars['String']['input']>;
    actor_gte?: InputMaybe<Scalars['String']['input']>;
    actor_in?: InputMaybe<Array<Scalars['String']['input']>>;
    actor_lt?: InputMaybe<Scalars['String']['input']>;
    actor_lte?: InputMaybe<Scalars['String']['input']>;
    actor_not?: InputMaybe<Scalars['String']['input']>;
    actor_not_contains?: InputMaybe<Scalars['String']['input']>;
    actor_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    actor_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    actor_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    actor_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    actor_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    actor_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    actor_starts_with?: InputMaybe<Scalars['String']['input']>;
    actor_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    affiliate?: InputMaybe<Scalars['String']['input']>;
    affiliate_contains?: InputMaybe<Scalars['String']['input']>;
    affiliate_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    affiliate_ends_with?: InputMaybe<Scalars['String']['input']>;
    affiliate_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    affiliate_gt?: InputMaybe<Scalars['String']['input']>;
    affiliate_gte?: InputMaybe<Scalars['String']['input']>;
    affiliate_in?: InputMaybe<Array<Scalars['String']['input']>>;
    affiliate_lt?: InputMaybe<Scalars['String']['input']>;
    affiliate_lte?: InputMaybe<Scalars['String']['input']>;
    affiliate_not?: InputMaybe<Scalars['String']['input']>;
    affiliate_not_contains?: InputMaybe<Scalars['String']['input']>;
    affiliate_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    affiliate_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    affiliate_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    affiliate_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    affiliate_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    affiliate_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    affiliate_starts_with?: InputMaybe<Scalars['String']['input']>;
    affiliate_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    amount?: InputMaybe<Scalars['BigDecimal']['input']>;
    amount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
    amount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
    amount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    amount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
    amount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
    amount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
    amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    betId?: InputMaybe<Scalars['BigInt']['input']>;
    betId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    betId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    betId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    betId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    betId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    betId_not?: InputMaybe<Scalars['BigInt']['input']>;
    betId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    bettor?: InputMaybe<Scalars['String']['input']>;
    bettor_contains?: InputMaybe<Scalars['String']['input']>;
    bettor_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    bettor_ends_with?: InputMaybe<Scalars['String']['input']>;
    bettor_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    bettor_gt?: InputMaybe<Scalars['String']['input']>;
    bettor_gte?: InputMaybe<Scalars['String']['input']>;
    bettor_in?: InputMaybe<Array<Scalars['String']['input']>>;
    bettor_lt?: InputMaybe<Scalars['String']['input']>;
    bettor_lte?: InputMaybe<Scalars['String']['input']>;
    bettor_not?: InputMaybe<Scalars['String']['input']>;
    bettor_not_contains?: InputMaybe<Scalars['String']['input']>;
    bettor_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    bettor_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    bettor_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    bettor_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    bettor_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    bettor_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    bettor_starts_with?: InputMaybe<Scalars['String']['input']>;
    bettor_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    core?: InputMaybe<Scalars['String']['input']>;
    core_?: InputMaybe<CoreContract_Filter>;
    core_contains?: InputMaybe<Scalars['String']['input']>;
    core_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    core_ends_with?: InputMaybe<Scalars['String']['input']>;
    core_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    core_gt?: InputMaybe<Scalars['String']['input']>;
    core_gte?: InputMaybe<Scalars['String']['input']>;
    core_in?: InputMaybe<Array<Scalars['String']['input']>>;
    core_lt?: InputMaybe<Scalars['String']['input']>;
    core_lte?: InputMaybe<Scalars['String']['input']>;
    core_not?: InputMaybe<Scalars['String']['input']>;
    core_not_contains?: InputMaybe<Scalars['String']['input']>;
    core_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    core_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    core_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    core_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    core_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    core_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    core_starts_with?: InputMaybe<Scalars['String']['input']>;
    core_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    createdBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    createdBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    createdBlockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    createdBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    createdTxHash?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_contains?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_ends_with?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_gt?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_gte?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
    createdTxHash_lt?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_lte?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not_contains?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    createdTxHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_starts_with?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    freebet?: InputMaybe<Scalars['String']['input']>;
    freebet_?: InputMaybe<Freebet_Filter>;
    freebet_contains?: InputMaybe<Scalars['String']['input']>;
    freebet_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    freebet_ends_with?: InputMaybe<Scalars['String']['input']>;
    freebet_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    freebet_gt?: InputMaybe<Scalars['String']['input']>;
    freebet_gte?: InputMaybe<Scalars['String']['input']>;
    freebet_in?: InputMaybe<Array<Scalars['String']['input']>>;
    freebet_lt?: InputMaybe<Scalars['String']['input']>;
    freebet_lte?: InputMaybe<Scalars['String']['input']>;
    freebet_not?: InputMaybe<Scalars['String']['input']>;
    freebet_not_contains?: InputMaybe<Scalars['String']['input']>;
    freebet_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    freebet_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    freebet_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    freebet_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    freebet_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    freebet_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    freebet_starts_with?: InputMaybe<Scalars['String']['input']>;
    freebet_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    id_gt?: InputMaybe<Scalars['ID']['input']>;
    id_gte?: InputMaybe<Scalars['ID']['input']>;
    id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    id_lt?: InputMaybe<Scalars['ID']['input']>;
    id_lte?: InputMaybe<Scalars['ID']['input']>;
    id_not?: InputMaybe<Scalars['ID']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    isRedeemable?: InputMaybe<Scalars['Boolean']['input']>;
    isRedeemable_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    isRedeemable_not?: InputMaybe<Scalars['Boolean']['input']>;
    isRedeemable_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    isRedeemed?: InputMaybe<Scalars['Boolean']['input']>;
    isRedeemed_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    isRedeemed_not?: InputMaybe<Scalars['Boolean']['input']>;
    isRedeemed_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    nonce?: InputMaybe<Scalars['BigInt']['input']>;
    nonce_gt?: InputMaybe<Scalars['BigInt']['input']>;
    nonce_gte?: InputMaybe<Scalars['BigInt']['input']>;
    nonce_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    nonce_lt?: InputMaybe<Scalars['BigInt']['input']>;
    nonce_lte?: InputMaybe<Scalars['BigInt']['input']>;
    nonce_not?: InputMaybe<Scalars['BigInt']['input']>;
    nonce_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    odds?: InputMaybe<Scalars['BigDecimal']['input']>;
    odds_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
    odds_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
    odds_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    odds_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
    odds_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
    odds_not?: InputMaybe<Scalars['BigDecimal']['input']>;
    odds_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    owner?: InputMaybe<Scalars['String']['input']>;
    owner_contains?: InputMaybe<Scalars['String']['input']>;
    owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_ends_with?: InputMaybe<Scalars['String']['input']>;
    owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_gt?: InputMaybe<Scalars['String']['input']>;
    owner_gte?: InputMaybe<Scalars['String']['input']>;
    owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
    owner_lt?: InputMaybe<Scalars['String']['input']>;
    owner_lte?: InputMaybe<Scalars['String']['input']>;
    owner_not?: InputMaybe<Scalars['String']['input']>;
    owner_not_contains?: InputMaybe<Scalars['String']['input']>;
    owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_starts_with?: InputMaybe<Scalars['String']['input']>;
    owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    payout?: InputMaybe<Scalars['BigDecimal']['input']>;
    payoutLimit?: InputMaybe<Scalars['BigDecimal']['input']>;
    payoutLimit_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
    payoutLimit_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
    payoutLimit_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    payoutLimit_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
    payoutLimit_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
    payoutLimit_not?: InputMaybe<Scalars['BigDecimal']['input']>;
    payoutLimit_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    payout_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
    payout_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
    payout_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    payout_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
    payout_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
    payout_not?: InputMaybe<Scalars['BigDecimal']['input']>;
    payout_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    potentialPayout?: InputMaybe<Scalars['BigDecimal']['input']>;
    potentialPayout_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
    potentialPayout_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
    potentialPayout_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    potentialPayout_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
    potentialPayout_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
    potentialPayout_not?: InputMaybe<Scalars['BigDecimal']['input']>;
    potentialPayout_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    rawAmount?: InputMaybe<Scalars['BigInt']['input']>;
    rawAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    rawAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    rawAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    rawAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    rawAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
    rawAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawOdds?: InputMaybe<Scalars['BigInt']['input']>;
    rawOdds_gt?: InputMaybe<Scalars['BigInt']['input']>;
    rawOdds_gte?: InputMaybe<Scalars['BigInt']['input']>;
    rawOdds_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawOdds_lt?: InputMaybe<Scalars['BigInt']['input']>;
    rawOdds_lte?: InputMaybe<Scalars['BigInt']['input']>;
    rawOdds_not?: InputMaybe<Scalars['BigInt']['input']>;
    rawOdds_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawPayout?: InputMaybe<Scalars['BigInt']['input']>;
    rawPayoutLimit?: InputMaybe<Scalars['BigInt']['input']>;
    rawPayoutLimit_gt?: InputMaybe<Scalars['BigInt']['input']>;
    rawPayoutLimit_gte?: InputMaybe<Scalars['BigInt']['input']>;
    rawPayoutLimit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawPayoutLimit_lt?: InputMaybe<Scalars['BigInt']['input']>;
    rawPayoutLimit_lte?: InputMaybe<Scalars['BigInt']['input']>;
    rawPayoutLimit_not?: InputMaybe<Scalars['BigInt']['input']>;
    rawPayoutLimit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawPayout_gt?: InputMaybe<Scalars['BigInt']['input']>;
    rawPayout_gte?: InputMaybe<Scalars['BigInt']['input']>;
    rawPayout_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawPayout_lt?: InputMaybe<Scalars['BigInt']['input']>;
    rawPayout_lte?: InputMaybe<Scalars['BigInt']['input']>;
    rawPayout_not?: InputMaybe<Scalars['BigInt']['input']>;
    rawPayout_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawPotentialPayout?: InputMaybe<Scalars['BigInt']['input']>;
    rawPotentialPayout_gt?: InputMaybe<Scalars['BigInt']['input']>;
    rawPotentialPayout_gte?: InputMaybe<Scalars['BigInt']['input']>;
    rawPotentialPayout_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawPotentialPayout_lt?: InputMaybe<Scalars['BigInt']['input']>;
    rawPotentialPayout_lte?: InputMaybe<Scalars['BigInt']['input']>;
    rawPotentialPayout_not?: InputMaybe<Scalars['BigInt']['input']>;
    rawPotentialPayout_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawSettledMargin?: InputMaybe<Scalars['BigInt']['input']>;
    rawSettledMargin_gt?: InputMaybe<Scalars['BigInt']['input']>;
    rawSettledMargin_gte?: InputMaybe<Scalars['BigInt']['input']>;
    rawSettledMargin_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawSettledMargin_lt?: InputMaybe<Scalars['BigInt']['input']>;
    rawSettledMargin_lte?: InputMaybe<Scalars['BigInt']['input']>;
    rawSettledMargin_not?: InputMaybe<Scalars['BigInt']['input']>;
    rawSettledMargin_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawSettledOdds?: InputMaybe<Scalars['BigInt']['input']>;
    rawSettledOdds_gt?: InputMaybe<Scalars['BigInt']['input']>;
    rawSettledOdds_gte?: InputMaybe<Scalars['BigInt']['input']>;
    rawSettledOdds_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawSettledOdds_lt?: InputMaybe<Scalars['BigInt']['input']>;
    rawSettledOdds_lte?: InputMaybe<Scalars['BigInt']['input']>;
    rawSettledOdds_not?: InputMaybe<Scalars['BigInt']['input']>;
    rawSettledOdds_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    redeemedBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    redeemedBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    redeemedBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    redeemedBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    redeemedBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    redeemedBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    redeemedBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    redeemedBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    redeemedBlockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    redeemedBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    redeemedBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    redeemedBlockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    redeemedBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    redeemedBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    redeemedBlockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    redeemedBlockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    redeemedTxHash?: InputMaybe<Scalars['String']['input']>;
    redeemedTxHash_contains?: InputMaybe<Scalars['String']['input']>;
    redeemedTxHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    redeemedTxHash_ends_with?: InputMaybe<Scalars['String']['input']>;
    redeemedTxHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    redeemedTxHash_gt?: InputMaybe<Scalars['String']['input']>;
    redeemedTxHash_gte?: InputMaybe<Scalars['String']['input']>;
    redeemedTxHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
    redeemedTxHash_lt?: InputMaybe<Scalars['String']['input']>;
    redeemedTxHash_lte?: InputMaybe<Scalars['String']['input']>;
    redeemedTxHash_not?: InputMaybe<Scalars['String']['input']>;
    redeemedTxHash_not_contains?: InputMaybe<Scalars['String']['input']>;
    redeemedTxHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    redeemedTxHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    redeemedTxHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    redeemedTxHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    redeemedTxHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    redeemedTxHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    redeemedTxHash_starts_with?: InputMaybe<Scalars['String']['input']>;
    redeemedTxHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    resolvedBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    resolvedBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    resolvedBlockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    resolvedBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    resolvedTxHash?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_contains?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_ends_with?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_gt?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_gte?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
    resolvedTxHash_lt?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_lte?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_not?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_not_contains?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    resolvedTxHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_starts_with?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    result?: InputMaybe<BetResult>;
    result_in?: InputMaybe<Array<BetResult>>;
    result_not?: InputMaybe<BetResult>;
    result_not_in?: InputMaybe<Array<BetResult>>;
    selections_?: InputMaybe<LiveSelection_Filter>;
    settledMargin?: InputMaybe<Scalars['BigDecimal']['input']>;
    settledMargin_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
    settledMargin_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
    settledMargin_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    settledMargin_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
    settledMargin_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
    settledMargin_not?: InputMaybe<Scalars['BigDecimal']['input']>;
    settledMargin_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    settledOdds?: InputMaybe<Scalars['BigDecimal']['input']>;
    settledOdds_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
    settledOdds_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
    settledOdds_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    settledOdds_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
    settledOdds_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
    settledOdds_not?: InputMaybe<Scalars['BigDecimal']['input']>;
    settledOdds_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    status?: InputMaybe<BetStatus>;
    status_in?: InputMaybe<Array<BetStatus>>;
    status_not?: InputMaybe<BetStatus>;
    status_not_in?: InputMaybe<Array<BetStatus>>;
};
export declare enum LiveBet_OrderBy {
    CanceledSubBetsCount = "_canceledSubBetsCount",
    ConditionIds = "_conditionIds",
    Conditions = "_conditions",
    GamesIds = "_gamesIds",
    IsFreebet = "_isFreebet",
    LostSubBetsCount = "_lostSubBetsCount",
    MarginsForSettle = "_marginsForSettle",
    OddsDecimals = "_oddsDecimals",
    SubBetsCount = "_subBetsCount",
    TokenDecimals = "_tokenDecimals",
    UpdatedAt = "_updatedAt",
    WonSubBetsCount = "_wonSubBetsCount",
    Actor = "actor",
    Affiliate = "affiliate",
    Amount = "amount",
    BetId = "betId",
    Bettor = "bettor",
    Core = "core",
    CreatedBlockNumber = "createdBlockNumber",
    CreatedBlockTimestamp = "createdBlockTimestamp",
    CreatedTxHash = "createdTxHash",
    Freebet = "freebet",
    Id = "id",
    IsRedeemable = "isRedeemable",
    IsRedeemed = "isRedeemed",
    Nonce = "nonce",
    Odds = "odds",
    Owner = "owner",
    Payout = "payout",
    PayoutLimit = "payoutLimit",
    PotentialPayout = "potentialPayout",
    RawAmount = "rawAmount",
    RawOdds = "rawOdds",
    RawPayout = "rawPayout",
    RawPayoutLimit = "rawPayoutLimit",
    RawPotentialPayout = "rawPotentialPayout",
    RawSettledMargin = "rawSettledMargin",
    RawSettledOdds = "rawSettledOdds",
    RedeemedBlockNumber = "redeemedBlockNumber",
    RedeemedBlockTimestamp = "redeemedBlockTimestamp",
    RedeemedTxHash = "redeemedTxHash",
    ResolvedBlockNumber = "resolvedBlockNumber",
    ResolvedBlockTimestamp = "resolvedBlockTimestamp",
    ResolvedTxHash = "resolvedTxHash",
    Result = "result",
    Selections = "selections",
    SettledMargin = "settledMargin",
    SettledOdds = "settledOdds",
    Status = "status"
}
export type LiveCondition = {
    __typename?: 'LiveCondition';
    _updatedAt: Scalars['BigInt']['output'];
    _winningOutcomesCount: Scalars['Int']['output'];
    conditionId: Scalars['BigInt']['output'];
    core: CoreContract;
    coreAddress: Scalars['String']['output'];
    createdBlockNumber: Scalars['BigInt']['output'];
    createdBlockTimestamp: Scalars['BigInt']['output'];
    createdTxHash: Scalars['String']['output'];
    gameId: Scalars['BigInt']['output'];
    /** Core Contract address + Condition Id */
    id: Scalars['ID']['output'];
    outcomes: Array<LiveOutcome>;
    outcomesIds?: Maybe<Array<Scalars['BigInt']['output']>>;
    resolvedBlockNumber?: Maybe<Scalars['BigInt']['output']>;
    resolvedBlockTimestamp?: Maybe<Scalars['BigInt']['output']>;
    resolvedTxHash?: Maybe<Scalars['String']['output']>;
    status: ConditionStatus;
    turnover: Scalars['BigInt']['output'];
    wonOutcomeIds?: Maybe<Array<Scalars['BigInt']['output']>>;
    wonOutcomes?: Maybe<Array<LiveOutcome>>;
};
export type LiveConditionOutcomesArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<LiveOutcome_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<LiveOutcome_Filter>;
};
export type LiveConditionWonOutcomesArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<LiveOutcome_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<LiveOutcome_Filter>;
};
export type LiveCondition_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    _updatedAt?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    _updatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    _winningOutcomesCount?: InputMaybe<Scalars['Int']['input']>;
    _winningOutcomesCount_gt?: InputMaybe<Scalars['Int']['input']>;
    _winningOutcomesCount_gte?: InputMaybe<Scalars['Int']['input']>;
    _winningOutcomesCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    _winningOutcomesCount_lt?: InputMaybe<Scalars['Int']['input']>;
    _winningOutcomesCount_lte?: InputMaybe<Scalars['Int']['input']>;
    _winningOutcomesCount_not?: InputMaybe<Scalars['Int']['input']>;
    _winningOutcomesCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    conditionId?: InputMaybe<Scalars['BigInt']['input']>;
    conditionId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    conditionId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    conditionId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    conditionId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    conditionId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    conditionId_not?: InputMaybe<Scalars['BigInt']['input']>;
    conditionId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    core?: InputMaybe<Scalars['String']['input']>;
    coreAddress?: InputMaybe<Scalars['String']['input']>;
    coreAddress_contains?: InputMaybe<Scalars['String']['input']>;
    coreAddress_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    coreAddress_ends_with?: InputMaybe<Scalars['String']['input']>;
    coreAddress_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    coreAddress_gt?: InputMaybe<Scalars['String']['input']>;
    coreAddress_gte?: InputMaybe<Scalars['String']['input']>;
    coreAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
    coreAddress_lt?: InputMaybe<Scalars['String']['input']>;
    coreAddress_lte?: InputMaybe<Scalars['String']['input']>;
    coreAddress_not?: InputMaybe<Scalars['String']['input']>;
    coreAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
    coreAddress_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    coreAddress_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    coreAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    coreAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    coreAddress_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    coreAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    coreAddress_starts_with?: InputMaybe<Scalars['String']['input']>;
    coreAddress_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    core_?: InputMaybe<CoreContract_Filter>;
    core_contains?: InputMaybe<Scalars['String']['input']>;
    core_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    core_ends_with?: InputMaybe<Scalars['String']['input']>;
    core_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    core_gt?: InputMaybe<Scalars['String']['input']>;
    core_gte?: InputMaybe<Scalars['String']['input']>;
    core_in?: InputMaybe<Array<Scalars['String']['input']>>;
    core_lt?: InputMaybe<Scalars['String']['input']>;
    core_lte?: InputMaybe<Scalars['String']['input']>;
    core_not?: InputMaybe<Scalars['String']['input']>;
    core_not_contains?: InputMaybe<Scalars['String']['input']>;
    core_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    core_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    core_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    core_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    core_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    core_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    core_starts_with?: InputMaybe<Scalars['String']['input']>;
    core_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    createdBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    createdBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    createdBlockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    createdBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    createdBlockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    createdTxHash?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_contains?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_ends_with?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_gt?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_gte?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
    createdTxHash_lt?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_lte?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not_contains?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    createdTxHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_starts_with?: InputMaybe<Scalars['String']['input']>;
    createdTxHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    gameId?: InputMaybe<Scalars['BigInt']['input']>;
    gameId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    gameId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    gameId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    gameId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    gameId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    gameId_not?: InputMaybe<Scalars['BigInt']['input']>;
    gameId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['ID']['input']>;
    id_gt?: InputMaybe<Scalars['ID']['input']>;
    id_gte?: InputMaybe<Scalars['ID']['input']>;
    id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    id_lt?: InputMaybe<Scalars['ID']['input']>;
    id_lte?: InputMaybe<Scalars['ID']['input']>;
    id_not?: InputMaybe<Scalars['ID']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    outcomesIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    outcomesIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    outcomesIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    outcomesIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    outcomesIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    outcomesIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    outcomes_?: InputMaybe<LiveOutcome_Filter>;
    resolvedBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    resolvedBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    resolvedBlockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    resolvedBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    resolvedBlockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    resolvedTxHash?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_contains?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_ends_with?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_gt?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_gte?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
    resolvedTxHash_lt?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_lte?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_not?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_not_contains?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    resolvedTxHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_starts_with?: InputMaybe<Scalars['String']['input']>;
    resolvedTxHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    status?: InputMaybe<ConditionStatus>;
    status_in?: InputMaybe<Array<ConditionStatus>>;
    status_not?: InputMaybe<ConditionStatus>;
    status_not_in?: InputMaybe<Array<ConditionStatus>>;
    turnover?: InputMaybe<Scalars['BigInt']['input']>;
    turnover_gt?: InputMaybe<Scalars['BigInt']['input']>;
    turnover_gte?: InputMaybe<Scalars['BigInt']['input']>;
    turnover_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    turnover_lt?: InputMaybe<Scalars['BigInt']['input']>;
    turnover_lte?: InputMaybe<Scalars['BigInt']['input']>;
    turnover_not?: InputMaybe<Scalars['BigInt']['input']>;
    turnover_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    wonOutcomeIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    wonOutcomeIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    wonOutcomeIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    wonOutcomeIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    wonOutcomeIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    wonOutcomeIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    wonOutcomes?: InputMaybe<Array<Scalars['String']['input']>>;
    wonOutcomes_?: InputMaybe<LiveOutcome_Filter>;
    wonOutcomes_contains?: InputMaybe<Array<Scalars['String']['input']>>;
    wonOutcomes_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
    wonOutcomes_not?: InputMaybe<Array<Scalars['String']['input']>>;
    wonOutcomes_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
    wonOutcomes_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
};
export declare enum LiveCondition_OrderBy {
    UpdatedAt = "_updatedAt",
    WinningOutcomesCount = "_winningOutcomesCount",
    ConditionId = "conditionId",
    Core = "core",
    CoreAddress = "coreAddress",
    CreatedBlockNumber = "createdBlockNumber",
    CreatedBlockTimestamp = "createdBlockTimestamp",
    CreatedTxHash = "createdTxHash",
    GameId = "gameId",
    Id = "id",
    Outcomes = "outcomes",
    OutcomesIds = "outcomesIds",
    ResolvedBlockNumber = "resolvedBlockNumber",
    ResolvedBlockTimestamp = "resolvedBlockTimestamp",
    ResolvedTxHash = "resolvedTxHash",
    Status = "status",
    Turnover = "turnover",
    WonOutcomeIds = "wonOutcomeIds",
    WonOutcomes = "wonOutcomes"
}
export type LiveOutcome = {
    __typename?: 'LiveOutcome';
    _betsEntityIds?: Maybe<Array<Scalars['String']['output']>>;
    _updatedAt: Scalars['BigInt']['output'];
    condition: LiveCondition;
    core: CoreContract;
    /** Condition entity Id (Core Contract address + Condition Id) + outcome Id */
    id: Scalars['ID']['output'];
    outcomeId: Scalars['BigInt']['output'];
    result?: Maybe<OutcomeResult>;
    selections: Array<LiveSelection>;
    sortOrder: Scalars['Int']['output'];
};
export type LiveOutcomeSelectionsArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<LiveSelection_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<LiveSelection_Filter>;
};
export type LiveOutcome_Filter = {
    _betsEntityIds?: InputMaybe<Array<Scalars['String']['input']>>;
    _betsEntityIds_contains?: InputMaybe<Array<Scalars['String']['input']>>;
    _betsEntityIds_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
    _betsEntityIds_not?: InputMaybe<Array<Scalars['String']['input']>>;
    _betsEntityIds_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
    _betsEntityIds_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    _updatedAt?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    _updatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    condition?: InputMaybe<Scalars['String']['input']>;
    condition_?: InputMaybe<LiveCondition_Filter>;
    condition_contains?: InputMaybe<Scalars['String']['input']>;
    condition_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    condition_ends_with?: InputMaybe<Scalars['String']['input']>;
    condition_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    condition_gt?: InputMaybe<Scalars['String']['input']>;
    condition_gte?: InputMaybe<Scalars['String']['input']>;
    condition_in?: InputMaybe<Array<Scalars['String']['input']>>;
    condition_lt?: InputMaybe<Scalars['String']['input']>;
    condition_lte?: InputMaybe<Scalars['String']['input']>;
    condition_not?: InputMaybe<Scalars['String']['input']>;
    condition_not_contains?: InputMaybe<Scalars['String']['input']>;
    condition_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    condition_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    condition_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    condition_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    condition_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    condition_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    condition_starts_with?: InputMaybe<Scalars['String']['input']>;
    condition_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    core?: InputMaybe<Scalars['String']['input']>;
    core_?: InputMaybe<CoreContract_Filter>;
    core_contains?: InputMaybe<Scalars['String']['input']>;
    core_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    core_ends_with?: InputMaybe<Scalars['String']['input']>;
    core_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    core_gt?: InputMaybe<Scalars['String']['input']>;
    core_gte?: InputMaybe<Scalars['String']['input']>;
    core_in?: InputMaybe<Array<Scalars['String']['input']>>;
    core_lt?: InputMaybe<Scalars['String']['input']>;
    core_lte?: InputMaybe<Scalars['String']['input']>;
    core_not?: InputMaybe<Scalars['String']['input']>;
    core_not_contains?: InputMaybe<Scalars['String']['input']>;
    core_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    core_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    core_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    core_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    core_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    core_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    core_starts_with?: InputMaybe<Scalars['String']['input']>;
    core_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    id_gt?: InputMaybe<Scalars['ID']['input']>;
    id_gte?: InputMaybe<Scalars['ID']['input']>;
    id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    id_lt?: InputMaybe<Scalars['ID']['input']>;
    id_lte?: InputMaybe<Scalars['ID']['input']>;
    id_not?: InputMaybe<Scalars['ID']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    outcomeId?: InputMaybe<Scalars['BigInt']['input']>;
    outcomeId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    outcomeId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    outcomeId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    outcomeId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    outcomeId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    outcomeId_not?: InputMaybe<Scalars['BigInt']['input']>;
    outcomeId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    result?: InputMaybe<OutcomeResult>;
    result_in?: InputMaybe<Array<OutcomeResult>>;
    result_not?: InputMaybe<OutcomeResult>;
    result_not_in?: InputMaybe<Array<OutcomeResult>>;
    selections_?: InputMaybe<LiveSelection_Filter>;
    sortOrder?: InputMaybe<Scalars['Int']['input']>;
    sortOrder_gt?: InputMaybe<Scalars['Int']['input']>;
    sortOrder_gte?: InputMaybe<Scalars['Int']['input']>;
    sortOrder_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    sortOrder_lt?: InputMaybe<Scalars['Int']['input']>;
    sortOrder_lte?: InputMaybe<Scalars['Int']['input']>;
    sortOrder_not?: InputMaybe<Scalars['Int']['input']>;
    sortOrder_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};
export declare enum LiveOutcome_OrderBy {
    BetsEntityIds = "_betsEntityIds",
    UpdatedAt = "_updatedAt",
    Condition = "condition",
    Core = "core",
    Id = "id",
    OutcomeId = "outcomeId",
    Result = "result",
    Selections = "selections",
    SortOrder = "sortOrder"
}
export type LiveSelection = {
    __typename?: 'LiveSelection';
    _oddsDecimals: Scalars['Int']['output'];
    _outcomeId: Scalars['BigInt']['output'];
    bet: LiveBet;
    id: Scalars['ID']['output'];
    margin?: Maybe<Scalars['BigDecimal']['output']>;
    odds: Scalars['BigDecimal']['output'];
    outcome: LiveOutcome;
    rawMargin?: Maybe<Scalars['BigInt']['output']>;
    rawOdds: Scalars['BigInt']['output'];
    result?: Maybe<SelectionResult>;
};
export type LiveSelection_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    _oddsDecimals?: InputMaybe<Scalars['Int']['input']>;
    _oddsDecimals_gt?: InputMaybe<Scalars['Int']['input']>;
    _oddsDecimals_gte?: InputMaybe<Scalars['Int']['input']>;
    _oddsDecimals_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    _oddsDecimals_lt?: InputMaybe<Scalars['Int']['input']>;
    _oddsDecimals_lte?: InputMaybe<Scalars['Int']['input']>;
    _oddsDecimals_not?: InputMaybe<Scalars['Int']['input']>;
    _oddsDecimals_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    _outcomeId?: InputMaybe<Scalars['BigInt']['input']>;
    _outcomeId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    _outcomeId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    _outcomeId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    _outcomeId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    _outcomeId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    _outcomeId_not?: InputMaybe<Scalars['BigInt']['input']>;
    _outcomeId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    bet?: InputMaybe<Scalars['String']['input']>;
    bet_?: InputMaybe<LiveBet_Filter>;
    bet_contains?: InputMaybe<Scalars['String']['input']>;
    bet_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    bet_ends_with?: InputMaybe<Scalars['String']['input']>;
    bet_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    bet_gt?: InputMaybe<Scalars['String']['input']>;
    bet_gte?: InputMaybe<Scalars['String']['input']>;
    bet_in?: InputMaybe<Array<Scalars['String']['input']>>;
    bet_lt?: InputMaybe<Scalars['String']['input']>;
    bet_lte?: InputMaybe<Scalars['String']['input']>;
    bet_not?: InputMaybe<Scalars['String']['input']>;
    bet_not_contains?: InputMaybe<Scalars['String']['input']>;
    bet_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    bet_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    bet_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    bet_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    bet_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    bet_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    bet_starts_with?: InputMaybe<Scalars['String']['input']>;
    bet_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    id_gt?: InputMaybe<Scalars['ID']['input']>;
    id_gte?: InputMaybe<Scalars['ID']['input']>;
    id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    id_lt?: InputMaybe<Scalars['ID']['input']>;
    id_lte?: InputMaybe<Scalars['ID']['input']>;
    id_not?: InputMaybe<Scalars['ID']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    margin?: InputMaybe<Scalars['BigDecimal']['input']>;
    margin_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
    margin_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
    margin_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    margin_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
    margin_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
    margin_not?: InputMaybe<Scalars['BigDecimal']['input']>;
    margin_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    odds?: InputMaybe<Scalars['BigDecimal']['input']>;
    odds_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
    odds_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
    odds_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    odds_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
    odds_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
    odds_not?: InputMaybe<Scalars['BigDecimal']['input']>;
    odds_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    outcome?: InputMaybe<Scalars['String']['input']>;
    outcome_?: InputMaybe<LiveOutcome_Filter>;
    outcome_contains?: InputMaybe<Scalars['String']['input']>;
    outcome_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    outcome_ends_with?: InputMaybe<Scalars['String']['input']>;
    outcome_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    outcome_gt?: InputMaybe<Scalars['String']['input']>;
    outcome_gte?: InputMaybe<Scalars['String']['input']>;
    outcome_in?: InputMaybe<Array<Scalars['String']['input']>>;
    outcome_lt?: InputMaybe<Scalars['String']['input']>;
    outcome_lte?: InputMaybe<Scalars['String']['input']>;
    outcome_not?: InputMaybe<Scalars['String']['input']>;
    outcome_not_contains?: InputMaybe<Scalars['String']['input']>;
    outcome_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    outcome_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    outcome_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    outcome_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    outcome_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    outcome_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    outcome_starts_with?: InputMaybe<Scalars['String']['input']>;
    outcome_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    rawMargin?: InputMaybe<Scalars['BigInt']['input']>;
    rawMargin_gt?: InputMaybe<Scalars['BigInt']['input']>;
    rawMargin_gte?: InputMaybe<Scalars['BigInt']['input']>;
    rawMargin_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawMargin_lt?: InputMaybe<Scalars['BigInt']['input']>;
    rawMargin_lte?: InputMaybe<Scalars['BigInt']['input']>;
    rawMargin_not?: InputMaybe<Scalars['BigInt']['input']>;
    rawMargin_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawOdds?: InputMaybe<Scalars['BigInt']['input']>;
    rawOdds_gt?: InputMaybe<Scalars['BigInt']['input']>;
    rawOdds_gte?: InputMaybe<Scalars['BigInt']['input']>;
    rawOdds_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawOdds_lt?: InputMaybe<Scalars['BigInt']['input']>;
    rawOdds_lte?: InputMaybe<Scalars['BigInt']['input']>;
    rawOdds_not?: InputMaybe<Scalars['BigInt']['input']>;
    rawOdds_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    result?: InputMaybe<SelectionResult>;
    result_in?: InputMaybe<Array<SelectionResult>>;
    result_not?: InputMaybe<SelectionResult>;
    result_not_in?: InputMaybe<Array<SelectionResult>>;
};
export declare enum LiveSelection_OrderBy {
    OddsDecimals = "_oddsDecimals",
    OutcomeId = "_outcomeId",
    Bet = "bet",
    Id = "id",
    Margin = "margin",
    Odds = "odds",
    Outcome = "outcome",
    RawMargin = "rawMargin",
    RawOdds = "rawOdds",
    Result = "result"
}
/** Defines the order direction, either ascending or descending */
export declare enum OrderDirection {
    Asc = "asc",
    Desc = "desc"
}
export type Outcome = {
    __typename?: 'Outcome';
    _betsEntityIds?: Maybe<Array<Scalars['String']['output']>>;
    _updatedAt: Scalars['BigInt']['output'];
    condition: Condition;
    core: CoreContract;
    currentOdds: Scalars['BigDecimal']['output'];
    fund: Scalars['BigInt']['output'];
    /** Condition entity Id (Core Contract address + Condition Id) + outcome Id */
    id: Scalars['ID']['output'];
    outcomeId: Scalars['BigInt']['output'];
    rawCurrentOdds: Scalars['BigInt']['output'];
    result?: Maybe<OutcomeResult>;
    selections: Array<Selection>;
    sortOrder: Scalars['Int']['output'];
};
export type OutcomeSelectionsArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Selection_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<Selection_Filter>;
};
export declare enum OutcomeResult {
    Lost = "Lost",
    Won = "Won"
}
export type Outcome_Filter = {
    _betsEntityIds?: InputMaybe<Array<Scalars['String']['input']>>;
    _betsEntityIds_contains?: InputMaybe<Array<Scalars['String']['input']>>;
    _betsEntityIds_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
    _betsEntityIds_not?: InputMaybe<Array<Scalars['String']['input']>>;
    _betsEntityIds_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
    _betsEntityIds_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    _updatedAt?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    _updatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
    _updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    condition?: InputMaybe<Scalars['String']['input']>;
    condition_?: InputMaybe<Condition_Filter>;
    condition_contains?: InputMaybe<Scalars['String']['input']>;
    condition_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    condition_ends_with?: InputMaybe<Scalars['String']['input']>;
    condition_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    condition_gt?: InputMaybe<Scalars['String']['input']>;
    condition_gte?: InputMaybe<Scalars['String']['input']>;
    condition_in?: InputMaybe<Array<Scalars['String']['input']>>;
    condition_lt?: InputMaybe<Scalars['String']['input']>;
    condition_lte?: InputMaybe<Scalars['String']['input']>;
    condition_not?: InputMaybe<Scalars['String']['input']>;
    condition_not_contains?: InputMaybe<Scalars['String']['input']>;
    condition_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    condition_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    condition_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    condition_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    condition_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    condition_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    condition_starts_with?: InputMaybe<Scalars['String']['input']>;
    condition_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    core?: InputMaybe<Scalars['String']['input']>;
    core_?: InputMaybe<CoreContract_Filter>;
    core_contains?: InputMaybe<Scalars['String']['input']>;
    core_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    core_ends_with?: InputMaybe<Scalars['String']['input']>;
    core_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    core_gt?: InputMaybe<Scalars['String']['input']>;
    core_gte?: InputMaybe<Scalars['String']['input']>;
    core_in?: InputMaybe<Array<Scalars['String']['input']>>;
    core_lt?: InputMaybe<Scalars['String']['input']>;
    core_lte?: InputMaybe<Scalars['String']['input']>;
    core_not?: InputMaybe<Scalars['String']['input']>;
    core_not_contains?: InputMaybe<Scalars['String']['input']>;
    core_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    core_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    core_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    core_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    core_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    core_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    core_starts_with?: InputMaybe<Scalars['String']['input']>;
    core_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    currentOdds?: InputMaybe<Scalars['BigDecimal']['input']>;
    currentOdds_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
    currentOdds_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
    currentOdds_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    currentOdds_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
    currentOdds_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
    currentOdds_not?: InputMaybe<Scalars['BigDecimal']['input']>;
    currentOdds_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    fund?: InputMaybe<Scalars['BigInt']['input']>;
    fund_gt?: InputMaybe<Scalars['BigInt']['input']>;
    fund_gte?: InputMaybe<Scalars['BigInt']['input']>;
    fund_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    fund_lt?: InputMaybe<Scalars['BigInt']['input']>;
    fund_lte?: InputMaybe<Scalars['BigInt']['input']>;
    fund_not?: InputMaybe<Scalars['BigInt']['input']>;
    fund_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['ID']['input']>;
    id_gt?: InputMaybe<Scalars['ID']['input']>;
    id_gte?: InputMaybe<Scalars['ID']['input']>;
    id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    id_lt?: InputMaybe<Scalars['ID']['input']>;
    id_lte?: InputMaybe<Scalars['ID']['input']>;
    id_not?: InputMaybe<Scalars['ID']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    outcomeId?: InputMaybe<Scalars['BigInt']['input']>;
    outcomeId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    outcomeId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    outcomeId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    outcomeId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    outcomeId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    outcomeId_not?: InputMaybe<Scalars['BigInt']['input']>;
    outcomeId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawCurrentOdds?: InputMaybe<Scalars['BigInt']['input']>;
    rawCurrentOdds_gt?: InputMaybe<Scalars['BigInt']['input']>;
    rawCurrentOdds_gte?: InputMaybe<Scalars['BigInt']['input']>;
    rawCurrentOdds_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawCurrentOdds_lt?: InputMaybe<Scalars['BigInt']['input']>;
    rawCurrentOdds_lte?: InputMaybe<Scalars['BigInt']['input']>;
    rawCurrentOdds_not?: InputMaybe<Scalars['BigInt']['input']>;
    rawCurrentOdds_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    result?: InputMaybe<OutcomeResult>;
    result_in?: InputMaybe<Array<OutcomeResult>>;
    result_not?: InputMaybe<OutcomeResult>;
    result_not_in?: InputMaybe<Array<OutcomeResult>>;
    selections_?: InputMaybe<Selection_Filter>;
    sortOrder?: InputMaybe<Scalars['Int']['input']>;
    sortOrder_gt?: InputMaybe<Scalars['Int']['input']>;
    sortOrder_gte?: InputMaybe<Scalars['Int']['input']>;
    sortOrder_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    sortOrder_lt?: InputMaybe<Scalars['Int']['input']>;
    sortOrder_lte?: InputMaybe<Scalars['Int']['input']>;
    sortOrder_not?: InputMaybe<Scalars['Int']['input']>;
    sortOrder_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};
export declare enum Outcome_OrderBy {
    BetsEntityIds = "_betsEntityIds",
    UpdatedAt = "_updatedAt",
    Condition = "condition",
    Core = "core",
    CurrentOdds = "currentOdds",
    Fund = "fund",
    Id = "id",
    OutcomeId = "outcomeId",
    RawCurrentOdds = "rawCurrentOdds",
    Result = "result",
    Selections = "selections",
    SortOrder = "sortOrder"
}
export type Participant = {
    __typename?: 'Participant';
    game: Game;
    /** Game entity Id (LP Contract address + Game Id) + participant sortOrder */
    id: Scalars['ID']['output'];
    image?: Maybe<Scalars['String']['output']>;
    name: Scalars['String']['output'];
    sortOrder: Scalars['Int']['output'];
};
export type Participant_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    game?: InputMaybe<Scalars['String']['input']>;
    game_?: InputMaybe<Game_Filter>;
    game_contains?: InputMaybe<Scalars['String']['input']>;
    game_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    game_ends_with?: InputMaybe<Scalars['String']['input']>;
    game_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    game_gt?: InputMaybe<Scalars['String']['input']>;
    game_gte?: InputMaybe<Scalars['String']['input']>;
    game_in?: InputMaybe<Array<Scalars['String']['input']>>;
    game_lt?: InputMaybe<Scalars['String']['input']>;
    game_lte?: InputMaybe<Scalars['String']['input']>;
    game_not?: InputMaybe<Scalars['String']['input']>;
    game_not_contains?: InputMaybe<Scalars['String']['input']>;
    game_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    game_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    game_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    game_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    game_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    game_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    game_starts_with?: InputMaybe<Scalars['String']['input']>;
    game_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    id_gt?: InputMaybe<Scalars['ID']['input']>;
    id_gte?: InputMaybe<Scalars['ID']['input']>;
    id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    id_lt?: InputMaybe<Scalars['ID']['input']>;
    id_lte?: InputMaybe<Scalars['ID']['input']>;
    id_not?: InputMaybe<Scalars['ID']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    image?: InputMaybe<Scalars['String']['input']>;
    image_contains?: InputMaybe<Scalars['String']['input']>;
    image_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    image_ends_with?: InputMaybe<Scalars['String']['input']>;
    image_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    image_gt?: InputMaybe<Scalars['String']['input']>;
    image_gte?: InputMaybe<Scalars['String']['input']>;
    image_in?: InputMaybe<Array<Scalars['String']['input']>>;
    image_lt?: InputMaybe<Scalars['String']['input']>;
    image_lte?: InputMaybe<Scalars['String']['input']>;
    image_not?: InputMaybe<Scalars['String']['input']>;
    image_not_contains?: InputMaybe<Scalars['String']['input']>;
    image_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    image_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    image_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    image_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    image_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    image_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    image_starts_with?: InputMaybe<Scalars['String']['input']>;
    image_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    name_contains?: InputMaybe<Scalars['String']['input']>;
    name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    name_ends_with?: InputMaybe<Scalars['String']['input']>;
    name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    name_gt?: InputMaybe<Scalars['String']['input']>;
    name_gte?: InputMaybe<Scalars['String']['input']>;
    name_in?: InputMaybe<Array<Scalars['String']['input']>>;
    name_lt?: InputMaybe<Scalars['String']['input']>;
    name_lte?: InputMaybe<Scalars['String']['input']>;
    name_not?: InputMaybe<Scalars['String']['input']>;
    name_not_contains?: InputMaybe<Scalars['String']['input']>;
    name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    name_starts_with?: InputMaybe<Scalars['String']['input']>;
    name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    sortOrder?: InputMaybe<Scalars['Int']['input']>;
    sortOrder_gt?: InputMaybe<Scalars['Int']['input']>;
    sortOrder_gte?: InputMaybe<Scalars['Int']['input']>;
    sortOrder_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    sortOrder_lt?: InputMaybe<Scalars['Int']['input']>;
    sortOrder_lte?: InputMaybe<Scalars['Int']['input']>;
    sortOrder_not?: InputMaybe<Scalars['Int']['input']>;
    sortOrder_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};
export declare enum Participant_OrderBy {
    Game = "game",
    Id = "id",
    Image = "image",
    Name = "name",
    SortOrder = "sortOrder"
}
export type Query = {
    __typename?: 'Query';
    /** Access to subgraph metadata */
    _meta?: Maybe<_Meta_>;
    azuroBetContract?: Maybe<AzuroBetContract>;
    azuroBetContracts: Array<AzuroBetContract>;
    bet?: Maybe<Bet>;
    betMargin?: Maybe<BetMargin>;
    betMargins: Array<BetMargin>;
    bets: Array<Bet>;
    bettor?: Maybe<Bettor>;
    bettors: Array<Bettor>;
    condition?: Maybe<Condition>;
    conditions: Array<Condition>;
    coreContract?: Maybe<CoreContract>;
    coreContracts: Array<CoreContract>;
    countries: Array<Country>;
    country?: Maybe<Country>;
    event?: Maybe<Event>;
    events: Array<Event>;
    expressPrematchRelation?: Maybe<ExpressPrematchRelation>;
    expressPrematchRelations: Array<ExpressPrematchRelation>;
    freebet?: Maybe<Freebet>;
    freebetContract?: Maybe<FreebetContract>;
    freebetContracts: Array<FreebetContract>;
    freebets: Array<Freebet>;
    game?: Maybe<Game>;
    games: Array<Game>;
    league?: Maybe<League>;
    leagues: Array<League>;
    liquidityPoolContract?: Maybe<LiquidityPoolContract>;
    liquidityPoolContracts: Array<LiquidityPoolContract>;
    liquidityPoolNft?: Maybe<LiquidityPoolNft>;
    liquidityPoolNfts: Array<LiquidityPoolNft>;
    liquidityPoolTransaction?: Maybe<LiquidityPoolTransaction>;
    liquidityPoolTransactions: Array<LiquidityPoolTransaction>;
    liveBet?: Maybe<LiveBet>;
    liveBets: Array<LiveBet>;
    liveCondition?: Maybe<LiveCondition>;
    liveConditions: Array<LiveCondition>;
    liveOutcome?: Maybe<LiveOutcome>;
    liveOutcomes: Array<LiveOutcome>;
    liveSelection?: Maybe<LiveSelection>;
    liveSelections: Array<LiveSelection>;
    outcome?: Maybe<Outcome>;
    outcomes: Array<Outcome>;
    participant?: Maybe<Participant>;
    participants: Array<Participant>;
    selection?: Maybe<Selection>;
    selections: Array<Selection>;
    sport?: Maybe<Sport>;
    sportHub?: Maybe<SportHub>;
    sportHubs: Array<SportHub>;
    sports: Array<Sport>;
};
export type Query_MetaArgs = {
    block?: InputMaybe<Block_Height>;
};
export type QueryAzuroBetContractArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryAzuroBetContractsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<AzuroBetContract_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<AzuroBetContract_Filter>;
};
export type QueryBetArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryBetMarginArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryBetMarginsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<BetMargin_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<BetMargin_Filter>;
};
export type QueryBetsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Bet_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Bet_Filter>;
};
export type QueryBettorArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryBettorsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Bettor_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Bettor_Filter>;
};
export type QueryConditionArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryConditionsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Condition_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Condition_Filter>;
};
export type QueryCoreContractArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryCoreContractsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<CoreContract_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<CoreContract_Filter>;
};
export type QueryCountriesArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Country_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Country_Filter>;
};
export type QueryCountryArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryEventArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryEventsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Event_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Event_Filter>;
};
export type QueryExpressPrematchRelationArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryExpressPrematchRelationsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<ExpressPrematchRelation_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<ExpressPrematchRelation_Filter>;
};
export type QueryFreebetArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryFreebetContractArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryFreebetContractsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<FreebetContract_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<FreebetContract_Filter>;
};
export type QueryFreebetsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Freebet_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Freebet_Filter>;
};
export type QueryGameArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryGamesArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Game_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Game_Filter>;
};
export type QueryLeagueArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryLeaguesArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<League_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<League_Filter>;
};
export type QueryLiquidityPoolContractArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryLiquidityPoolContractsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<LiquidityPoolContract_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<LiquidityPoolContract_Filter>;
};
export type QueryLiquidityPoolNftArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryLiquidityPoolNftsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<LiquidityPoolNft_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<LiquidityPoolNft_Filter>;
};
export type QueryLiquidityPoolTransactionArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryLiquidityPoolTransactionsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<LiquidityPoolTransaction_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<LiquidityPoolTransaction_Filter>;
};
export type QueryLiveBetArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryLiveBetsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<LiveBet_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<LiveBet_Filter>;
};
export type QueryLiveConditionArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryLiveConditionsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<LiveCondition_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<LiveCondition_Filter>;
};
export type QueryLiveOutcomeArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryLiveOutcomesArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<LiveOutcome_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<LiveOutcome_Filter>;
};
export type QueryLiveSelectionArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryLiveSelectionsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<LiveSelection_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<LiveSelection_Filter>;
};
export type QueryOutcomeArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryOutcomesArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Outcome_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Outcome_Filter>;
};
export type QueryParticipantArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryParticipantsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Participant_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Participant_Filter>;
};
export type QuerySelectionArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QuerySelectionsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Selection_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Selection_Filter>;
};
export type QuerySportArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QuerySportHubArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QuerySportHubsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<SportHub_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<SportHub_Filter>;
};
export type QuerySportsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Sport_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Sport_Filter>;
};
export type Selection = {
    __typename?: 'Selection';
    _oddsDecimals: Scalars['Int']['output'];
    _outcomeId: Scalars['BigInt']['output'];
    bet: Bet;
    id: Scalars['ID']['output'];
    margin?: Maybe<Scalars['BigDecimal']['output']>;
    odds: Scalars['BigDecimal']['output'];
    outcome: Outcome;
    rawMargin?: Maybe<Scalars['BigInt']['output']>;
    rawOdds: Scalars['BigInt']['output'];
    result?: Maybe<SelectionResult>;
};
export declare enum SelectionResult {
    Lost = "Lost",
    Won = "Won"
}
export type Selection_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    _oddsDecimals?: InputMaybe<Scalars['Int']['input']>;
    _oddsDecimals_gt?: InputMaybe<Scalars['Int']['input']>;
    _oddsDecimals_gte?: InputMaybe<Scalars['Int']['input']>;
    _oddsDecimals_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    _oddsDecimals_lt?: InputMaybe<Scalars['Int']['input']>;
    _oddsDecimals_lte?: InputMaybe<Scalars['Int']['input']>;
    _oddsDecimals_not?: InputMaybe<Scalars['Int']['input']>;
    _oddsDecimals_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    _outcomeId?: InputMaybe<Scalars['BigInt']['input']>;
    _outcomeId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    _outcomeId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    _outcomeId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    _outcomeId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    _outcomeId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    _outcomeId_not?: InputMaybe<Scalars['BigInt']['input']>;
    _outcomeId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    bet?: InputMaybe<Scalars['String']['input']>;
    bet_?: InputMaybe<Bet_Filter>;
    bet_contains?: InputMaybe<Scalars['String']['input']>;
    bet_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    bet_ends_with?: InputMaybe<Scalars['String']['input']>;
    bet_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    bet_gt?: InputMaybe<Scalars['String']['input']>;
    bet_gte?: InputMaybe<Scalars['String']['input']>;
    bet_in?: InputMaybe<Array<Scalars['String']['input']>>;
    bet_lt?: InputMaybe<Scalars['String']['input']>;
    bet_lte?: InputMaybe<Scalars['String']['input']>;
    bet_not?: InputMaybe<Scalars['String']['input']>;
    bet_not_contains?: InputMaybe<Scalars['String']['input']>;
    bet_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    bet_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    bet_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    bet_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    bet_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    bet_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    bet_starts_with?: InputMaybe<Scalars['String']['input']>;
    bet_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    id_gt?: InputMaybe<Scalars['ID']['input']>;
    id_gte?: InputMaybe<Scalars['ID']['input']>;
    id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    id_lt?: InputMaybe<Scalars['ID']['input']>;
    id_lte?: InputMaybe<Scalars['ID']['input']>;
    id_not?: InputMaybe<Scalars['ID']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    margin?: InputMaybe<Scalars['BigDecimal']['input']>;
    margin_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
    margin_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
    margin_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    margin_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
    margin_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
    margin_not?: InputMaybe<Scalars['BigDecimal']['input']>;
    margin_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    odds?: InputMaybe<Scalars['BigDecimal']['input']>;
    odds_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
    odds_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
    odds_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    odds_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
    odds_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
    odds_not?: InputMaybe<Scalars['BigDecimal']['input']>;
    odds_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    outcome?: InputMaybe<Scalars['String']['input']>;
    outcome_?: InputMaybe<Outcome_Filter>;
    outcome_contains?: InputMaybe<Scalars['String']['input']>;
    outcome_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    outcome_ends_with?: InputMaybe<Scalars['String']['input']>;
    outcome_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    outcome_gt?: InputMaybe<Scalars['String']['input']>;
    outcome_gte?: InputMaybe<Scalars['String']['input']>;
    outcome_in?: InputMaybe<Array<Scalars['String']['input']>>;
    outcome_lt?: InputMaybe<Scalars['String']['input']>;
    outcome_lte?: InputMaybe<Scalars['String']['input']>;
    outcome_not?: InputMaybe<Scalars['String']['input']>;
    outcome_not_contains?: InputMaybe<Scalars['String']['input']>;
    outcome_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    outcome_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    outcome_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    outcome_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    outcome_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    outcome_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    outcome_starts_with?: InputMaybe<Scalars['String']['input']>;
    outcome_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    rawMargin?: InputMaybe<Scalars['BigInt']['input']>;
    rawMargin_gt?: InputMaybe<Scalars['BigInt']['input']>;
    rawMargin_gte?: InputMaybe<Scalars['BigInt']['input']>;
    rawMargin_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawMargin_lt?: InputMaybe<Scalars['BigInt']['input']>;
    rawMargin_lte?: InputMaybe<Scalars['BigInt']['input']>;
    rawMargin_not?: InputMaybe<Scalars['BigInt']['input']>;
    rawMargin_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawOdds?: InputMaybe<Scalars['BigInt']['input']>;
    rawOdds_gt?: InputMaybe<Scalars['BigInt']['input']>;
    rawOdds_gte?: InputMaybe<Scalars['BigInt']['input']>;
    rawOdds_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rawOdds_lt?: InputMaybe<Scalars['BigInt']['input']>;
    rawOdds_lte?: InputMaybe<Scalars['BigInt']['input']>;
    rawOdds_not?: InputMaybe<Scalars['BigInt']['input']>;
    rawOdds_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    result?: InputMaybe<SelectionResult>;
    result_in?: InputMaybe<Array<SelectionResult>>;
    result_not?: InputMaybe<SelectionResult>;
    result_not_in?: InputMaybe<Array<SelectionResult>>;
};
export declare enum Selection_OrderBy {
    OddsDecimals = "_oddsDecimals",
    OutcomeId = "_outcomeId",
    Bet = "bet",
    Id = "id",
    Margin = "margin",
    Odds = "odds",
    Outcome = "outcome",
    RawMargin = "rawMargin",
    RawOdds = "rawOdds",
    Result = "result"
}
export type Sport = {
    __typename?: 'Sport';
    countries: Array<Country>;
    games: Array<Game>;
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
    slug: Scalars['String']['output'];
    sportId: Scalars['BigInt']['output'];
    sporthub: SportHub;
};
export type SportCountriesArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Country_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<Country_Filter>;
};
export type SportGamesArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Game_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<Game_Filter>;
};
export type SportHub = {
    __typename?: 'SportHub';
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
    slug: Scalars['String']['output'];
    sports?: Maybe<Array<Sport>>;
};
export type SportHubSportsArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Sport_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<Sport_Filter>;
};
export type SportHub_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    id?: InputMaybe<Scalars['ID']['input']>;
    id_gt?: InputMaybe<Scalars['ID']['input']>;
    id_gte?: InputMaybe<Scalars['ID']['input']>;
    id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    id_lt?: InputMaybe<Scalars['ID']['input']>;
    id_lte?: InputMaybe<Scalars['ID']['input']>;
    id_not?: InputMaybe<Scalars['ID']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    name?: InputMaybe<Scalars['String']['input']>;
    name_contains?: InputMaybe<Scalars['String']['input']>;
    name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    name_ends_with?: InputMaybe<Scalars['String']['input']>;
    name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    name_gt?: InputMaybe<Scalars['String']['input']>;
    name_gte?: InputMaybe<Scalars['String']['input']>;
    name_in?: InputMaybe<Array<Scalars['String']['input']>>;
    name_lt?: InputMaybe<Scalars['String']['input']>;
    name_lte?: InputMaybe<Scalars['String']['input']>;
    name_not?: InputMaybe<Scalars['String']['input']>;
    name_not_contains?: InputMaybe<Scalars['String']['input']>;
    name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    name_starts_with?: InputMaybe<Scalars['String']['input']>;
    name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
    slug_contains?: InputMaybe<Scalars['String']['input']>;
    slug_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    slug_ends_with?: InputMaybe<Scalars['String']['input']>;
    slug_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    slug_gt?: InputMaybe<Scalars['String']['input']>;
    slug_gte?: InputMaybe<Scalars['String']['input']>;
    slug_in?: InputMaybe<Array<Scalars['String']['input']>>;
    slug_lt?: InputMaybe<Scalars['String']['input']>;
    slug_lte?: InputMaybe<Scalars['String']['input']>;
    slug_not?: InputMaybe<Scalars['String']['input']>;
    slug_not_contains?: InputMaybe<Scalars['String']['input']>;
    slug_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    slug_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    slug_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    slug_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    slug_starts_with?: InputMaybe<Scalars['String']['input']>;
    slug_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    sports_?: InputMaybe<Sport_Filter>;
};
export declare enum SportHub_OrderBy {
    Id = "id",
    Name = "name",
    Slug = "slug",
    Sports = "sports"
}
export type Sport_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    countries_?: InputMaybe<Country_Filter>;
    games_?: InputMaybe<Game_Filter>;
    id?: InputMaybe<Scalars['ID']['input']>;
    id_gt?: InputMaybe<Scalars['ID']['input']>;
    id_gte?: InputMaybe<Scalars['ID']['input']>;
    id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    id_lt?: InputMaybe<Scalars['ID']['input']>;
    id_lte?: InputMaybe<Scalars['ID']['input']>;
    id_not?: InputMaybe<Scalars['ID']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    name?: InputMaybe<Scalars['String']['input']>;
    name_contains?: InputMaybe<Scalars['String']['input']>;
    name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    name_ends_with?: InputMaybe<Scalars['String']['input']>;
    name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    name_gt?: InputMaybe<Scalars['String']['input']>;
    name_gte?: InputMaybe<Scalars['String']['input']>;
    name_in?: InputMaybe<Array<Scalars['String']['input']>>;
    name_lt?: InputMaybe<Scalars['String']['input']>;
    name_lte?: InputMaybe<Scalars['String']['input']>;
    name_not?: InputMaybe<Scalars['String']['input']>;
    name_not_contains?: InputMaybe<Scalars['String']['input']>;
    name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    name_starts_with?: InputMaybe<Scalars['String']['input']>;
    name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
    slug_contains?: InputMaybe<Scalars['String']['input']>;
    slug_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    slug_ends_with?: InputMaybe<Scalars['String']['input']>;
    slug_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    slug_gt?: InputMaybe<Scalars['String']['input']>;
    slug_gte?: InputMaybe<Scalars['String']['input']>;
    slug_in?: InputMaybe<Array<Scalars['String']['input']>>;
    slug_lt?: InputMaybe<Scalars['String']['input']>;
    slug_lte?: InputMaybe<Scalars['String']['input']>;
    slug_not?: InputMaybe<Scalars['String']['input']>;
    slug_not_contains?: InputMaybe<Scalars['String']['input']>;
    slug_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    slug_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    slug_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    slug_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    slug_starts_with?: InputMaybe<Scalars['String']['input']>;
    slug_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    sportId?: InputMaybe<Scalars['BigInt']['input']>;
    sportId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    sportId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    sportId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    sportId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    sportId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    sportId_not?: InputMaybe<Scalars['BigInt']['input']>;
    sportId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    sporthub?: InputMaybe<Scalars['String']['input']>;
    sporthub_?: InputMaybe<SportHub_Filter>;
    sporthub_contains?: InputMaybe<Scalars['String']['input']>;
    sporthub_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    sporthub_ends_with?: InputMaybe<Scalars['String']['input']>;
    sporthub_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    sporthub_gt?: InputMaybe<Scalars['String']['input']>;
    sporthub_gte?: InputMaybe<Scalars['String']['input']>;
    sporthub_in?: InputMaybe<Array<Scalars['String']['input']>>;
    sporthub_lt?: InputMaybe<Scalars['String']['input']>;
    sporthub_lte?: InputMaybe<Scalars['String']['input']>;
    sporthub_not?: InputMaybe<Scalars['String']['input']>;
    sporthub_not_contains?: InputMaybe<Scalars['String']['input']>;
    sporthub_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    sporthub_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    sporthub_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    sporthub_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    sporthub_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    sporthub_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    sporthub_starts_with?: InputMaybe<Scalars['String']['input']>;
    sporthub_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};
export declare enum Sport_OrderBy {
    Countries = "countries",
    Games = "games",
    Id = "id",
    Name = "name",
    Slug = "slug",
    SportId = "sportId",
    Sporthub = "sporthub"
}
export type Subscription = {
    __typename?: 'Subscription';
    /** Access to subgraph metadata */
    _meta?: Maybe<_Meta_>;
    azuroBetContract?: Maybe<AzuroBetContract>;
    azuroBetContracts: Array<AzuroBetContract>;
    bet?: Maybe<Bet>;
    betMargin?: Maybe<BetMargin>;
    betMargins: Array<BetMargin>;
    bets: Array<Bet>;
    bettor?: Maybe<Bettor>;
    bettors: Array<Bettor>;
    condition?: Maybe<Condition>;
    conditions: Array<Condition>;
    coreContract?: Maybe<CoreContract>;
    coreContracts: Array<CoreContract>;
    countries: Array<Country>;
    country?: Maybe<Country>;
    event?: Maybe<Event>;
    events: Array<Event>;
    expressPrematchRelation?: Maybe<ExpressPrematchRelation>;
    expressPrematchRelations: Array<ExpressPrematchRelation>;
    freebet?: Maybe<Freebet>;
    freebetContract?: Maybe<FreebetContract>;
    freebetContracts: Array<FreebetContract>;
    freebets: Array<Freebet>;
    game?: Maybe<Game>;
    games: Array<Game>;
    league?: Maybe<League>;
    leagues: Array<League>;
    liquidityPoolContract?: Maybe<LiquidityPoolContract>;
    liquidityPoolContracts: Array<LiquidityPoolContract>;
    liquidityPoolNft?: Maybe<LiquidityPoolNft>;
    liquidityPoolNfts: Array<LiquidityPoolNft>;
    liquidityPoolTransaction?: Maybe<LiquidityPoolTransaction>;
    liquidityPoolTransactions: Array<LiquidityPoolTransaction>;
    liveBet?: Maybe<LiveBet>;
    liveBets: Array<LiveBet>;
    liveCondition?: Maybe<LiveCondition>;
    liveConditions: Array<LiveCondition>;
    liveOutcome?: Maybe<LiveOutcome>;
    liveOutcomes: Array<LiveOutcome>;
    liveSelection?: Maybe<LiveSelection>;
    liveSelections: Array<LiveSelection>;
    outcome?: Maybe<Outcome>;
    outcomes: Array<Outcome>;
    participant?: Maybe<Participant>;
    participants: Array<Participant>;
    selection?: Maybe<Selection>;
    selections: Array<Selection>;
    sport?: Maybe<Sport>;
    sportHub?: Maybe<SportHub>;
    sportHubs: Array<SportHub>;
    sports: Array<Sport>;
};
export type Subscription_MetaArgs = {
    block?: InputMaybe<Block_Height>;
};
export type SubscriptionAzuroBetContractArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionAzuroBetContractsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<AzuroBetContract_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<AzuroBetContract_Filter>;
};
export type SubscriptionBetArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionBetMarginArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionBetMarginsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<BetMargin_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<BetMargin_Filter>;
};
export type SubscriptionBetsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Bet_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Bet_Filter>;
};
export type SubscriptionBettorArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionBettorsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Bettor_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Bettor_Filter>;
};
export type SubscriptionConditionArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionConditionsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Condition_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Condition_Filter>;
};
export type SubscriptionCoreContractArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionCoreContractsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<CoreContract_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<CoreContract_Filter>;
};
export type SubscriptionCountriesArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Country_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Country_Filter>;
};
export type SubscriptionCountryArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionEventArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionEventsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Event_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Event_Filter>;
};
export type SubscriptionExpressPrematchRelationArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionExpressPrematchRelationsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<ExpressPrematchRelation_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<ExpressPrematchRelation_Filter>;
};
export type SubscriptionFreebetArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionFreebetContractArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionFreebetContractsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<FreebetContract_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<FreebetContract_Filter>;
};
export type SubscriptionFreebetsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Freebet_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Freebet_Filter>;
};
export type SubscriptionGameArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionGamesArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Game_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Game_Filter>;
};
export type SubscriptionLeagueArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionLeaguesArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<League_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<League_Filter>;
};
export type SubscriptionLiquidityPoolContractArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionLiquidityPoolContractsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<LiquidityPoolContract_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<LiquidityPoolContract_Filter>;
};
export type SubscriptionLiquidityPoolNftArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionLiquidityPoolNftsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<LiquidityPoolNft_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<LiquidityPoolNft_Filter>;
};
export type SubscriptionLiquidityPoolTransactionArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionLiquidityPoolTransactionsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<LiquidityPoolTransaction_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<LiquidityPoolTransaction_Filter>;
};
export type SubscriptionLiveBetArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionLiveBetsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<LiveBet_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<LiveBet_Filter>;
};
export type SubscriptionLiveConditionArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionLiveConditionsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<LiveCondition_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<LiveCondition_Filter>;
};
export type SubscriptionLiveOutcomeArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionLiveOutcomesArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<LiveOutcome_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<LiveOutcome_Filter>;
};
export type SubscriptionLiveSelectionArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionLiveSelectionsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<LiveSelection_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<LiveSelection_Filter>;
};
export type SubscriptionOutcomeArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionOutcomesArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Outcome_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Outcome_Filter>;
};
export type SubscriptionParticipantArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionParticipantsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Participant_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Participant_Filter>;
};
export type SubscriptionSelectionArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionSelectionsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Selection_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Selection_Filter>;
};
export type SubscriptionSportArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionSportHubArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionSportHubsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<SportHub_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<SportHub_Filter>;
};
export type SubscriptionSportsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Sport_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Sport_Filter>;
};
export type _Block_ = {
    __typename?: '_Block_';
    /** The hash of the block */
    hash?: Maybe<Scalars['Bytes']['output']>;
    /** The block number */
    number: Scalars['Int']['output'];
    /** Integer representation of the timestamp stored in blocks for the chain */
    timestamp?: Maybe<Scalars['Int']['output']>;
};
/** The type for the top-level _meta field */
export type _Meta_ = {
    __typename?: '_Meta_';
    /**
     * Information about a specific subgraph block. The hash of the block
     * will be null if the _meta field has a block constraint that asks for
     * a block number. It will be filled if the _meta field has no block constraint
     * and therefore asks for the latest  block
     *
     */
    block: _Block_;
    /** The deployment ID */
    deployment: Scalars['String']['output'];
    /** If `true`, the subgraph encountered indexing errors at some past block */
    hasIndexingErrors: Scalars['Boolean']['output'];
};
export declare enum _SubgraphErrorPolicy_ {
    /** Data will be returned even if the subgraph has indexing errors */
    Allow = "allow",
    /** If the subgraph has indexing errors, data will be omitted. The default. */
    Deny = "deny"
}
