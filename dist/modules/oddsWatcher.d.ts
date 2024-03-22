type Cb = () => void;
export declare const oddsWatcher: {
    subscribe: (conditionId: string, outcomeId: string, cb: Cb) => () => void;
    dispatch: (conditionId: string) => void;
};
export {};
