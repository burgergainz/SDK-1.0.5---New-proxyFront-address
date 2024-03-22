import {O as ODDS_DECIMALS,a as configRef,M as MAX_UINT_256,D as DEFAULT_DEADLINE}from'./config.js';export{c as chainsData}from'./config.js';import {u as useChain}from'./chainContext.js';export{C as ChainProvider}from'./chainContext.js';import {useMemo,useEffect,useState}from'react';import {gql,useQuery,useApolloClient}from'@apollo/client';import {getMarketName,getSelectionName,dictionaries,getMarketKey,getMarketDescription}from'@azuro-org/dictionaries';import {useAccount,useBalance,usePublicClient,useContractRead,useContractEvent,erc20ABI,useContractWrite,useWaitForTransaction}from'wagmi';import {parseUnits,decodeEventLog,formatUnits,encodeAbiParameters,parseAbiParameters}from'viem';import'viem/chains';import'react/jsx-runtime';var AzuroBetContract_OrderBy;
(function (AzuroBetContract_OrderBy) {
    AzuroBetContract_OrderBy["Address"] = "address";
    AzuroBetContract_OrderBy["Core"] = "core";
    AzuroBetContract_OrderBy["Id"] = "id";
})(AzuroBetContract_OrderBy || (AzuroBetContract_OrderBy = {}));
var BetMargin_OrderBy;
(function (BetMargin_OrderBy) {
    BetMargin_OrderBy["Id"] = "id";
    BetMargin_OrderBy["Margins"] = "margins";
})(BetMargin_OrderBy || (BetMargin_OrderBy = {}));
var BetResult;
(function (BetResult) {
    BetResult["Lost"] = "Lost";
    BetResult["Won"] = "Won";
})(BetResult || (BetResult = {}));
var BetStatus$1;
(function (BetStatus) {
    BetStatus["Accepted"] = "Accepted";
    BetStatus["Canceled"] = "Canceled";
    BetStatus["Resolved"] = "Resolved";
})(BetStatus$1 || (BetStatus$1 = {}));
var BetType;
(function (BetType) {
    BetType["Express"] = "Express";
    BetType["Ordinar"] = "Ordinar";
})(BetType || (BetType = {}));
var Bet_OrderBy;
(function (Bet_OrderBy) {
    Bet_OrderBy["CanceledSubBetsCount"] = "_canceledSubBetsCount";
    Bet_OrderBy["ConditionIds"] = "_conditionIds";
    Bet_OrderBy["Conditions"] = "_conditions";
    Bet_OrderBy["Games"] = "_games";
    Bet_OrderBy["IsFreebet"] = "_isFreebet";
    Bet_OrderBy["LostSubBetsCount"] = "_lostSubBetsCount";
    Bet_OrderBy["MarginsForSettle"] = "_marginsForSettle";
    Bet_OrderBy["OddsDecimals"] = "_oddsDecimals";
    Bet_OrderBy["SubBetsCount"] = "_subBetsCount";
    Bet_OrderBy["TokenDecimals"] = "_tokenDecimals";
    Bet_OrderBy["UpdatedAt"] = "_updatedAt";
    Bet_OrderBy["WonSubBetsCount"] = "_wonSubBetsCount";
    Bet_OrderBy["Actor"] = "actor";
    Bet_OrderBy["Affiliate"] = "affiliate";
    Bet_OrderBy["Amount"] = "amount";
    Bet_OrderBy["ApproxSettledAt"] = "approxSettledAt";
    Bet_OrderBy["BetId"] = "betId";
    Bet_OrderBy["Bettor"] = "bettor";
    Bet_OrderBy["Core"] = "core";
    Bet_OrderBy["CreatedBlockNumber"] = "createdBlockNumber";
    Bet_OrderBy["CreatedBlockTimestamp"] = "createdBlockTimestamp";
    Bet_OrderBy["CreatedTxHash"] = "createdTxHash";
    Bet_OrderBy["Freebet"] = "freebet";
    Bet_OrderBy["Id"] = "id";
    Bet_OrderBy["IsRedeemable"] = "isRedeemable";
    Bet_OrderBy["IsRedeemed"] = "isRedeemed";
    Bet_OrderBy["Odds"] = "odds";
    Bet_OrderBy["Owner"] = "owner";
    Bet_OrderBy["Payout"] = "payout";
    Bet_OrderBy["PotentialPayout"] = "potentialPayout";
    Bet_OrderBy["RawAmount"] = "rawAmount";
    Bet_OrderBy["RawOdds"] = "rawOdds";
    Bet_OrderBy["RawPayout"] = "rawPayout";
    Bet_OrderBy["RawPotentialPayout"] = "rawPotentialPayout";
    Bet_OrderBy["RawSettledMargin"] = "rawSettledMargin";
    Bet_OrderBy["RawSettledOdds"] = "rawSettledOdds";
    Bet_OrderBy["RedeemedBlockNumber"] = "redeemedBlockNumber";
    Bet_OrderBy["RedeemedBlockTimestamp"] = "redeemedBlockTimestamp";
    Bet_OrderBy["RedeemedTxHash"] = "redeemedTxHash";
    Bet_OrderBy["ResolvedBlockNumber"] = "resolvedBlockNumber";
    Bet_OrderBy["ResolvedBlockTimestamp"] = "resolvedBlockTimestamp";
    Bet_OrderBy["ResolvedTxHash"] = "resolvedTxHash";
    Bet_OrderBy["Result"] = "result";
    Bet_OrderBy["Selections"] = "selections";
    Bet_OrderBy["SettledMargin"] = "settledMargin";
    Bet_OrderBy["SettledOdds"] = "settledOdds";
    Bet_OrderBy["Status"] = "status";
    Bet_OrderBy["Type"] = "type";
})(Bet_OrderBy || (Bet_OrderBy = {}));
var Bettor_OrderBy;
(function (Bettor_OrderBy) {
    Bettor_OrderBy["UpdatedAt"] = "_updatedAt";
    Bettor_OrderBy["Address"] = "address";
    Bettor_OrderBy["Affiliate"] = "affiliate";
    Bettor_OrderBy["AvgBetAmount"] = "avgBetAmount";
    Bettor_OrderBy["BetsCount"] = "betsCount";
    Bettor_OrderBy["BiggestBetAmount"] = "biggestBetAmount";
    Bettor_OrderBy["BiggestPayout"] = "biggestPayout";
    Bettor_OrderBy["CanceledBetsCount"] = "canceledBetsCount";
    Bettor_OrderBy["Id"] = "id";
    Bettor_OrderBy["InBets"] = "inBets";
    Bettor_OrderBy["LostBetsCount"] = "lostBetsCount";
    Bettor_OrderBy["Pnl"] = "pnl";
    Bettor_OrderBy["RawAvgBetAmount"] = "rawAvgBetAmount";
    Bettor_OrderBy["RawBiggestBetAmount"] = "rawBiggestBetAmount";
    Bettor_OrderBy["RawBiggestPayout"] = "rawBiggestPayout";
    Bettor_OrderBy["RawInBets"] = "rawInBets";
    Bettor_OrderBy["RawToPayout"] = "rawToPayout";
    Bettor_OrderBy["RawTotalPayout"] = "rawTotalPayout";
    Bettor_OrderBy["RawTotalProfit"] = "rawTotalProfit";
    Bettor_OrderBy["RawTurnover"] = "rawTurnover";
    Bettor_OrderBy["RedeemedBetsCount"] = "redeemedBetsCount";
    Bettor_OrderBy["SettledBetsCount"] = "settledBetsCount";
    Bettor_OrderBy["ToPayout"] = "toPayout";
    Bettor_OrderBy["TotalPayout"] = "totalPayout";
    Bettor_OrderBy["TotalProfit"] = "totalProfit";
    Bettor_OrderBy["Turnover"] = "turnover";
    Bettor_OrderBy["WonBetsCount"] = "wonBetsCount";
})(Bettor_OrderBy || (Bettor_OrderBy = {}));
var ConditionStatus;
(function (ConditionStatus) {
    ConditionStatus["Canceled"] = "Canceled";
    ConditionStatus["Created"] = "Created";
    ConditionStatus["Paused"] = "Paused";
    ConditionStatus["Resolved"] = "Resolved";
})(ConditionStatus || (ConditionStatus = {}));
var Condition_OrderBy;
(function (Condition_OrderBy) {
    Condition_OrderBy["UpdatedAt"] = "_updatedAt";
    Condition_OrderBy["WinningOutcomesCount"] = "_winningOutcomesCount";
    Condition_OrderBy["ConditionId"] = "conditionId";
    Condition_OrderBy["Core"] = "core";
    Condition_OrderBy["CoreAddress"] = "coreAddress";
    Condition_OrderBy["CreatedBlockNumber"] = "createdBlockNumber";
    Condition_OrderBy["CreatedBlockTimestamp"] = "createdBlockTimestamp";
    Condition_OrderBy["CreatedTxHash"] = "createdTxHash";
    Condition_OrderBy["Game"] = "game";
    Condition_OrderBy["Id"] = "id";
    Condition_OrderBy["InternalStartsAt"] = "internalStartsAt";
    Condition_OrderBy["IsExpressForbidden"] = "isExpressForbidden";
    Condition_OrderBy["Margin"] = "margin";
    Condition_OrderBy["Outcomes"] = "outcomes";
    Condition_OrderBy["OutcomesIds"] = "outcomesIds";
    Condition_OrderBy["Provider"] = "provider";
    Condition_OrderBy["Reinforcement"] = "reinforcement";
    Condition_OrderBy["ResolvedBlockNumber"] = "resolvedBlockNumber";
    Condition_OrderBy["ResolvedBlockTimestamp"] = "resolvedBlockTimestamp";
    Condition_OrderBy["ResolvedTxHash"] = "resolvedTxHash";
    Condition_OrderBy["Status"] = "status";
    Condition_OrderBy["Turnover"] = "turnover";
    Condition_OrderBy["WonOutcomeIds"] = "wonOutcomeIds";
    Condition_OrderBy["WonOutcomes"] = "wonOutcomes";
})(Condition_OrderBy || (Condition_OrderBy = {}));
var CoreContract_OrderBy;
(function (CoreContract_OrderBy) {
    CoreContract_OrderBy["Address"] = "address";
    CoreContract_OrderBy["Id"] = "id";
    CoreContract_OrderBy["LiquidityPool"] = "liquidityPool";
    CoreContract_OrderBy["Type"] = "type";
})(CoreContract_OrderBy || (CoreContract_OrderBy = {}));
var Country_OrderBy;
(function (Country_OrderBy) {
    Country_OrderBy["ActiveLeaguesEntityIds"] = "activeLeaguesEntityIds";
    Country_OrderBy["HasActiveLeagues"] = "hasActiveLeagues";
    Country_OrderBy["Id"] = "id";
    Country_OrderBy["Leagues"] = "leagues";
    Country_OrderBy["Name"] = "name";
    Country_OrderBy["Slug"] = "slug";
    Country_OrderBy["Sport"] = "sport";
    Country_OrderBy["Turnover"] = "turnover";
})(Country_OrderBy || (Country_OrderBy = {}));
var EventName;
(function (EventName) {
    EventName["AzuroBetTransfer"] = "AzuroBetTransfer";
    EventName["BetSettled"] = "BetSettled";
    EventName["BettorWin"] = "BettorWin";
    EventName["ConditionCreated"] = "ConditionCreated";
    EventName["ConditionResolved"] = "ConditionResolved";
    EventName["ConditionShifted"] = "ConditionShifted";
    EventName["ConditionStopped"] = "ConditionStopped";
    EventName["FreeBetBettorWin"] = "FreeBetBettorWin";
    EventName["FreeBetMinted"] = "FreeBetMinted";
    EventName["FreeBetRedeemed"] = "FreeBetRedeemed";
    EventName["FreeBetReissued"] = "FreeBetReissued";
    EventName["FreeBetTransfer"] = "FreeBetTransfer";
    EventName["GameShifted"] = "GameShifted";
    EventName["LiquidityAdded"] = "LiquidityAdded";
    EventName["LiquidityRemoved"] = "LiquidityRemoved";
    EventName["LiquidityTransfer"] = "LiquidityTransfer";
    EventName["LiveBetSettled"] = "LiveBetSettled";
    EventName["MarginChanged"] = "MarginChanged";
    EventName["NewBet"] = "NewBet";
    EventName["NewGame"] = "NewGame";
    EventName["NewLiveBet"] = "NewLiveBet";
    EventName["ReinforcementChanged"] = "ReinforcementChanged";
})(EventName || (EventName = {}));
var Event_OrderBy;
(function (Event_OrderBy) {
    Event_OrderBy["BetId"] = "betId";
    Event_OrderBy["BlockNumber"] = "blockNumber";
    Event_OrderBy["BlockTimestamp"] = "blockTimestamp";
    Event_OrderBy["ConditionId"] = "conditionId";
    Event_OrderBy["ContractAddress"] = "contractAddress";
    Event_OrderBy["DepositId"] = "depositId";
    Event_OrderBy["FreebetId"] = "freebetId";
    Event_OrderBy["GameId"] = "gameId";
    Event_OrderBy["GasPrice"] = "gasPrice";
    Event_OrderBy["GasUsed"] = "gasUsed";
    Event_OrderBy["Id"] = "id";
    Event_OrderBy["LogIndex"] = "logIndex";
    Event_OrderBy["Name"] = "name";
    Event_OrderBy["SortOrder"] = "sortOrder";
    Event_OrderBy["TransactionIndex"] = "transactionIndex";
    Event_OrderBy["TxHash"] = "txHash";
})(Event_OrderBy || (Event_OrderBy = {}));
var ExpressPrematchRelation_OrderBy;
(function (ExpressPrematchRelation_OrderBy) {
    ExpressPrematchRelation_OrderBy["Id"] = "id";
    ExpressPrematchRelation_OrderBy["PrematchAddress"] = "prematchAddress";
})(ExpressPrematchRelation_OrderBy || (ExpressPrematchRelation_OrderBy = {}));
var FreebetContract_OrderBy;
(function (FreebetContract_OrderBy) {
    FreebetContract_OrderBy["Address"] = "address";
    FreebetContract_OrderBy["Affiliate"] = "affiliate";
    FreebetContract_OrderBy["Id"] = "id";
    FreebetContract_OrderBy["LiquidityPool"] = "liquidityPool";
    FreebetContract_OrderBy["Manager"] = "manager";
    FreebetContract_OrderBy["Name"] = "name";
})(FreebetContract_OrderBy || (FreebetContract_OrderBy = {}));
var FreebetStatus;
(function (FreebetStatus) {
    FreebetStatus["Created"] = "Created";
    FreebetStatus["Redeemed"] = "Redeemed";
    FreebetStatus["Reissued"] = "Reissued";
    FreebetStatus["Withdrawn"] = "Withdrawn";
})(FreebetStatus || (FreebetStatus = {}));
var Freebet_OrderBy;
(function (Freebet_OrderBy) {
    Freebet_OrderBy["UpdatedAt"] = "_updatedAt";
    Freebet_OrderBy["Amount"] = "amount";
    Freebet_OrderBy["AzuroBetId"] = "azuroBetId";
    Freebet_OrderBy["Burned"] = "burned";
    Freebet_OrderBy["Core"] = "core";
    Freebet_OrderBy["CreatedBlockNumber"] = "createdBlockNumber";
    Freebet_OrderBy["CreatedBlockTimestamp"] = "createdBlockTimestamp";
    Freebet_OrderBy["CreatedTxHash"] = "createdTxHash";
    Freebet_OrderBy["DurationTime"] = "durationTime";
    Freebet_OrderBy["ExpiresAt"] = "expiresAt";
    Freebet_OrderBy["Freebet"] = "freebet";
    Freebet_OrderBy["FreebetContractAddress"] = "freebetContractAddress";
    Freebet_OrderBy["FreebetContractAffiliate"] = "freebetContractAffiliate";
    Freebet_OrderBy["FreebetContractName"] = "freebetContractName";
    Freebet_OrderBy["FreebetId"] = "freebetId";
    Freebet_OrderBy["Id"] = "id";
    Freebet_OrderBy["IsResolved"] = "isResolved";
    Freebet_OrderBy["MinOdds"] = "minOdds";
    Freebet_OrderBy["Owner"] = "owner";
    Freebet_OrderBy["RawAmount"] = "rawAmount";
    Freebet_OrderBy["RawMinOdds"] = "rawMinOdds";
    Freebet_OrderBy["Status"] = "status";
    Freebet_OrderBy["TokenDecimals"] = "tokenDecimals";
})(Freebet_OrderBy || (Freebet_OrderBy = {}));
var GameStatus$1;
(function (GameStatus) {
    GameStatus["Canceled"] = "Canceled";
    GameStatus["Created"] = "Created";
    GameStatus["Paused"] = "Paused";
    GameStatus["Resolved"] = "Resolved";
})(GameStatus$1 || (GameStatus$1 = {}));
var Game_OrderBy;
(function (Game_OrderBy) {
    Game_OrderBy["ActiveConditionsEntityIds"] = "_activeConditionsEntityIds";
    Game_OrderBy["CanceledConditionsEntityIds"] = "_canceledConditionsEntityIds";
    Game_OrderBy["PausedConditionsEntityIds"] = "_pausedConditionsEntityIds";
    Game_OrderBy["ResolvedConditionsEntityIds"] = "_resolvedConditionsEntityIds";
    Game_OrderBy["UpdatedAt"] = "_updatedAt";
    Game_OrderBy["Conditions"] = "conditions";
    Game_OrderBy["CreatedBlockNumber"] = "createdBlockNumber";
    Game_OrderBy["CreatedBlockTimestamp"] = "createdBlockTimestamp";
    Game_OrderBy["CreatedTxHash"] = "createdTxHash";
    Game_OrderBy["GameId"] = "gameId";
    Game_OrderBy["HasActiveConditions"] = "hasActiveConditions";
    Game_OrderBy["Id"] = "id";
    Game_OrderBy["League"] = "league";
    Game_OrderBy["LiquidityPool"] = "liquidityPool";
    Game_OrderBy["Participants"] = "participants";
    Game_OrderBy["Provider"] = "provider";
    Game_OrderBy["ResolvedBlockNumber"] = "resolvedBlockNumber";
    Game_OrderBy["ResolvedBlockTimestamp"] = "resolvedBlockTimestamp";
    Game_OrderBy["ResolvedTxHash"] = "resolvedTxHash";
    Game_OrderBy["ShiftedBlockNumber"] = "shiftedBlockNumber";
    Game_OrderBy["ShiftedBlockTimestamp"] = "shiftedBlockTimestamp";
    Game_OrderBy["ShiftedTxHash"] = "shiftedTxHash";
    Game_OrderBy["Slug"] = "slug";
    Game_OrderBy["Sport"] = "sport";
    Game_OrderBy["StartsAt"] = "startsAt";
    Game_OrderBy["Status"] = "status";
    Game_OrderBy["Title"] = "title";
    Game_OrderBy["Turnover"] = "turnover";
})(Game_OrderBy || (Game_OrderBy = {}));
var League_OrderBy;
(function (League_OrderBy) {
    League_OrderBy["ActiveGamesEntityIds"] = "activeGamesEntityIds";
    League_OrderBy["Country"] = "country";
    League_OrderBy["Games"] = "games";
    League_OrderBy["HasActiveGames"] = "hasActiveGames";
    League_OrderBy["Id"] = "id";
    League_OrderBy["Name"] = "name";
    League_OrderBy["Slug"] = "slug";
    League_OrderBy["Turnover"] = "turnover";
})(League_OrderBy || (League_OrderBy = {}));
var LiquidityPoolContractType;
(function (LiquidityPoolContractType) {
    LiquidityPoolContractType["V1"] = "V1";
    LiquidityPoolContractType["V2"] = "V2";
})(LiquidityPoolContractType || (LiquidityPoolContractType = {}));
var LiquidityPoolContract_OrderBy;
(function (LiquidityPoolContract_OrderBy) {
    LiquidityPoolContract_OrderBy["Address"] = "address";
    LiquidityPoolContract_OrderBy["Apr"] = "apr";
    LiquidityPoolContract_OrderBy["Asset"] = "asset";
    LiquidityPoolContract_OrderBy["BetsAmount"] = "betsAmount";
    LiquidityPoolContract_OrderBy["BetsCount"] = "betsCount";
    LiquidityPoolContract_OrderBy["ChainId"] = "chainId";
    LiquidityPoolContract_OrderBy["ChainName"] = "chainName";
    LiquidityPoolContract_OrderBy["CoreAddresses"] = "coreAddresses";
    LiquidityPoolContract_OrderBy["Cores"] = "cores";
    LiquidityPoolContract_OrderBy["DaysSinceDeployment"] = "daysSinceDeployment";
    LiquidityPoolContract_OrderBy["DepositedAmount"] = "depositedAmount";
    LiquidityPoolContract_OrderBy["DepositedWithStakingAmount"] = "depositedWithStakingAmount";
    LiquidityPoolContract_OrderBy["FirstCalculatedBlockNumber"] = "firstCalculatedBlockNumber";
    LiquidityPoolContract_OrderBy["FirstCalculatedBlockTimestamp"] = "firstCalculatedBlockTimestamp";
    LiquidityPoolContract_OrderBy["Id"] = "id";
    LiquidityPoolContract_OrderBy["LastCalculatedBlockNumber"] = "lastCalculatedBlockNumber";
    LiquidityPoolContract_OrderBy["LastCalculatedBlockTimestamp"] = "lastCalculatedBlockTimestamp";
    LiquidityPoolContract_OrderBy["LiquidityManager"] = "liquidityManager";
    LiquidityPoolContract_OrderBy["Nfts"] = "nfts";
    LiquidityPoolContract_OrderBy["RawApr"] = "rawApr";
    LiquidityPoolContract_OrderBy["RawTvl"] = "rawTvl";
    LiquidityPoolContract_OrderBy["Token"] = "token";
    LiquidityPoolContract_OrderBy["TokenDecimals"] = "tokenDecimals";
    LiquidityPoolContract_OrderBy["Tvl"] = "tvl";
    LiquidityPoolContract_OrderBy["Type"] = "type";
    LiquidityPoolContract_OrderBy["WithdrawTimeout"] = "withdrawTimeout";
    LiquidityPoolContract_OrderBy["WithdrawnAmount"] = "withdrawnAmount";
    LiquidityPoolContract_OrderBy["WithdrawnWithStakingAmount"] = "withdrawnWithStakingAmount";
    LiquidityPoolContract_OrderBy["WonBetsAmount"] = "wonBetsAmount";
    LiquidityPoolContract_OrderBy["WonBetsCount"] = "wonBetsCount";
})(LiquidityPoolContract_OrderBy || (LiquidityPoolContract_OrderBy = {}));
var LiquidityPoolNft_OrderBy;
(function (LiquidityPoolNft_OrderBy) {
    LiquidityPoolNft_OrderBy["CreateBlockNumber"] = "createBlockNumber";
    LiquidityPoolNft_OrderBy["CreateBlockTimestamp"] = "createBlockTimestamp";
    LiquidityPoolNft_OrderBy["DepositedAmount"] = "depositedAmount";
    LiquidityPoolNft_OrderBy["HistoricalOwners"] = "historicalOwners";
    LiquidityPoolNft_OrderBy["Id"] = "id";
    LiquidityPoolNft_OrderBy["IsFullyWithdrawn"] = "isFullyWithdrawn";
    LiquidityPoolNft_OrderBy["LiquidityPool"] = "liquidityPool";
    LiquidityPoolNft_OrderBy["NftId"] = "nftId";
    LiquidityPoolNft_OrderBy["Owner"] = "owner";
    LiquidityPoolNft_OrderBy["RawDepositedAmount"] = "rawDepositedAmount";
    LiquidityPoolNft_OrderBy["RawWithdrawnAmount"] = "rawWithdrawnAmount";
    LiquidityPoolNft_OrderBy["Transactions"] = "transactions";
    LiquidityPoolNft_OrderBy["WithdrawTimeout"] = "withdrawTimeout";
    LiquidityPoolNft_OrderBy["WithdrawnAmount"] = "withdrawnAmount";
})(LiquidityPoolNft_OrderBy || (LiquidityPoolNft_OrderBy = {}));
var LiquidityPoolTransactionType;
(function (LiquidityPoolTransactionType) {
    LiquidityPoolTransactionType["Deposit"] = "Deposit";
    LiquidityPoolTransactionType["Withdrawal"] = "Withdrawal";
})(LiquidityPoolTransactionType || (LiquidityPoolTransactionType = {}));
var LiquidityPoolTransaction_OrderBy;
(function (LiquidityPoolTransaction_OrderBy) {
    LiquidityPoolTransaction_OrderBy["Account"] = "account";
    LiquidityPoolTransaction_OrderBy["Amount"] = "amount";
    LiquidityPoolTransaction_OrderBy["BlockNumber"] = "blockNumber";
    LiquidityPoolTransaction_OrderBy["BlockTimestamp"] = "blockTimestamp";
    LiquidityPoolTransaction_OrderBy["Id"] = "id";
    LiquidityPoolTransaction_OrderBy["LiquidityPool"] = "liquidityPool";
    LiquidityPoolTransaction_OrderBy["Nft"] = "nft";
    LiquidityPoolTransaction_OrderBy["RawAmount"] = "rawAmount";
    LiquidityPoolTransaction_OrderBy["TxHash"] = "txHash";
    LiquidityPoolTransaction_OrderBy["Type"] = "type";
})(LiquidityPoolTransaction_OrderBy || (LiquidityPoolTransaction_OrderBy = {}));
var LiveBet_OrderBy;
(function (LiveBet_OrderBy) {
    LiveBet_OrderBy["CanceledSubBetsCount"] = "_canceledSubBetsCount";
    LiveBet_OrderBy["ConditionIds"] = "_conditionIds";
    LiveBet_OrderBy["Conditions"] = "_conditions";
    LiveBet_OrderBy["GamesIds"] = "_gamesIds";
    LiveBet_OrderBy["IsFreebet"] = "_isFreebet";
    LiveBet_OrderBy["LostSubBetsCount"] = "_lostSubBetsCount";
    LiveBet_OrderBy["MarginsForSettle"] = "_marginsForSettle";
    LiveBet_OrderBy["OddsDecimals"] = "_oddsDecimals";
    LiveBet_OrderBy["SubBetsCount"] = "_subBetsCount";
    LiveBet_OrderBy["TokenDecimals"] = "_tokenDecimals";
    LiveBet_OrderBy["UpdatedAt"] = "_updatedAt";
    LiveBet_OrderBy["WonSubBetsCount"] = "_wonSubBetsCount";
    LiveBet_OrderBy["Actor"] = "actor";
    LiveBet_OrderBy["Affiliate"] = "affiliate";
    LiveBet_OrderBy["Amount"] = "amount";
    LiveBet_OrderBy["BetId"] = "betId";
    LiveBet_OrderBy["Bettor"] = "bettor";
    LiveBet_OrderBy["Core"] = "core";
    LiveBet_OrderBy["CreatedBlockNumber"] = "createdBlockNumber";
    LiveBet_OrderBy["CreatedBlockTimestamp"] = "createdBlockTimestamp";
    LiveBet_OrderBy["CreatedTxHash"] = "createdTxHash";
    LiveBet_OrderBy["Freebet"] = "freebet";
    LiveBet_OrderBy["Id"] = "id";
    LiveBet_OrderBy["IsRedeemable"] = "isRedeemable";
    LiveBet_OrderBy["IsRedeemed"] = "isRedeemed";
    LiveBet_OrderBy["Nonce"] = "nonce";
    LiveBet_OrderBy["Odds"] = "odds";
    LiveBet_OrderBy["Owner"] = "owner";
    LiveBet_OrderBy["Payout"] = "payout";
    LiveBet_OrderBy["PayoutLimit"] = "payoutLimit";
    LiveBet_OrderBy["PotentialPayout"] = "potentialPayout";
    LiveBet_OrderBy["RawAmount"] = "rawAmount";
    LiveBet_OrderBy["RawOdds"] = "rawOdds";
    LiveBet_OrderBy["RawPayout"] = "rawPayout";
    LiveBet_OrderBy["RawPayoutLimit"] = "rawPayoutLimit";
    LiveBet_OrderBy["RawPotentialPayout"] = "rawPotentialPayout";
    LiveBet_OrderBy["RawSettledMargin"] = "rawSettledMargin";
    LiveBet_OrderBy["RawSettledOdds"] = "rawSettledOdds";
    LiveBet_OrderBy["RedeemedBlockNumber"] = "redeemedBlockNumber";
    LiveBet_OrderBy["RedeemedBlockTimestamp"] = "redeemedBlockTimestamp";
    LiveBet_OrderBy["RedeemedTxHash"] = "redeemedTxHash";
    LiveBet_OrderBy["ResolvedBlockNumber"] = "resolvedBlockNumber";
    LiveBet_OrderBy["ResolvedBlockTimestamp"] = "resolvedBlockTimestamp";
    LiveBet_OrderBy["ResolvedTxHash"] = "resolvedTxHash";
    LiveBet_OrderBy["Result"] = "result";
    LiveBet_OrderBy["Selections"] = "selections";
    LiveBet_OrderBy["SettledMargin"] = "settledMargin";
    LiveBet_OrderBy["SettledOdds"] = "settledOdds";
    LiveBet_OrderBy["Status"] = "status";
})(LiveBet_OrderBy || (LiveBet_OrderBy = {}));
var LiveCondition_OrderBy;
(function (LiveCondition_OrderBy) {
    LiveCondition_OrderBy["UpdatedAt"] = "_updatedAt";
    LiveCondition_OrderBy["WinningOutcomesCount"] = "_winningOutcomesCount";
    LiveCondition_OrderBy["ConditionId"] = "conditionId";
    LiveCondition_OrderBy["Core"] = "core";
    LiveCondition_OrderBy["CoreAddress"] = "coreAddress";
    LiveCondition_OrderBy["CreatedBlockNumber"] = "createdBlockNumber";
    LiveCondition_OrderBy["CreatedBlockTimestamp"] = "createdBlockTimestamp";
    LiveCondition_OrderBy["CreatedTxHash"] = "createdTxHash";
    LiveCondition_OrderBy["GameId"] = "gameId";
    LiveCondition_OrderBy["Id"] = "id";
    LiveCondition_OrderBy["Outcomes"] = "outcomes";
    LiveCondition_OrderBy["OutcomesIds"] = "outcomesIds";
    LiveCondition_OrderBy["ResolvedBlockNumber"] = "resolvedBlockNumber";
    LiveCondition_OrderBy["ResolvedBlockTimestamp"] = "resolvedBlockTimestamp";
    LiveCondition_OrderBy["ResolvedTxHash"] = "resolvedTxHash";
    LiveCondition_OrderBy["Status"] = "status";
    LiveCondition_OrderBy["Turnover"] = "turnover";
    LiveCondition_OrderBy["WonOutcomeIds"] = "wonOutcomeIds";
    LiveCondition_OrderBy["WonOutcomes"] = "wonOutcomes";
})(LiveCondition_OrderBy || (LiveCondition_OrderBy = {}));
var LiveOutcome_OrderBy;
(function (LiveOutcome_OrderBy) {
    LiveOutcome_OrderBy["BetsEntityIds"] = "_betsEntityIds";
    LiveOutcome_OrderBy["UpdatedAt"] = "_updatedAt";
    LiveOutcome_OrderBy["Condition"] = "condition";
    LiveOutcome_OrderBy["Core"] = "core";
    LiveOutcome_OrderBy["Id"] = "id";
    LiveOutcome_OrderBy["OutcomeId"] = "outcomeId";
    LiveOutcome_OrderBy["Result"] = "result";
    LiveOutcome_OrderBy["Selections"] = "selections";
    LiveOutcome_OrderBy["SortOrder"] = "sortOrder";
})(LiveOutcome_OrderBy || (LiveOutcome_OrderBy = {}));
var LiveSelection_OrderBy;
(function (LiveSelection_OrderBy) {
    LiveSelection_OrderBy["OddsDecimals"] = "_oddsDecimals";
    LiveSelection_OrderBy["OutcomeId"] = "_outcomeId";
    LiveSelection_OrderBy["Bet"] = "bet";
    LiveSelection_OrderBy["Id"] = "id";
    LiveSelection_OrderBy["Margin"] = "margin";
    LiveSelection_OrderBy["Odds"] = "odds";
    LiveSelection_OrderBy["Outcome"] = "outcome";
    LiveSelection_OrderBy["RawMargin"] = "rawMargin";
    LiveSelection_OrderBy["RawOdds"] = "rawOdds";
    LiveSelection_OrderBy["Result"] = "result";
})(LiveSelection_OrderBy || (LiveSelection_OrderBy = {}));
/** Defines the order direction, either ascending or descending */
var OrderDirection;
(function (OrderDirection) {
    OrderDirection["Asc"] = "asc";
    OrderDirection["Desc"] = "desc";
})(OrderDirection || (OrderDirection = {}));
var OutcomeResult;
(function (OutcomeResult) {
    OutcomeResult["Lost"] = "Lost";
    OutcomeResult["Won"] = "Won";
})(OutcomeResult || (OutcomeResult = {}));
var Outcome_OrderBy;
(function (Outcome_OrderBy) {
    Outcome_OrderBy["BetsEntityIds"] = "_betsEntityIds";
    Outcome_OrderBy["UpdatedAt"] = "_updatedAt";
    Outcome_OrderBy["Condition"] = "condition";
    Outcome_OrderBy["Core"] = "core";
    Outcome_OrderBy["CurrentOdds"] = "currentOdds";
    Outcome_OrderBy["Fund"] = "fund";
    Outcome_OrderBy["Id"] = "id";
    Outcome_OrderBy["OutcomeId"] = "outcomeId";
    Outcome_OrderBy["RawCurrentOdds"] = "rawCurrentOdds";
    Outcome_OrderBy["Result"] = "result";
    Outcome_OrderBy["Selections"] = "selections";
    Outcome_OrderBy["SortOrder"] = "sortOrder";
})(Outcome_OrderBy || (Outcome_OrderBy = {}));
var Participant_OrderBy;
(function (Participant_OrderBy) {
    Participant_OrderBy["Game"] = "game";
    Participant_OrderBy["Id"] = "id";
    Participant_OrderBy["Image"] = "image";
    Participant_OrderBy["Name"] = "name";
    Participant_OrderBy["SortOrder"] = "sortOrder";
})(Participant_OrderBy || (Participant_OrderBy = {}));
var SelectionResult;
(function (SelectionResult) {
    SelectionResult["Lost"] = "Lost";
    SelectionResult["Won"] = "Won";
})(SelectionResult || (SelectionResult = {}));
var Selection_OrderBy;
(function (Selection_OrderBy) {
    Selection_OrderBy["OddsDecimals"] = "_oddsDecimals";
    Selection_OrderBy["OutcomeId"] = "_outcomeId";
    Selection_OrderBy["Bet"] = "bet";
    Selection_OrderBy["Id"] = "id";
    Selection_OrderBy["Margin"] = "margin";
    Selection_OrderBy["Odds"] = "odds";
    Selection_OrderBy["Outcome"] = "outcome";
    Selection_OrderBy["RawMargin"] = "rawMargin";
    Selection_OrderBy["RawOdds"] = "rawOdds";
    Selection_OrderBy["Result"] = "result";
})(Selection_OrderBy || (Selection_OrderBy = {}));
var SportHub_OrderBy;
(function (SportHub_OrderBy) {
    SportHub_OrderBy["Id"] = "id";
    SportHub_OrderBy["Name"] = "name";
    SportHub_OrderBy["Slug"] = "slug";
    SportHub_OrderBy["Sports"] = "sports";
})(SportHub_OrderBy || (SportHub_OrderBy = {}));
var Sport_OrderBy;
(function (Sport_OrderBy) {
    Sport_OrderBy["Countries"] = "countries";
    Sport_OrderBy["Games"] = "games";
    Sport_OrderBy["Id"] = "id";
    Sport_OrderBy["Name"] = "name";
    Sport_OrderBy["Slug"] = "slug";
    Sport_OrderBy["SportId"] = "sportId";
    Sport_OrderBy["Sporthub"] = "sporthub";
})(Sport_OrderBy || (Sport_OrderBy = {}));
var _SubgraphErrorPolicy_;
(function (_SubgraphErrorPolicy_) {
    /** Data will be returned even if the subgraph has indexing errors */
    _SubgraphErrorPolicy_["Allow"] = "allow";
    /** If the subgraph has indexing errors, data will be omitted. The default. */
    _SubgraphErrorPolicy_["Deny"] = "deny";
})(_SubgraphErrorPolicy_ || (_SubgraphErrorPolicy_ = {}));const calcMindOdds = (props) => {
    const odds = typeof props.odds === 'number' ? [props.odds] : props.odds;
    const totalOdds = odds.reduce((acc, odds) => acc * +odds, 1);
    const minOdds = 1 + (totalOdds - 1) * (100 - props.slippage) / 100;
    return +minOdds.toFixed(ODDS_DECIMALS);
};const ratio = (self, other) => (self > other ? self / other : other / self);
const sigmoid = (value) => value / (value + 1);
const getOddsFromProbabilities = (probabilities, margin, winningOutcomesCount = 1) => {
    const precision = 0.0001;
    const maxIterations = 10;
    const odds = {};
    const spreads = Object.keys(probabilities).reduce((acc, outcomeId) => {
        acc[+outcomeId] = (1 - probabilities[+outcomeId]) * margin;
        return acc;
    }, {});
    let error = margin;
    for (let iteration = 0; iteration < maxIterations; iteration++) {
        let oddsSpread;
        {
            let spread = 0;
            Object.keys(probabilities).forEach(outcomeId => {
                const price = (1 - spreads[+outcomeId]) / probabilities[+outcomeId];
                odds[+outcomeId] = price;
                spread += 1 / price;
            });
            oddsSpread = 1 - winningOutcomesCount / spread;
        }
        if (ratio(margin, oddsSpread) - 1 < precision) {
            return odds;
        }
        if (margin <= oddsSpread) {
            throw new Error('margin <= oddsSpread');
        }
        const newError = margin - oddsSpread;
        if (newError === error) {
            if (margin / oddsSpread - 1 >= precision) {
                throw new Error('margin / oddsSpread - 1 >= precision');
            }
            return odds;
        }
        error = newError;
        Object.keys(spreads).forEach(outcomeId => {
            spreads[+outcomeId] +=
                (1 - spreads[+outcomeId] - probabilities[+outcomeId]) *
                    sigmoid((error * spreads[+outcomeId]) / (1 - 1 / odds[+outcomeId]) / (1 - margin) / oddsSpread);
        });
    }
    throw new Error(`Can't calculate odds from given params: ${JSON.stringify(probabilities)} / ${margin} / ${winningOutcomesCount}`);
};
const calcLiveOdds = ({ selection, betAmount, oddsData }) => {
    const { outcomeId: _outcomeId } = selection;
    const { margin, reinforcement, winningOutcomesCount, outcomes: _outcomes } = oddsData;
    const outcomeId = Number(_outcomeId);
    const outcomes = _outcomes.reduce((acc, { id, price, clearPrice }) => {
        acc[id] = {
            odds: price,
            clearOdds: clearPrice,
        };
        return acc;
    }, {});
    let allFunds = 0;
    const funds = Object.keys(outcomes).reduce((acc, outcomeKey) => {
        const { clearOdds } = outcomes[+outcomeKey];
        const probability = 1 / clearOdds;
        let fund = reinforcement * probability;
        if (outcomeId === +outcomeKey) {
            fund += Number(betAmount);
        }
        allFunds += fund;
        acc[+outcomeKey] = fund;
        return acc;
    }, {});
    const probabilities = Object.keys(funds).reduce((acc, outcomeKey) => {
        const fund = funds[+outcomeKey];
        acc[+outcomeKey] = fund / allFunds;
        return acc;
    }, {});
    const odds = getOddsFromProbabilities(probabilities, margin, winningOutcomesCount);
    if (odds[outcomeId] > outcomes[outcomeId].odds) {
        return outcomes[outcomeId].odds;
    }
    return odds[outcomeId];
};const setGamesCacheTime = (cacheTime) => {
    configRef.gamesCacheTime = cacheTime;
};const isPendingResolution = (startDate) => {
    const now = Date.now();
    const isStarted = startDate < now;
    const pendingResolutionDate = startDate + 6000000;
    return isStarted && pendingResolutionDate < now;
};
var GameStatus;
(function (GameStatus) {
    GameStatus[GameStatus["Preparing"] = 0] = "Preparing";
    GameStatus[GameStatus["Live"] = 1] = "Live";
    GameStatus[GameStatus["PendingResolution"] = 2] = "PendingResolution";
    GameStatus[GameStatus["Resolved"] = 3] = "Resolved";
    GameStatus[GameStatus["Canceled"] = 4] = "Canceled";
    GameStatus[GameStatus["Paused"] = 5] = "Paused";
})(GameStatus || (GameStatus = {}));
const getGameStatus = (props) => {
    const { graphStatus, startsAt } = props;
    const startDate = startsAt * 1000;
    const isStarted = startDate < Date.now();
    if (graphStatus === GameStatus$1.Canceled) {
        return GameStatus.Canceled;
    }
    if (graphStatus === GameStatus$1.Resolved) {
        return GameStatus.Resolved;
    }
    if (isPendingResolution(startDate)) {
        return GameStatus.PendingResolution;
    }
    if (isStarted) {
        return GameStatus.Live;
    }
    if (graphStatus === GameStatus$1.Paused) {
        return GameStatus.Paused;
    }
    return GameStatus.Preparing;
};var BetStatus;
(function (BetStatus) {
    BetStatus[BetStatus["Accepted"] = 0] = "Accepted";
    BetStatus[BetStatus["Live"] = 1] = "Live";
    BetStatus[BetStatus["PendingResolution"] = 2] = "PendingResolution";
    BetStatus[BetStatus["Resolved"] = 3] = "Resolved";
    BetStatus[BetStatus["Canceled"] = 4] = "Canceled";
})(BetStatus || (BetStatus = {}));
const getExpressIsLive = (games) => {
    const firstStartDate = Math.min(...games.map(({ startsAt }) => startsAt));
    return +firstStartDate * 1000 < Date.now();
};
const getExpressIsPendingResolution = (games) => {
    const lastStartDate = Math.max(...games.map(({ startsAt }) => startsAt));
    const lastGames = games.filter(({ startsAt }) => startsAt === lastStartDate);
    return lastGames.some(({ status, startsAt }) => {
        return getGameStatus({ graphStatus: status, startsAt }) === GameStatus.PendingResolution;
    });
};
const getBetStatus = (props) => {
    const { games, graphStatus } = props;
    if (graphStatus === BetStatus$1.Canceled) {
        return BetStatus.Canceled;
    }
    if (graphStatus === BetStatus$1.Resolved) {
        return BetStatus.Resolved;
    }
    const isExpress = games.length > 1;
    const gameStatus = getGameStatus({ graphStatus: games[0].status, startsAt: games[0].startsAt });
    const isPendingResolution = isExpress
        ? getExpressIsPendingResolution(games)
        : gameStatus === GameStatus.PendingResolution;
    if (isPendingResolution) {
        return BetStatus.PendingResolution;
    }
    const isLive = isExpress
        ? getExpressIsLive(games)
        : gameStatus === GameStatus.Live;
    if (isLive) {
        return BetStatus.Live;
    }
    return BetStatus.Accepted;
};const MainGameInfoFragmentDoc = gql `
    fragment MainGameInfo on Game {
  id
  gameId
  title
  startsAt
  status
  sport {
    slug
    name
  }
  league {
    slug
    name
    country {
      slug
      name
    }
  }
  participants {
    image
    name
  }
}
    `;const BetFragmentDoc = gql `
    fragment Bet on Bet {
  id
  tokenId: betId
  amount
  status
  potentialPayout
  payout
  result
  isRedeemed
  isRedeemable
  odds
  settledOdds
  createdAt: createdBlockTimestamp
  txHash: createdTxHash
  core {
    address
    liquidityPool {
      address
    }
  }
  selections {
    odds
    result
    outcome {
      outcomeId
      condition {
        conditionId
        status
        game {
          ...MainGameInfo
        }
      }
    }
  }
  freebet {
    freebetId
    contractAddress: freebetContractAddress
  }
}
    ${MainGameInfoFragmentDoc}`;const BetsDocument = gql `
    query Bets($first: Int, $skip: Int, $where: Bet_filter!, $orderBy: Bet_orderBy, $orderDirection: OrderDirection) {
  bets(
    first: $first
    skip: $skip
    where: $where
    orderBy: $orderBy
    orderDirection: $orderDirection
    subgraphError: allow
  ) {
    ...Bet
  }
}
    ${BetFragmentDoc}`;const useBets = (props) => {
    const { filter, orderBy = Bet_OrderBy.CreatedBlockTimestamp, orderDir = OrderDirection.Asc, } = props;
    const options = useMemo(() => {
        const variables = {
            first: filter.limit,
            skip: filter.offset,
            orderBy,
            orderDirection: orderDir,
            where: {
                actor: filter.bettor?.toLowerCase(),
            },
        };
        return {
            variables,
            ssr: false,
            skip: !filter.bettor,
        };
    }, [
        filter.limit,
        filter.offset,
        filter.bettor,
        orderBy,
        orderDir,
    ]);
    const { data, loading, error } = useQuery(BetsDocument, options);
    const bets = useMemo(() => {
        if (!data?.bets?.length) {
            return [];
        }
        return data.bets.map((rawBet) => {
            const { tokenId, status, amount, odds, settledOdds, createdAt, result, core: { address: coreAddress, liquidityPool: { address: lpAddress } }, payout: _payout, isRedeemed: _isRedeemed, isRedeemable, freebet, txHash, selections, } = rawBet;
            const isWin = result === BetResult.Won;
            const isLose = result === BetResult.Lost;
            const isCanceled = status === BetStatus$1.Canceled;
            // express bets have a specific feature - protocol redeems LOST expresses to release liquidity,
            // so we should validate it by "win"/"canceled" statuses
            const isRedeemed = (isWin || isCanceled) && _isRedeemed;
            const isFreebet = Boolean(freebet);
            const freebetId = freebet?.freebetId;
            const freebetContractAddress = freebet?.contractAddress;
            const payout = isRedeemable && isWin ? _payout : null;
            const betDiff = isFreebet ? amount : 0; // for freebet we must exclude bonus value from possible win
            const totalOdds = settledOdds ? +settledOdds : +odds;
            const possibleWin = +amount * totalOdds - +betDiff;
            const outcomes = selections
                .map((selection) => {
                const { odds, result, outcome: { outcomeId, condition: { conditionId, status: conditionStatus, game } } } = selection;
                const gameStatus = getGameStatus({
                    graphStatus: game.status,
                    startsAt: game.startsAt,
                });
                const isWin = result ? result === SelectionResult.Won : null;
                const isLose = result ? result === SelectionResult.Lost : null;
                const isCanceled = (conditionStatus === ConditionStatus.Canceled
                    || gameStatus === GameStatus.Canceled);
                const marketName = getMarketName({ outcomeId });
                const selectionName = getSelectionName({ outcomeId, withPoint: true });
                return {
                    selectionName,
                    outcomeId,
                    conditionId,
                    odds: +odds,
                    marketName,
                    game,
                    isWin,
                    isLose,
                    isCanceled,
                };
            })
                .sort((a, b) => +a.game.startsAt - +b.game.startsAt);
            const bet = {
                tokenId,
                freebetContractAddress: freebetContractAddress,
                freebetId,
                txHash,
                totalOdds,
                status,
                amount,
                possibleWin,
                payout,
                createdAt,
                isWin,
                isLose,
                isRedeemable,
                isRedeemed,
                isCanceled,
                coreAddress: coreAddress,
                lpAddress: lpAddress,
                outcomes,
            };
            return bet;
        });
    }, [data]);
    return {
        loading,
        data: bets,
        error,
    };
};const useBetTokenBalance = () => {
    const { appChain, betToken } = useChain();
    const { address } = useAccount();
    const { isLoading, data, error } = useBalance({
        chainId: appChain.id,
        address,
        token: betToken.address,
    });
    return {
        loading: isLoading,
        rawBalance: data?.value,
        balance: data?.formatted,
        error,
    };
};const timers$1 = new Map();
const subscribers$1 = new Map();
const subscribe$1 = (conditionId, outcomeId, cb) => {
    const key = conditionId;
    const handlers = subscribers$1.get(key) || [];
    handlers.push({ outcomeId, cb });
    subscribers$1.set(key, handlers);
    return function unsubscribe() {
        const handlers = subscribers$1.get(key) || [];
        const newHandlers = handlers.filter((handler) => handler.cb !== cb);
        if (newHandlers.length) {
            subscribers$1.set(key, newHandlers);
        }
        else {
            subscribers$1.delete(key);
        }
    };
};
const trigger$1 = async (conditionId) => {
    const handlers = subscribers$1.get(conditionId) || [];
    handlers.forEach(({ cb }) => {
        cb();
    });
};
const dispatch$1 = (conditionId) => {
    let timer = timers$1.get(conditionId);
    if (timer !== undefined) {
        clearTimeout(timer);
    }
    timer = setTimeout(() => {
        timers$1.delete(conditionId);
        trigger$1(conditionId);
    }, 200);
    timers$1.set(conditionId, timer);
};
const oddsWatcher = {
    subscribe: subscribe$1,
    dispatch: dispatch$1,
};const useCalcOdds = (props) => {
    const { amount, selections } = props;
    const publicClient = usePublicClient();
    const { appChain, contracts, betToken } = useChain();
    let rawAmount = BigInt(1);
    const isSingle = selections.length === 1;
    if (amount !== undefined) {
        rawAmount = parseUnits(amount, betToken.decimals);
    }
    const rawSelections = selections.map(({ conditionId, outcomeId }) => ({
        conditionId: BigInt(conditionId),
        outcomeId: BigInt(outcomeId),
    }));
    const single = useContractRead({
        chainId: appChain.id,
        address: contracts.prematchCore.address,
        abi: contracts.prematchCore.abi,
        functionName: 'calcOdds',
        args: [
            rawSelections[0].conditionId,
            rawAmount,
            rawSelections[0].outcomeId,
        ],
        enabled: Boolean(rawSelections.length === 1),
    });
    const combo = useContractRead({
        chainId: appChain.id,
        address: contracts.prematchComboCore.address,
        abi: contracts.prematchComboCore.abi,
        functionName: 'calcOdds',
        args: [
            rawSelections,
            rawAmount,
        ],
        enabled: Boolean(rawSelections.length > 1),
    });
    useEffect(() => {
        if (!selections.length) {
            return;
        }
        const unsubscribeList = selections.map(({ conditionId, outcomeId }) => {
            const unsubscribe = oddsWatcher.subscribe(`${conditionId}`, `${outcomeId}`, () => {
                if (isSingle) {
                    single.refetch();
                }
                else {
                    combo.refetch();
                }
            });
            return unsubscribe;
        });
        return () => {
            unsubscribeList.forEach((unsubscribe) => {
                unsubscribe();
            });
        };
    }, [selections, publicClient]);
    return {
        data: {
            selectionsOdds: isSingle ? (single.data ? [single.data] : undefined) : combo.data?.[0],
            totalOdds: isSingle ? single.data : combo.data?.[1],
        },
        loading: single.isLoading || combo.isLoading,
        error: single.error || combo.error,
    };
};const ConditionFragmentDoc = gql `
    fragment Condition on Condition {
  id
  conditionId
  status
  outcomes {
    outcomeId
    odds: currentOdds
  }
  core {
    address
    liquidityPool {
      address
    }
  }
  game {
    gameId
    sport {
      sportId
    }
  }
}
    `;const ConditionsDocument = gql `
    query Conditions($where: Condition_filter!) {
  conditions(where: $where, first: 1000, subgraphError: allow) {
    ...Condition
  }
}
    ${ConditionFragmentDoc}`;const useConditions = (props) => {
    const { gameId, filter } = props;
    const { contracts } = useChain();
    const options = useMemo(() => {
        const gameEntityId = `${contracts.lp.address.toLowerCase()}_${gameId}`;
        const variables = {
            where: {
                game: gameEntityId,
            },
        };
        if (filter?.outcomeIds) {
            variables.where.outcomesIds_contains = filter.outcomeIds;
        }
        return {
            variables,
            ssr: false,
        };
    }, [
        gameId,
        contracts,
        filter?.outcomeIds?.join(',')
    ]);
    return useQuery(ConditionsDocument, options);
};const GameDocument = gql `
    query Game($gameId: BigInt!) {
  games(where: {gameId: $gameId}) {
    ...MainGameInfo
  }
}
    ${MainGameInfoFragmentDoc}`;const useGame = (props) => {
    const { gameId } = props;
    const options = useMemo(() => ({
        variables: {
            gameId: gameId,
        },
        skip: !gameId,
        ssr: false,
    }), [gameId]);
    const { data, ...rest } = useQuery(GameDocument, options);
    return {
        ...rest,
        data: data?.games?.[0],
    };
};const groupDataByConditionId = (data) => {
    return data.reduce((acc, item) => {
        const { conditionId } = item;
        const key = String(conditionId);
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(item);
        return acc;
    }, {});
};
const groupMarkets = (conditions, gameId) => {
    const outcomesByMarkets = {};
    const result = {};
    const sportId = conditions?.[0]?.game.sport.sportId;
    conditions.forEach(({ conditionId, outcomes: rawOutcomes, core, status }) => {
        rawOutcomes.forEach(({ outcomeId, odds }) => {
            const betTypeOdd = dictionaries.outcomes[outcomeId];
            if (!betTypeOdd) {
                console.warn(`betTypeOdd not found for "outcomeId: ${outcomeId}"`);
                return;
            }
            const marketKey = getMarketKey(outcomeId);
            const marketName = getMarketName({ outcomeId });
            const marketDescription = getMarketDescription({ outcomeId });
            const selectionName = getSelectionName({ outcomeId, withPoint: true });
            const outcome = {
                coreAddress: core.address,
                lpAddress: core.liquidityPool.address,
                conditionId,
                outcomeId,
                selectionName,
                odds,
                status,
                gameId,
            };
            if (!outcomesByMarkets[marketKey]) {
                outcomesByMarkets[marketKey] = [];
                result[marketKey] = {
                    name: marketName,
                    marketKey,
                    description: marketDescription,
                    outcomeRows: [],
                };
            }
            outcomesByMarkets[marketKey].push(outcome);
        });
    });
    // markets with different conditionIds
    const marketsWithDifferentConditionIds = ['1', '2'];
    // sort by outcomeId and group by conditionId
    Object.keys(outcomesByMarkets).forEach((marketKey) => {
        const marketId = marketKey.split('-')[0];
        // get the conditions related to the market
        const outcomes = outcomesByMarkets[marketKey];
        const validSelectionsByMarketId = {
            '1': [1, 2, 3],
            '2': [4, 5, 6],
        };
        const validSelections = validSelectionsByMarketId[marketId];
        if (validSelections?.length) {
            const outcomesSelections = outcomes.map((outcome) => (dictionaries.outcomes[String(outcome.outcomeId)].selectionId));
            const isValid = validSelections.every(selection => outcomesSelections.includes(selection));
            if (!isValid) {
                return;
            }
        }
        // sort the conditions by selectionId
        outcomes.sort((a, b) => {
            const { outcomes: dictionaryOutcomes } = dictionaries;
            const left = dictionaryOutcomes[String(a.outcomeId)].selectionId;
            const right = dictionaryOutcomes[String(b.outcomeId)].selectionId;
            return left - right;
        });
        // these markets have few outcomes and not requires additional actions
        if (marketsWithDifferentConditionIds.includes(marketId)) {
            result[marketKey].outcomeRows = [outcomes];
        }
        // others need to be grouped by conditionId to allow draw outcomes in rows in UI, e.g.
        //
        // Team 1 - Total Goals:
        // Over (0.5)   Under (0.5)
        // Over (1.5)   Under (1.5)
        //
        else {
            const conditionsByConditionId = groupDataByConditionId(outcomes);
            result[marketKey].outcomeRows = Object.values(conditionsByConditionId).sort((a, b) => {
                const { points, outcomes: dictionaryOutcomes } = dictionaries;
                /*
                  we should always sort by param in first outcome
        
                  Handicap
                  Team 1 (-2.5)   Team 2 (2.5)
                  Team 1 (-1.5)   Team 2 (1.5)
        
                  Total Goals
                  Over (1.5)   Under (1.5)
                  Over (2.5)   Under (2.5)
                */
                const aPointId = dictionaryOutcomes[String(a[0].outcomeId)].pointsId;
                const bPointId = dictionaryOutcomes[String(b[0].outcomeId)].pointsId;
                const aFirstOutcome = +points[aPointId];
                const bFirstOutcome = +points[bPointId];
                return aFirstOutcome - bFirstOutcome;
            });
        }
    });
    let markets = Object.values(result);
    const orderedMarketKeys = dictionaries.marketOrders[sportId];
    if (!orderedMarketKeys) {
        return markets;
    }
    return markets.sort((a, b) => {
        const prevMarketIndex = orderedMarketKeys.indexOf(a.marketKey);
        const nextMarketIndex = orderedMarketKeys.indexOf(b.marketKey);
        if (prevMarketIndex >= 0 && nextMarketIndex >= 0) {
            return prevMarketIndex - nextMarketIndex;
        }
        if (prevMarketIndex < 0 && nextMarketIndex >= 0) {
            return 1;
        }
        if (prevMarketIndex >= 0 && nextMarketIndex < 0) {
            return -1;
        }
        return 0;
    });
};
const useGameMarkets = (props) => {
    const { gameId, filter } = props;
    const { loading, data, error } = useConditions({
        gameId,
        filter,
    });
    // generate unique key for memo deps
    const conditionIds = data?.conditions.map(({ id, outcomes }) => `${id}-${outcomes.length}`).join('');
    const markets = useMemo(() => {
        if (!data) {
            return undefined;
        }
        if (!data?.conditions?.length) {
            return null;
        }
        return groupMarkets(data.conditions, gameId);
    }, [conditionIds]);
    return {
        loading,
        data: markets,
        error,
    };
};const GamesDocument = gql `
    query Games($first: Int, $skip: Int, $where: Game_filter!, $orderBy: Game_orderBy, $orderDirection: OrderDirection) {
  games(
    first: $first
    skip: $skip
    where: $where
    orderBy: $orderBy
    orderDirection: $orderDirection
    subgraphError: allow
  ) {
    ...MainGameInfo
  }
}
    ${MainGameInfoFragmentDoc}`;let ref = {
    lastUpdateTime: undefined,
};
const getGameStartsAtGtValue = () => {
    let startsAt_gt;
    const dateNow = Math.floor(Date.now() / 1000);
    // if first render or current time is greater the previous saved more than cache time
    if (!ref.lastUpdateTime
        || dateNow - ref.lastUpdateTime > configRef.gamesCacheTime) {
        startsAt_gt = dateNow;
        ref.lastUpdateTime = dateNow;
    }
    else {
        startsAt_gt = ref.lastUpdateTime;
    }
    return startsAt_gt;
};const getEventArgsFromTxReceipt = ({ receipt, eventName, abi }) => {
    let result = {};
    receipt.logs.some((log) => {
        try {
            const res = decodeEventLog({
                abi,
                topics: log.topics,
                eventName,
                data: log.data,
            });
            let isMatch = false;
            if (res.eventName.toLowerCase() === eventName.toLowerCase()) {
                isMatch = true;
            }
            if (isMatch) {
                result = res;
            }
            return isMatch;
        }
        catch { }
    });
    if (result?.args) {
        return result?.args;
    }
};const useGames = (props) => {
    const { filter, orderBy = Game_OrderBy.CreatedBlockTimestamp, orderDir = OrderDirection.Desc, withConditions = false, } = props || {};
    const startsAt_gt = getGameStartsAtGtValue();
    const options = useMemo(() => {
        const variables = {
            first: 1000,
            orderBy,
            orderDirection: orderDir,
            where: {
                startsAt_gt,
                hasActiveConditions: true,
                status_in: [GameStatus$1.Created, GameStatus$1.Paused],
            },
        };
        if (filter?.limit) {
            variables.first = filter.limit;
        }
        if (filter?.offset) {
            variables.skip = filter.offset;
        }
        if (filter?.sportSlug) {
            variables.where.sport_ = {
                slug_starts_with_nocase: filter.sportSlug,
            };
        }
        return {
            variables,
            ssr: false,
        };
    }, [
        filter?.limit,
        filter?.offset,
        filter?.sportSlug,
        orderBy,
        orderDir,
        startsAt_gt,
        withConditions,
    ]);
    return useQuery(GamesDocument, options);
};const useNativeBalance = () => {
    const { appChain } = useChain();
    const { address } = useAccount();
    const { isLoading, data, error } = useBalance({
        chainId: appChain.id,
        address,
    });
    return {
        loading: isLoading,
        rawBalance: data?.value,
        balance: data?.formatted,
        error,
    };
};const NavigationDocument = gql `
    query Navigation($first: Int, $where: Game_filter, $withGameCount: Boolean!) {
  sports {
    id
    slug
    name
    games(first: $first, where: $where) @include(if: $withGameCount) {
      id
    }
  }
}
    `;const useSportsNavigation = (props = {}) => {
    const { withGameCount = false } = props;
    const startsAt_gt = getGameStartsAtGtValue();
    const options = useMemo(() => {
        const variables = {
            first: 1000,
            withGameCount,
            where: {
                hasActiveConditions: true,
                status_in: [GameStatus$1.Created, GameStatus$1.Paused],
                startsAt_gt,
            },
        };
        return {
            variables,
            ssr: false,
        };
    }, [withGameCount, startsAt_gt]);
    return useQuery(NavigationDocument, options);
};const timers = new Map();
const subscribers = new Map();
const subscribe = (conditionId, cb) => {
    const key = conditionId;
    const handlers = subscribers.get(key) || [];
    handlers.push({ cb });
    subscribers.set(key, handlers);
    return function unsubscribe() {
        const handlers = subscribers.get(key) || [];
        const newHandlers = handlers.filter((handler) => handler.cb !== cb);
        if (newHandlers.length) {
            subscribers.set(key, newHandlers);
        }
        else {
            subscribers.delete(key);
        }
    };
};
const trigger = (conditionId, status) => {
    const handlers = subscribers.get(conditionId) || [];
    handlers.forEach(({ cb }) => {
        cb(status);
    });
};
const dispatch = (conditionId, status) => {
    let timer = timers.get(conditionId);
    if (timer !== undefined) {
        clearTimeout(timer);
    }
    timer = setTimeout(() => {
        timers.delete(conditionId);
        trigger(conditionId, status);
    }, 200);
    timers.set(conditionId, timer);
};
const conditionStatusWatcher = {
    subscribe,
    dispatch,
};const useWatchers = () => {
    const { appChain, contracts } = useChain();
    const unwatchSingle = useContractEvent({
        address: contracts.prematchCore.address,
        abi: contracts.prematchCore.abi,
        eventName: 'NewBet',
        chainId: appChain.id,
        listener(logs) {
            const log = logs[0];
            const conditionId = log.args.conditionId;
            oddsWatcher.dispatch(conditionId.toString());
        },
    });
    const unwatchCombo = useContractEvent({
        address: contracts.prematchCore.address,
        abi: contracts.prematchCore.abi,
        eventName: 'OddsChanged',
        chainId: appChain.id,
        listener(logs) {
            const log = logs[0];
            const conditionId = log.args.conditionId;
            oddsWatcher.dispatch(conditionId.toString());
        },
    });
    const unwatchConditionStopped = useContractEvent({
        address: contracts.prematchCore.address,
        abi: contracts.prematchCore.abi,
        eventName: 'ConditionStopped',
        chainId: appChain.id,
        listener(logs) {
            const log = logs[0];
            const conditionId = log.args.conditionId;
            const isStopped = log.args.flag;
            const status = isStopped ? ConditionStatus.Paused : ConditionStatus.Created;
            conditionStatusWatcher.dispatch(conditionId.toString(), status);
        },
    });
    useEffect(() => {
        return () => {
            unwatchSingle?.();
            unwatchCombo?.();
        };
    }, [unwatchSingle, unwatchCombo, appChain.id]);
    useEffect(() => {
        return () => {
            unwatchConditionStopped?.();
        };
    }, [unwatchConditionStopped, contracts]);
};const useBetsCache = () => {
    const client = useApolloClient();
    const { cache } = client;
    const { contracts } = useChain();
    const updateBetCache = ({ coreAddress, tokenId }, values) => {
        const betEntityId = `${coreAddress}_${tokenId}`;
        cache.updateFragment({
            id: cache.identify({ __typename: 'Bet', id: betEntityId }),
            fragment: BetFragmentDoc,
            fragmentName: 'Bet',
        }, (data) => ({
            ...data,
            ...values,
        }));
    };
    const addBet = (props) => {
        const { bet, receipt } = props;
        const { amount, selections, selectionsOdds } = bet;
        const isExpress = selections.length > 1;
        const core = isExpress ? contracts.prematchComboCore : contracts.prematchCore;
        const selectionFragments = [];
        for (let index = 0; index < selections.length; index++) {
            const { outcomeId, conditionId } = selections[index];
            const conditionEntityId = `${core.address.toLowerCase()}_${conditionId}`;
            const condition = cache.readFragment({
                id: cache.identify({ __typename: 'Condition', id: conditionEntityId }),
                fragment: ConditionFragmentDoc,
                fragmentName: 'Condition',
            });
            const gameId = condition?.game.gameId;
            const gameEntityId = `${contracts.lp.address.toLowerCase()}_${gameId}`;
            const game = cache.readFragment({
                id: cache.identify({ __typename: 'Game', id: gameEntityId }),
                fragment: MainGameInfoFragmentDoc,
                fragmentName: 'MainGameInfo',
            });
            // it's possible that we don't have a game in graphql cache,
            // let's try to invalidate query and hope on update from the server
            if (!game) {
                setTimeout(() => {
                    client.refetchQueries({
                        include: ['Bets'],
                    });
                }, 1500);
                break;
            }
            const selectionFragment = {
                __typename: 'Selection',
                odds: String(selectionsOdds[index]),
                result: null,
                outcome: {
                    __typename: 'Outcome',
                    outcomeId: String(outcomeId),
                    condition: {
                        __typename: 'Condition',
                        conditionId,
                        status: ConditionStatus.Created,
                        game,
                    },
                },
            };
            selectionFragments.push(selectionFragment);
        }
        const receiptArgs = getEventArgsFromTxReceipt({ receipt, eventName: 'NewBet', abi: core.abi });
        const tokenId = (isExpress ? receiptArgs?.betId : receiptArgs?.tokenId)?.toString();
        const rawOdds = isExpress ? receiptArgs?.bet.odds : receiptArgs?.odds;
        const finalOdds = +formatUnits(rawOdds, ODDS_DECIMALS);
        const potentialPayout = +amount * finalOdds;
        cache.modify({
            id: cache.identify({ __typename: 'Query' }),
            fields: {
                bets: (bets) => {
                    // https://github.com/Azuro-protocol/azuro-api-subgraph/blob/main/src/utils/schema.ts
                    const betEntityId = `${core.address.toLowerCase()}_${tokenId}`;
                    const data = {
                        __typename: 'Bet',
                        id: betEntityId,
                        tokenId: tokenId,
                        core: {
                            address: core.address,
                            liquidityPool: {
                                address: contracts.lp.address,
                            },
                        },
                        status: BetStatus$1.Accepted,
                        amount: bet.amount,
                        odds: finalOdds,
                        settledOdds: null,
                        createdAt: String(Math.floor(Date.now() / 1000)),
                        payout: null,
                        potentialPayout: potentialPayout,
                        isRedeemed: false,
                        isRedeemable: false,
                        freebet: bet.freebetContractAddress ? {
                            freebetId: bet.freebetId,
                            contractAddress: bet.freebetContractAddress,
                        } : null,
                        result: null,
                        txHash: receipt.transactionHash,
                        selections: selectionFragments,
                    };
                    const newBet = cache.writeFragment({
                        fragment: BetFragmentDoc,
                        fragmentName: 'Bet',
                        data,
                    });
                    return [newBet, ...bets];
                }
            }
        });
    };
    return {
        updateBetCache,
        addBet,
    };
};const usePrepareBet = (props) => {
    const { amount, slippage, deadline, affiliate, selections, onSuccess, onError } = props;
    const account = useAccount();
    const publicClient = usePublicClient();
    const { appChain, contracts, betToken } = useChain();
    const { addBet } = useBetsCache();
    const allowanceTx = useContractRead({
        chainId: appChain.id,
        address: betToken.address,
        abi: erc20ABI,
        functionName: 'allowance',
        args: [
            account.address,
            contracts.proxyFront.address,
        ],
        enabled: Boolean(account.address),
    });
    const approveTx = useContractWrite({
        address: betToken.address,
        abi: erc20ABI,
        functionName: 'approve',
        args: [
            contracts.proxyFront.address,
            MAX_UINT_256,
        ],
    });
    const approveReceipt = useWaitForTransaction(approveTx.data);
    const isApproveRequired = Boolean(allowanceTx.data !== undefined
        && +amount
        && allowanceTx.data < parseUnits(amount, betToken.decimals));
    const approve = async () => {
        const tx = await approveTx.writeAsync();
        await publicClient.waitForTransactionReceipt(tx);
        allowanceTx.refetch();
    };
    const { loading: isOddsLoading, data: oddsData } = useCalcOdds({
        selections,
        amount,
    });
    const selectionsOdds = oddsData.selectionsOdds?.map((rawOdds) => {
        return formatUnits(rawOdds, ODDS_DECIMALS);
    });
    const totalOdds = oddsData.totalOdds ? formatUnits(oddsData.totalOdds, ODDS_DECIMALS) : undefined;
    const betTx = useContractWrite({
        address: contracts.proxyFront.address,
        abi: contracts.proxyFront.abi,
        functionName: 'bet',
        value: BigInt(0),
    });
    const betReceipt = useWaitForTransaction(betTx.data);
    const placeBet = async () => {
        if (!totalOdds) {
            return;
        }
        const fixedAmount = +parseFloat(String(amount)).toFixed(betToken.decimals);
        const rawAmount = parseUnits(`${fixedAmount}`, betToken.decimals);
        const minOdds = 1 + (+totalOdds - 1) * (100 - slippage) / 100;
        const fixedMinOdds = +parseFloat(String(minOdds)).toFixed(ODDS_DECIMALS);
        const rawMinOdds = parseUnits(`${fixedMinOdds}`, ODDS_DECIMALS);
        const rawDeadline = BigInt(Math.floor(Date.now() / 1000) + (deadline || DEFAULT_DEADLINE));
        let coreAddress;
        let data;
        if (selections.length > 1) {
            coreAddress = contracts.prematchComboCore.address;
            const tuple = selections.map(({ conditionId, outcomeId }) => [
                BigInt(conditionId),
                BigInt(outcomeId),
            ]);
            data = encodeAbiParameters(parseAbiParameters('(uint256, uint64)[]'), [
                tuple,
            ]);
        }
        else {
            coreAddress = contracts.prematchCore.address;
            const { conditionId, outcomeId } = selections[0];
            data = encodeAbiParameters(parseAbiParameters('uint256, uint64'), [
                BigInt(conditionId),
                BigInt(outcomeId),
            ]);
        }
        try {
            const tx = await betTx.writeAsync({
                args: [
                    contracts.lp.address,
                    [
                        {
                            core: coreAddress,
                            amount: rawAmount,
                            expiresAt: rawDeadline,
                            extraData: {
                                affiliate,
                                minOdds: rawMinOdds,
                                data,
                            },
                        },
                    ]
                ],
            });
            const receipt = await publicClient.waitForTransactionReceipt(tx);
            addBet({
                receipt,
                bet: {
                    amount: `${fixedAmount}`,
                    selections,
                    selectionsOdds: selectionsOdds,
                }
            });
            if (onSuccess) {
                onSuccess(receipt);
            }
        }
        catch (err) {
            if (onError) {
                onError(err);
            }
        }
    };
    const submit = () => {
        if (isApproveRequired) {
            return approve();
        }
        return placeBet();
    };
    return {
        isAllowanceLoading: allowanceTx.isLoading,
        isApproveRequired,
        isOddsLoading,
        selectionsOdds,
        totalOdds,
        submit,
        approveTx: {
            isPending: approveTx.isLoading,
            isProcessing: approveReceipt.isLoading,
            data: approveTx.data,
            error: approveTx.error,
        },
        betTx: {
            isPending: betTx.isLoading,
            isProcessing: betReceipt.isLoading,
            isSuccess: betReceipt.isSuccess,
            data: betTx.data,
            error: betTx.error,
        },
    };
};const useRedeemBet = () => {
    const publicClient = usePublicClient();
    const { contracts } = useChain();
    const { updateBetCache } = useBetsCache();
    const redeemTx = useContractWrite({
        address: contracts.lp.address,
        abi: contracts.lp.abi,
        functionName: 'withdrawPayout',
    });
    const batchRedeemTx = useContractWrite({
        address: contracts.proxyFront.address,
        abi: contracts.proxyFront.abi,
        functionName: 'withdrawPayouts',
    });
    const receipt = useWaitForTransaction(redeemTx.data);
    const batchReceipt = useWaitForTransaction(batchRedeemTx.data);
    const submit = async (props) => {
        const { bets } = props;
        const isBatch = bets.length > 1;
        let tx;
        if (isBatch) {
            const betsData = bets.map(({ tokenId, coreAddress }) => ({
                core: coreAddress,
                tokenId: BigInt(tokenId),
                isNative: false,
            }));
            tx = await batchRedeemTx.writeAsync({
                args: [betsData],
            });
        }
        else {
            const { tokenId, coreAddress } = bets[0];
            tx = await redeemTx.writeAsync({
                args: [
                    coreAddress,
                    BigInt(tokenId),
                ],
            });
        }
        const receipt = await publicClient.waitForTransactionReceipt(tx);
        bets.forEach(({ tokenId, coreAddress }) => {
            updateBetCache({
                coreAddress,
                tokenId,
            }, {
                isRedeemed: true,
                isRedeemable: false,
            });
        });
        return receipt;
    };
    return {
        isPending: redeemTx.isLoading || batchRedeemTx.isLoading,
        isProcessing: receipt.isLoading || batchReceipt.isLoading,
        data: redeemTx.data || batchReceipt.data,
        error: redeemTx.error || batchReceipt.error,
        submit,
    };
};function debounce(func, wait, immediate) {
    let timeout;
    return function (...args) {
        const context = this;
        const later = function () {
            timeout = undefined;
            if (!immediate) {
                func.apply(context, args);
            }
        };
        const callNow = immediate && timeout === undefined;
        if (timeout !== undefined) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(context, args);
        }
    };
}const ConditionsBatchDocument = gql `
    query conditionsBatch($conditionFilter: Condition_filter) {
  conditions(where: $conditionFilter, first: 1000, subgraphError: allow) {
    id
    status
    outcomes {
      id
      outcomeId
      odds: currentOdds
    }
  }
}
    `;let idsWaitList = new Set();
