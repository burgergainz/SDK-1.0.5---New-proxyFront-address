import { type Chain } from 'viem/chains';
export declare const DEFAULT_CACHE_TIME: number;
export declare const MAX_UINT_256: bigint;
export declare const DEFAULT_DEADLINE = 300;
export declare const ODDS_DECIMALS = 12;
export declare const configRef: {
    gamesCacheTime: number;
};
export declare const graphqlEndpoints: Record<number, string>;
declare const lpAbi: readonly [{
    readonly inputs: readonly [];
    readonly name: "BetExpired";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "waitTime";
        readonly type: "uint64";
    }];
    readonly name: "ClaimTimeout";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "CoreNotActive";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "DepositDoesNotExist";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "GameAlreadyCanceled";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "GameAlreadyCreated";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "GameCanceled_";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "GameNotExists";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "IncorrectCoreState";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "IncorrectFee";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "IncorrectGameId";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "IncorrectMinBet";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "IncorrectMinDepo";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "IncorrectPercent";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "IncorrectReinforcementAbility";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "IncorrectTimestamp";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "LeafNotExist";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "LiquidityIsLocked";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "LiquidityNotOwned";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NoLiquidity";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NotEnoughLiquidity";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "OnlyFactory";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "enum SafeCast.Type";
        readonly name: "to";
        readonly type: "uint8";
    }];
    readonly name: "SafeCastError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "SmallBet";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "SmallDepo";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "SmallDonation";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "UnknownCore";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "waitTime";
        readonly type: "uint64";
    }];
    readonly name: "WithdrawalTimeout";
    readonly type: "error";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "approved";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "Approval";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "operator";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "bool";
        readonly name: "approved";
        readonly type: "bool";
    }];
    readonly name: "ApprovalForAll";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "core";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "bettor";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "tokenId";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "BettorWin";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint64";
        readonly name: "newClaimTimeout";
        readonly type: "uint64";
    }];
    readonly name: "ClaimTimeoutChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "core";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "enum ILP.CoreState";
        readonly name: "state";
        readonly type: "uint8";
    }, {
        readonly indexed: false;
        readonly internalType: "uint64";
        readonly name: "reinforcementAbility";
        readonly type: "uint64";
    }, {
        readonly indexed: false;
        readonly internalType: "uint128";
        readonly name: "minBet";
        readonly type: "uint128";
    }];
    readonly name: "CoreSettingsUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "newDataProvider";
        readonly type: "address";
    }];
    readonly name: "DataProviderChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "enum ILP.FeeType";
        readonly name: "feeType";
        readonly type: "uint8";
    }, {
        readonly indexed: false;
        readonly internalType: "uint64";
        readonly name: "fee";
        readonly type: "uint64";
    }];
    readonly name: "FeeChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "gameId";
        readonly type: "uint256";
    }];
    readonly name: "GameCanceled";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "gameId";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint64";
        readonly name: "newStart";
        readonly type: "uint64";
    }];
    readonly name: "GameShifted";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint8";
        readonly name: "version";
        readonly type: "uint8";
    }];
    readonly name: "Initialized";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "uint48";
        readonly name: "depositId";
        readonly type: "uint48";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "LiquidityAdded";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "uint48";
        readonly name: "depositId";
        readonly type: "uint48";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "LiquidityDonated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "newLiquidityManager";
        readonly type: "address";
    }];
    readonly name: "LiquidityManagerChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "uint48";
        readonly name: "depositId";
        readonly type: "uint48";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "LiquidityRemoved";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "core";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint128";
        readonly name: "newMinBet";
        readonly type: "uint128";
    }];
    readonly name: "MinBetChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint128";
        readonly name: "newMinDepo";
        readonly type: "uint128";
    }];
    readonly name: "MinDepoChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "gameId";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint64";
        readonly name: "startsAt";
        readonly type: "uint64";
    }, {
        readonly indexed: false;
        readonly internalType: "bytes";
        readonly name: "data";
        readonly type: "bytes";
    }];
    readonly name: "NewGame";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "previousOwner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "newOwner";
        readonly type: "address";
    }];
    readonly name: "OwnershipTransferred";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint128";
        readonly name: "newReinforcementAbility";
        readonly type: "uint128";
    }];
    readonly name: "ReinforcementAbilityChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "Transfer";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint64";
        readonly name: "newWithdrawTimeout";
        readonly type: "uint64";
    }];
    readonly name: "WithdrawTimeoutChanged";
    readonly type: "event";
}, {
    readonly inputs: readonly [];
    readonly name: "access";
    readonly outputs: readonly [{
        readonly internalType: "contract IAccess";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "gameId";
        readonly type: "uint256";
    }];
    readonly name: "addCondition";
    readonly outputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "";
        readonly type: "uint64";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "core";
        readonly type: "address";
    }];
    readonly name: "addCore";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint128";
        readonly name: "amount";
        readonly type: "uint128";
    }, {
        readonly internalType: "bytes";
        readonly name: "data";
        readonly type: "bytes";
    }];
    readonly name: "addLiquidity";
    readonly outputs: readonly [{
        readonly internalType: "uint48";
        readonly name: "depositId";
        readonly type: "uint48";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "gameId";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint128";
        readonly name: "lockedReserve";
        readonly type: "uint128";
    }, {
        readonly internalType: "uint128";
        readonly name: "finalReserve";
        readonly type: "uint128";
    }, {
        readonly internalType: "uint48";
        readonly name: "depositId";
        readonly type: "uint48";
    }];
    readonly name: "addReserve";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "core";
        readonly type: "address";
    }, {
        readonly internalType: "uint128";
        readonly name: "amount";
        readonly type: "uint128";
    }, {
        readonly internalType: "uint64";
        readonly name: "expiresAt";
        readonly type: "uint64";
    }, {
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "affiliate";
            readonly type: "address";
        }, {
            readonly internalType: "uint64";
            readonly name: "minOdds";
            readonly type: "uint64";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly internalType: "struct IBet.BetData";
        readonly name: "betData";
        readonly type: "tuple";
    }];
    readonly name: "bet";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "bettor";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "core";
        readonly type: "address";
    }, {
        readonly internalType: "uint128";
        readonly name: "amount";
        readonly type: "uint128";
    }, {
        readonly internalType: "uint64";
        readonly name: "expiresAt";
        readonly type: "uint64";
    }, {
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "affiliate";
            readonly type: "address";
        }, {
            readonly internalType: "uint64";
            readonly name: "minOdds";
            readonly type: "uint64";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly internalType: "struct IBet.BetData";
        readonly name: "betData";
        readonly type: "tuple";
    }];
    readonly name: "betFor";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "gameId";
        readonly type: "uint256";
    }];
    readonly name: "cancelGame";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "newClaimTimeout";
        readonly type: "uint64";
    }];
    readonly name: "changeClaimTimeout";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "newDataProvider";
        readonly type: "address";
    }];
    readonly name: "changeDataProvider";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "enum ILP.FeeType";
        readonly name: "feeType";
        readonly type: "uint8";
    }, {
        readonly internalType: "uint64";
        readonly name: "newFee";
        readonly type: "uint64";
    }];
    readonly name: "changeFee";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "newLiquidityManager";
        readonly type: "address";
    }];
    readonly name: "changeLiquidityManager";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "gameId";
        readonly type: "uint256";
    }, {
        readonly internalType: "int128";
        readonly name: "deltaReserve";
        readonly type: "int128";
    }];
    readonly name: "changeLockedLiquidity";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint128";
        readonly name: "newMinDepo";
        readonly type: "uint128";
    }];
    readonly name: "changeMinDepo";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "newWithdrawTimeout";
        readonly type: "uint64";
    }];
    readonly name: "changeWithdrawTimeout";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "target";
        readonly type: "address";
    }, {
        readonly internalType: "bytes4";
        readonly name: "selector";
        readonly type: "bytes4";
    }];
    readonly name: "checkAccess";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "core";
        readonly type: "address";
    }];
    readonly name: "checkCore";
    readonly outputs: readonly [];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "checkOwner";
    readonly outputs: readonly [];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "claimReward";
    readonly outputs: readonly [{
        readonly internalType: "uint128";
        readonly name: "claimedAmount";
        readonly type: "uint128";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "claimTimeout";
    readonly outputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "";
        readonly type: "uint64";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly name: "cores";
    readonly outputs: readonly [{
        readonly internalType: "enum ILP.CoreState";
        readonly name: "state";
        readonly type: "uint8";
    }, {
        readonly internalType: "uint64";
        readonly name: "reinforcementAbility";
        readonly type: "uint64";
    }, {
        readonly internalType: "uint128";
        readonly name: "minBet";
        readonly type: "uint128";
    }, {
        readonly internalType: "uint128";
        readonly name: "lockedLiquidity";
        readonly type: "uint128";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "gameId";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint64";
        readonly name: "startsAt";
        readonly type: "uint64";
    }, {
        readonly internalType: "bytes";
        readonly name: "data";
        readonly type: "bytes";
    }];
    readonly name: "createGame";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "dataProvider";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint128";
        readonly name: "amount";
        readonly type: "uint128";
    }, {
        readonly internalType: "uint48";
        readonly name: "depositId";
        readonly type: "uint48";
    }];
    readonly name: "donateLiquidity";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "factory";
    readonly outputs: readonly [{
        readonly internalType: "contract IOwnable";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly name: "fees";
    readonly outputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "";
        readonly type: "uint64";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly name: "games";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "unusedVariable";
        readonly type: "bytes32";
    }, {
        readonly internalType: "uint128";
        readonly name: "lockedLiquidity";
        readonly type: "uint128";
    }, {
        readonly internalType: "uint64";
        readonly name: "startsAt";
        readonly type: "uint64";
    }, {
        readonly internalType: "bool";
        readonly name: "canceled";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "getApproved";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "gameId";
        readonly type: "uint256";
    }];
    readonly name: "getGameInfo";
    readonly outputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "";
        readonly type: "uint64";
    }, {
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getLastDepositId";
    readonly outputs: readonly [{
        readonly internalType: "uint48";
        readonly name: "depositId";
        readonly type: "uint48";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "core";
        readonly type: "address";
    }];
    readonly name: "getLockedLiquidityLimit";
    readonly outputs: readonly [{
        readonly internalType: "uint128";
        readonly name: "";
        readonly type: "uint128";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getReserve";
    readonly outputs: readonly [{
        readonly internalType: "uint128";
        readonly name: "reserve";
        readonly type: "uint128";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "access_";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "dataProvider_";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "token_";
        readonly type: "address";
    }, {
        readonly internalType: "uint128";
        readonly name: "minDepo_";
        readonly type: "uint128";
    }, {
        readonly internalType: "uint64";
        readonly name: "daoFee";
        readonly type: "uint64";
    }, {
        readonly internalType: "uint64";
        readonly name: "dataProviderFee";
        readonly type: "uint64";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "operator";
        readonly type: "address";
    }];
    readonly name: "isApprovedForAll";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "depositId";
        readonly type: "uint256";
    }];
    readonly name: "isDepositExists";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "gameId";
        readonly type: "uint256";
    }];
    readonly name: "isGameCanceled";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "liquidityManager";
    readonly outputs: readonly [{
        readonly internalType: "contract ILiquidityManager";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "lockedLiquidity";
    readonly outputs: readonly [{
        readonly internalType: "uint128";
        readonly name: "";
        readonly type: "uint128";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "minDepo";
    readonly outputs: readonly [{
        readonly internalType: "uint128";
        readonly name: "";
        readonly type: "uint128";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "nextNode";
    readonly outputs: readonly [{
        readonly internalType: "uint48";
        readonly name: "";
        readonly type: "uint48";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint48";
        readonly name: "leaf";
        readonly type: "uint48";
    }];
    readonly name: "nodeWithdrawView";
    readonly outputs: readonly [{
        readonly internalType: "uint128";
        readonly name: "withdrawAmount";
        readonly type: "uint128";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "owner";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "ownerOf";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly name: "rewards";
    readonly outputs: readonly [{
        readonly internalType: "int128";
        readonly name: "amount";
        readonly type: "int128";
    }, {
        readonly internalType: "uint64";
        readonly name: "claimedAt";
        readonly type: "uint64";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "safeTransferFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "tokenId";
        readonly type: "uint256";
    }, {
        readonly internalType: "bytes";
        readonly name: "data";
        readonly type: "bytes";
    }];
    readonly name: "safeTransferFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "operator";
        readonly type: "address";
    }, {
        readonly internalType: "bool";
        readonly name: "approved";
        readonly type: "bool";
    }];
    readonly name: "setApprovalForAll";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "gameId";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint64";
        readonly name: "startsAt";
        readonly type: "uint64";
    }];
    readonly name: "shiftGame";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes4";
        readonly name: "interfaceId";
        readonly type: "bytes4";
    }];
    readonly name: "supportsInterface";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "token";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "index";
        readonly type: "uint256";
    }];
    readonly name: "tokenByIndex";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "index";
        readonly type: "uint256";
    }];
    readonly name: "tokenOfOwnerByIndex";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "tokenURI";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "totalSupply";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "newOwner";
        readonly type: "address";
    }];
    readonly name: "transferOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint48";
        readonly name: "";
        readonly type: "uint48";
    }];
    readonly name: "treeNode";
    readonly outputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "updateId";
        readonly type: "uint64";
    }, {
        readonly internalType: "uint128";
        readonly name: "amount";
        readonly type: "uint128";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "core";
        readonly type: "address";
    }, {
        readonly internalType: "enum ILP.CoreState";
        readonly name: "state";
        readonly type: "uint8";
    }, {
        readonly internalType: "uint64";
        readonly name: "reinforcementAbility";
        readonly type: "uint64";
    }, {
        readonly internalType: "uint128";
        readonly name: "minBet";
        readonly type: "uint128";
    }];
    readonly name: "updateCoreSettings";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "updateId";
    readonly outputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "";
        readonly type: "uint64";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "core";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "viewPayout";
    readonly outputs: readonly [{
        readonly internalType: "uint128";
        readonly name: "";
        readonly type: "uint128";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint48";
        readonly name: "";
        readonly type: "uint48";
    }];
    readonly name: "withdrawAfter";
    readonly outputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "";
        readonly type: "uint64";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint48";
        readonly name: "depositId";
        readonly type: "uint48";
    }, {
        readonly internalType: "uint40";
        readonly name: "percent";
        readonly type: "uint40";
    }];
    readonly name: "withdrawLiquidity";
    readonly outputs: readonly [{
        readonly internalType: "uint128";
        readonly name: "withdrawnAmount";
        readonly type: "uint128";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "core";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "withdrawPayout";
    readonly outputs: readonly [{
        readonly internalType: "uint128";
        readonly name: "amount";
        readonly type: "uint128";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "withdrawTimeout";
    readonly outputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "";
        readonly type: "uint64";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly stateMutability: "payable";
    readonly type: "receive";
}];
declare const prematchCoreAbi: readonly [{
    readonly inputs: readonly [];
    readonly name: "AlreadyPaid";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "BetNotExists";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "CantChangeFlag";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ConditionAlreadyCreated";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ConditionAlreadyResolved";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ConditionNotExists";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ConditionNotFinished";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ConditionNotRunning";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "outcome";
        readonly type: "uint64";
    }];
    readonly name: "DuplicateOutcomes";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "GameAlreadyStarted";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "IncorrectConditionId";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "IncorrectMargin";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "IncorrectOdds";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "IncorrectOutcomesCount";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "IncorrectReinforcement";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "IncorrectTimestamp";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "IncorrectWinningOutcomesCount";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InsufficientFund";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NoPendingReward";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NothingChanged";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "OnlyLp";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly name: "OnlyOracle";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "OutcomesAndOddsCountDiffer";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "waitTime";
        readonly type: "uint64";
    }];
    readonly name: "ResolveTooEarly";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "enum SafeCast.Type";
        readonly name: "to";
        readonly type: "uint8";
    }];
    readonly name: "SafeCastError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "SmallOdds";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "pendingRewardsCount";
        readonly type: "uint256";
    }];
    readonly name: "StartOutOfRange";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "WrongOutcome";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ZeroOdds";
    readonly type: "error";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "gameId";
        readonly type: "uint256";
    }, {
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "conditionId";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint64[]";
        readonly name: "outcomes";
        readonly type: "uint64[]";
    }];
    readonly name: "ConditionCreated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "conditionId";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint8";
        readonly name: "state";
        readonly type: "uint8";
    }, {
        readonly indexed: false;
        readonly internalType: "uint64[]";
        readonly name: "winningOutcomes";
        readonly type: "uint64[]";
    }, {
        readonly indexed: false;
        readonly internalType: "int128";
        readonly name: "lpProfit";
        readonly type: "int128";
    }];
    readonly name: "ConditionResolved";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "conditionId";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "bool";
        readonly name: "flag";
        readonly type: "bool";
    }];
    readonly name: "ConditionStopped";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint8";
        readonly name: "version";
        readonly type: "uint8";
    }];
    readonly name: "Initialized";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "conditionId";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint64";
        readonly name: "newMargin";
        readonly type: "uint64";
    }];
    readonly name: "MarginChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "bettor";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "affiliate";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "conditionId";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "tokenId";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint64";
        readonly name: "outcomeId";
        readonly type: "uint64";
    }, {
        readonly indexed: false;
        readonly internalType: "uint128";
        readonly name: "amount";
        readonly type: "uint128";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "odds";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint128[]";
        readonly name: "funds";
        readonly type: "uint128[]";
    }];
    readonly name: "NewBet";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "conditionId";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256[]";
        readonly name: "newOdds";
        readonly type: "uint256[]";
    }];
    readonly name: "OddsChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "previousOwner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "newOwner";
        readonly type: "address";
    }];
    readonly name: "OwnershipTransferred";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "conditionId";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint128";
        readonly name: "newReinforcement";
        readonly type: "uint128";
    }];
    readonly name: "ReinforcementChanged";
    readonly type: "event";
}, {
    readonly inputs: readonly [];
    readonly name: "MAX_OUTCOMES_COUNT";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "azuroBet";
    readonly outputs: readonly [{
        readonly internalType: "contract IAzuroBet";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly name: "bets";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "conditionId";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint128";
        readonly name: "amount";
        readonly type: "uint128";
    }, {
        readonly internalType: "uint128";
        readonly name: "payout";
        readonly type: "uint128";
    }, {
        readonly internalType: "uint64";
        readonly name: "outcome";
        readonly type: "uint64";
    }, {
        readonly internalType: "bool";
        readonly name: "isPaid";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "conditionId";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint128";
        readonly name: "amount";
        readonly type: "uint128";
    }, {
        readonly internalType: "uint64";
        readonly name: "outcome";
        readonly type: "uint64";
    }];
    readonly name: "calcOdds";
    readonly outputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "odds";
        readonly type: "uint64";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "conditionId";
        readonly type: "uint256";
    }];
    readonly name: "cancelCondition";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "conditionId";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint64";
        readonly name: "newMargin";
        readonly type: "uint64";
    }];
    readonly name: "changeMargin";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "conditionId";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "newOdds";
        readonly type: "uint256[]";
    }];
    readonly name: "changeOdds";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "conditionId";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint128";
        readonly name: "newReinforcement";
        readonly type: "uint128";
    }];
    readonly name: "changeReinforcement";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "checkOwner";
    readonly outputs: readonly [];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly name: "conditions";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "gameId";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint128";
        readonly name: "totalNetBets";
        readonly type: "uint128";
    }, {
        readonly internalType: "uint128";
        readonly name: "reinforcement";
        readonly type: "uint128";
    }, {
        readonly internalType: "uint128";
        readonly name: "fund";
        readonly type: "uint128";
    }, {
        readonly internalType: "uint64";
        readonly name: "margin";
        readonly type: "uint64";
    }, {
        readonly internalType: "uint64";
        readonly name: "endsAt";
        readonly type: "uint64";
    }, {
        readonly internalType: "uint48";
        readonly name: "lastDepositId";
        readonly type: "uint48";
    }, {
        readonly internalType: "uint8";
        readonly name: "winningOutcomesCount";
        readonly type: "uint8";
    }, {
        readonly internalType: "enum ICondition.ConditionState";
        readonly name: "state";
        readonly type: "uint8";
    }, {
        readonly internalType: "address";
        readonly name: "oracle";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "gameId";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "conditionId";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "odds";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "uint64[]";
        readonly name: "outcomes";
        readonly type: "uint64[]";
    }, {
        readonly internalType: "uint128";
        readonly name: "reinforcement";
        readonly type: "uint128";
    }, {
        readonly internalType: "uint64";
        readonly name: "margin";
        readonly type: "uint64";
    }, {
        readonly internalType: "uint8";
        readonly name: "winningOutcomesCount";
        readonly type: "uint8";
    }];
    readonly name: "createCondition";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "conditionId";
        readonly type: "uint256";
    }];
    readonly name: "getCondition";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "gameId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint128[]";
            readonly name: "payouts";
            readonly type: "uint128[]";
        }, {
            readonly internalType: "uint128[]";
            readonly name: "virtualFunds";
            readonly type: "uint128[]";
        }, {
            readonly internalType: "uint128";
            readonly name: "totalNetBets";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "reinforcement";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "fund";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint64";
            readonly name: "margin";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "endsAt";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint48";
            readonly name: "lastDepositId";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint8";
            readonly name: "winningOutcomesCount";
            readonly type: "uint8";
        }, {
            readonly internalType: "enum ICondition.ConditionState";
            readonly name: "state";
            readonly type: "uint8";
        }, {
            readonly internalType: "address";
            readonly name: "oracle";
            readonly type: "address";
        }];
        readonly internalType: "struct ICondition.Condition";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "conditionId";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint64";
        readonly name: "outcome";
        readonly type: "uint64";
    }];
    readonly name: "getOutcomeIndex";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "azuroBet_";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "lp_";
        readonly type: "address";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "conditionId";
        readonly type: "uint256";
    }];
    readonly name: "isConditionCanceled";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "conditionId";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint64";
        readonly name: "outcome";
        readonly type: "uint64";
    }];
    readonly name: "isOutcomeWinning";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "lp";
    readonly outputs: readonly [{
        readonly internalType: "contract ILP";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly name: "outcomeNumbers";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "owner";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "bettor";
        readonly type: "address";
    }, {
        readonly internalType: "uint128";
        readonly name: "amount";
        readonly type: "uint128";
    }, {
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "affiliate";
            readonly type: "address";
        }, {
            readonly internalType: "uint64";
            readonly name: "minOdds";
            readonly type: "uint64";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly internalType: "struct IBet.BetData";
        readonly name: "betData";
        readonly type: "tuple";
    }];
    readonly name: "putBet";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "conditionId";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint64[]";
        readonly name: "winningOutcomes_";
        readonly type: "uint64[]";
    }];
    readonly name: "resolveCondition";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "resolvePayout";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }, {
        readonly internalType: "uint128";
        readonly name: "";
        readonly type: "uint128";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "conditionId";
        readonly type: "uint256";
    }, {
        readonly internalType: "bool";
        readonly name: "flag";
        readonly type: "bool";
    }];
    readonly name: "stopCondition";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "newOwner";
        readonly type: "address";
    }];
    readonly name: "transferOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "viewPayout";
    readonly outputs: readonly [{
        readonly internalType: "uint128";
        readonly name: "";
        readonly type: "uint128";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly name: "winningOutcomes";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}];
