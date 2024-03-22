import { ConditionStatus } from '../types';
type Cb = (status: ConditionStatus) => void;
export declare const conditionStatusWatcher: {
    subscribe: (conditionId: string, cb: Cb) => () => void;
    dispatch: (conditionId: string, status: ConditionStatus) => void;
};
export {};