let resolversWaitList = [];
const fetch = debounce(async (client) => {
    const conditionEntityIds = [...idsWaitList];
    const resolvers = resolversWaitList;
    idsWaitList.clear();
    resolversWaitList = [];
    try {
        const result = await client.query({
            query: ConditionsBatchDocument,
            variables: {
                conditionFilter: {
                    id_in: conditionEntityIds,
                },
            },
            fetchPolicy: 'network-only',
        });
        const data = result?.data?.conditions.reduce((acc, { id: conditionEntityId, outcomes, status }) => {
            outcomes.forEach(({ outcomeId, odds }) => {
                const key = `${conditionEntityId}-${outcomeId}`;
                acc[key] = {
                    odds,
                    status,
                };
            });
            return acc;
        }, {});
        resolvers.forEach((resolve) => {
            resolve(data);
        });
    }
    catch (err) {
        resolvers.forEach((resolve) => {
            resolve(undefined);
        });
    }
}, 50);
const batchFetchOutcome = (conditionEntityId, client) => {
    fetch(client);
    idsWaitList.add(conditionEntityId);
    return new Promise((resolve) => {
        resolversWaitList.push(resolve);
    });
};const useOutcome = ({ selection, initialOdds, initialStatus }) => {
    const { conditionId, outcomeId } = selection;
    const { contracts } = useChain();
    const publicClient = usePublicClient();
    const apolloClient = useApolloClient();
    const [odds, setOdds] = useState(initialOdds || '0');
    const [isOddsFetching, setOddsFetching] = useState(!initialOdds);
    const [status, setStatus] = useState(initialStatus || ConditionStatus.Created);
    const [isStatusFetching, setStatusFetching] = useState(!initialStatus);
    const isLocked = status !== ConditionStatus.Created;
    useEffect(() => {
        const unsubscribe = oddsWatcher.subscribe(`${conditionId}`, `${outcomeId}`, async () => {
            const rawOdds = await publicClient.readContract({
                address: contracts.prematchCore.address,
                abi: contracts.prematchCore.abi,
                functionName: 'calcOdds',
                args: [
                    BigInt(conditionId),
                    BigInt(1),
                    BigInt(outcomeId)
                ],
            });
            setOdds(formatUnits(rawOdds, ODDS_DECIMALS));
        });
        return () => {
            unsubscribe();
        };
    }, [publicClient]);
    useEffect(() => {
        const unsubscribe = conditionStatusWatcher.subscribe(`${conditionId}`, (newStatus) => {
            setStatus(newStatus);
        });
        return () => {
            unsubscribe();
        };
    }, []);
    useEffect(() => {
        if (!initialOdds || !initialStatus) {
            (async () => {
                const conditionEntityId = `${contracts.prematchCore.address.toLowerCase()}_${conditionId}`;
                const key = `${conditionEntityId}-${outcomeId}`;
                const data = await batchFetchOutcome(conditionEntityId, apolloClient);
                if (!initialOdds) {
                    setOdds(data?.[key]?.odds || '0');
                    setOddsFetching(false);
                }
                if (!initialStatus) {
                    setStatus(data?.[key]?.status || ConditionStatus.Created);
                    setStatusFetching(false);
                }
            })();
        }
    }, [apolloClient, contracts.prematchCore.address]);
    return {
        odds,
        isLocked,
        isOddsFetching,
        isStatusFetching,
    };
};export{BetStatus,Bet_OrderBy,ConditionStatus,GameStatus,Game_OrderBy,OrderDirection,calcLiveOdds,calcMindOdds,conditionStatusWatcher,getBetStatus,getGameStatus,oddsWatcher,setGamesCacheTime,useBetTokenBalance,useBets,useCalcOdds,useChain,useConditions,useGame,useGameMarkets,useGames,useNativeBalance,useOutcome,usePrepareBet,useRedeemBet,useSportsNavigation,useWatchers};