declare const prematchComboCoreAbi: readonly [{
    readonly inputs: readonly [];
    readonly name: "AlreadyPaid";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "BetNotExists";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "conditionId";
        readonly type: "uint256";
    }];
    readonly name: "ConditionNotFinished";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "conditionId";
        readonly type: "uint256";
    }];
    readonly name: "ConditionNotRunning";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "IncorrectMaxOdds";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "IncorrectOdds";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "LargeOdds";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "OnlyLp";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "enum SafeCast.Type";
        readonly name: "to";
        readonly type: "uint8";
    }];
    readonly name: "SafeCastError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "SameGameIdsNotAllowed";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "SmallOdds";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "TooFewSubbets";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "conditionId";
        readonly type: "uint256";
    }];
    readonly name: "TooLargeReinforcement";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "WrongToken";
    readonly type: "error";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "approved";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "Approval";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "operator";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "bool";
        readonly name: "approved";
        readonly type: "bool";
    }];
    readonly name: "ApprovalForAll";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint8";
        readonly name: "version";
        readonly type: "uint8";
    }];
    readonly name: "Initialized";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "newMaxOdds";
        readonly type: "uint256";
    }];
    readonly name: "MaxOddsChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "bettor";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "affiliate";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "betId";
        readonly type: "uint256";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint64";
            readonly name: "odds";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint128";
            readonly name: "amount";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint48";
            readonly name: "lastDepositId";
            readonly type: "uint48";
        }, {
            readonly internalType: "bool";
            readonly name: "isClaimed";
            readonly type: "bool";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "conditionId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint64";
                readonly name: "outcomeId";
                readonly type: "uint64";
            }];
            readonly internalType: "struct ICoreBase.CoreBetData[]";
            readonly name: "subBets";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "uint64[]";
            readonly name: "conditionOdds";
            readonly type: "uint64[]";
        }];
        readonly indexed: false;
        readonly internalType: "struct IBetExpress.Bet";
        readonly name: "bet";
        readonly type: "tuple";
    }];
    readonly name: "NewBet";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "previousOwner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "newOwner";
        readonly type: "address";
    }];
    readonly name: "OwnershipTransferred";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint128";
        readonly name: "newReinforcement";
        readonly type: "uint128";
    }];
    readonly name: "ReinforcementChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "Transfer";
    readonly type: "event";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "baseURI";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "conditionId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint64";
            readonly name: "outcomeId";
            readonly type: "uint64";
        }];
        readonly internalType: "struct ICoreBase.CoreBetData[]";
        readonly name: "subBets";
        readonly type: "tuple[]";
    }, {
        readonly internalType: "uint128";
        readonly name: "amount";
        readonly type: "uint128";
    }];
    readonly name: "calcOdds";
    readonly outputs: readonly [{
        readonly internalType: "uint64[]";
        readonly name: "conditionOdds";
        readonly type: "uint64[]";
    }, {
        readonly internalType: "uint256";
        readonly name: "expressOdds";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "calcPayout";
    readonly outputs: readonly [{
        readonly internalType: "uint128";
        readonly name: "";
        readonly type: "uint128";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "newMaxOdds";
        readonly type: "uint256";
    }];
    readonly name: "changeMaxOdds";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint128";
        readonly name: "newReinforcement";
        readonly type: "uint128";
    }];
    readonly name: "changeReinforcement";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "checkOwner";
    readonly outputs: readonly [];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "core";
    readonly outputs: readonly [{
        readonly internalType: "contract ICoreBase";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "getApproved";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "betId";
        readonly type: "uint256";
    }];
    readonly name: "getBet";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint64";
            readonly name: "odds";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint128";
            readonly name: "amount";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint48";
            readonly name: "lastDepositId";
            readonly type: "uint48";
        }, {
            readonly internalType: "bool";
            readonly name: "isClaimed";
            readonly type: "bool";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "conditionId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint64";
                readonly name: "outcomeId";
                readonly type: "uint64";
            }];
            readonly internalType: "struct ICoreBase.CoreBetData[]";
            readonly name: "subBets";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "uint64[]";
            readonly name: "conditionOdds";
            readonly type: "uint64[]";
        }];
        readonly internalType: "struct IBetExpress.Bet";
        readonly name: "betInfo";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "lp_";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "core_";
        readonly type: "address";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "operator";
        readonly type: "address";
    }];
    readonly name: "isApprovedForAll";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "lastBetId";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly name: "lockedReserves";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "lp";
    readonly outputs: readonly [{
        readonly internalType: "contract ILP";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "maxOdds";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "owner";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "ownerOf";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "bettor";
        readonly type: "address";
    }, {
        readonly internalType: "uint128";
        readonly name: "amount";
        readonly type: "uint128";
    }, {
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "affiliate";
            readonly type: "address";
        }, {
            readonly internalType: "uint64";
            readonly name: "minOdds";
            readonly type: "uint64";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly internalType: "struct IBet.BetData";
        readonly name: "betData";
        readonly type: "tuple";
    }];
    readonly name: "putBet";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "betId";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "reinforcement";
    readonly outputs: readonly [{
        readonly internalType: "uint128";
        readonly name: "";
        readonly type: "uint128";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "resolvePayout";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly internalType: "uint128";
        readonly name: "payout";
        readonly type: "uint128";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "safeTransferFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "tokenId";
        readonly type: "uint256";
    }, {
        readonly internalType: "bytes";
        readonly name: "data";
        readonly type: "bytes";
    }];
    readonly name: "safeTransferFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "operator";
        readonly type: "address";
    }, {
        readonly internalType: "bool";
        readonly name: "approved";
        readonly type: "bool";
    }];
    readonly name: "setApprovalForAll";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "string";
        readonly name: "uri";
        readonly type: "string";
    }];
    readonly name: "setBaseURI";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes4";
        readonly name: "interfaceId";
        readonly type: "bytes4";
    }];
    readonly name: "supportsInterface";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "tokenURI";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "newOwner";
        readonly type: "address";
    }];
    readonly name: "transferOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "viewPayout";
    readonly outputs: readonly [{
        readonly internalType: "uint128";
        readonly name: "";
        readonly type: "uint128";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}];
