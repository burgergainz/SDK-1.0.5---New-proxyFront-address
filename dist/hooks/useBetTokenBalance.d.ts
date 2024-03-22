export declare const useBetTokenBalance: () => {
    loading: boolean;
    rawBalance: bigint | undefined;
    balance: string | undefined;
    error: Error | null;
};
