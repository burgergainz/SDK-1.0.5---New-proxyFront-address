import { decodeEventLog, TransactionReceipt } from 'viem';
type Props = {
    receipt: TransactionReceipt;
    eventName: string;
    abi: Parameters<typeof decodeEventLog>[0]['abi'];
};
export declare const getEventArgsFromTxReceipt: <T = Record<string, any>>({ receipt, eventName, abi }: Props) => T | undefined;
export {};