declare const proxyFrontAbi: readonly [{
    readonly inputs: readonly [];
    readonly name: "IncorrectValue";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "enum SafeCast.Type";
        readonly name: "to";
        readonly type: "uint8";
    }];
    readonly name: "SafeCastError";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "lp";
        readonly type: "address";
    }, {
        readonly internalType: "bytes";
        readonly name: "data";
        readonly type: "bytes";
    }];
    readonly name: "addLiquidityNative";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "lp";
        readonly type: "address";
    }, {
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "core";
            readonly type: "address";
        }, {
            readonly internalType: "uint128";
            readonly name: "amount";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint64";
            readonly name: "expiresAt";
            readonly type: "uint64";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "affiliate";
                readonly type: "address";
            }, {
                readonly internalType: "uint64";
                readonly name: "minOdds";
                readonly type: "uint64";
            }, {
                readonly internalType: "bytes";
                readonly name: "data";
                readonly type: "bytes";
            }];
            readonly internalType: "struct IBet.BetData";
            readonly name: "extraData";
            readonly type: "tuple";
        }];
        readonly internalType: "struct IProxyFront.BetData[]";
        readonly name: "data";
        readonly type: "tuple[]";
    }];
    readonly name: "bet";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "lp";
        readonly type: "address";
    }, {
        readonly internalType: "uint48";
        readonly name: "depositId";
        readonly type: "uint48";
    }, {
        readonly internalType: "uint40";
        readonly name: "percent";
        readonly type: "uint40";
    }];
    readonly name: "withdrawLiquidityNative";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "core";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "isNative";
            readonly type: "bool";
        }];
        readonly internalType: "struct IProxyFront.WithdrawPayoutData[]";
        readonly name: "data";
        readonly type: "tuple[]";
    }];
    readonly name: "withdrawPayouts";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly stateMutability: "payable";
    readonly type: "receive";
}];
type Contracts = {
    lp: {
        address: `0x${string}`;
        abi: typeof lpAbi;
    };
    prematchCore: {
        address: `0x${string}`;
        abi: typeof prematchCoreAbi;
    };
    prematchComboCore: {
        address: `0x${string}`;
        abi: typeof prematchComboCoreAbi;
    };
    proxyFront: {
        address: `0x${string}`;
        abi: typeof proxyFrontAbi;
    };
};
type BetToken = {
    address?: `0x${string}` | undefined;
    symbol: string;
    decimals: number;
};
export type ChainData = {
    chain: Omit<Chain, 'id'> & {
        id: ChainId;
    };
    contracts: Contracts;
    betToken: BetToken;
};
export declare const chainsData: {
    readonly 100: ChainData;
    readonly 137: ChainData;
    readonly 42161: ChainData;
    readonly 80001: ChainData;
    readonly 421613: ChainData;
};
export type ChainId = keyof typeof chainsData;
export {};
