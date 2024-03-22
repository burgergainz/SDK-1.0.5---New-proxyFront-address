import { type Address } from 'wagmi';
import { TransactionReceipt } from 'viem';
import { Selection } from '../global';
type Props = {
    amount: string;
    slippage: number;
    affiliate: Address;
    selections: Selection[];
    deadline?: number;
    onSuccess?(receipt: TransactionReceipt): void;
    onError?(err?: Error): void;
};
export declare const usePrepareBet: (props: Props) => {
    isAllowanceLoading: boolean;
    isApproveRequired: boolean;
    isOddsLoading: boolean;
    selectionsOdds: string[] | undefined;
    totalOdds: string | undefined;
    submit: () => Promise<void>;
    approveTx: {
        isPending: boolean;
        isProcessing: boolean;
        data: import("@wagmi/core").WriteContractResult | undefined;
        error: Error | null;
    };
    betTx: {
        isPending: boolean;
        isProcessing: boolean;
        isSuccess: boolean;
        data: import("@wagmi/core").WriteContractResult | undefined;
        error: Error | null;
    };
};
export {};
