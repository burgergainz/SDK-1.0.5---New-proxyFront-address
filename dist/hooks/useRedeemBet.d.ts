import { WriteContractResult } from '@wagmi/core';
import { Bet } from './useBets';
type SubmitProps = {
    bets: Array<Pick<Bet, 'tokenId' | 'coreAddress'>>;
};
export declare const useRedeemBet: () => {
    isPending: boolean;
    isProcessing: boolean;
    data: import("viem").TransactionReceipt | WriteContractResult | undefined;
    error: Error | null;
    submit: (props: SubmitProps) => Promise<import("viem").TransactionReceipt>;
};
export {};
