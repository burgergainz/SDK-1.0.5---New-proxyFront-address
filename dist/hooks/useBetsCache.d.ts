import { type BetFragment } from '../docs/fragments/bet';
import { Address } from 'wagmi';
import { TransactionReceipt } from 'viem';
import { Selection } from '../global';
type UpdateBetProps = {
    coreAddress: Address;
    tokenId: string | bigint;
};
type NewBetProps = {
    bet: {
        amount: string;
        selections: Selection[];
        selectionsOdds: Array<string | bigint>;
        freebetId?: string | bigint;
        freebetContractAddress?: Address;
    };
    receipt: TransactionReceipt;
};
export declare const useBetsCache: () => {
    updateBetCache: ({ coreAddress, tokenId }: UpdateBetProps, values: Partial<BetFragment>) => void;
    addBet: (props: NewBetProps) => void;
};
export {};
