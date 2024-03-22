import { Selection } from '../global';
import { ConditionStatus } from '../types';
type Props = {
    selection: Selection;
    initialOdds?: string;
    initialStatus?: ConditionStatus;
};
export declare const useOutcome: ({ selection, initialOdds, initialStatus }: Props) => {
    odds: string;
    isLocked: boolean;
    isOddsFetching: boolean;
    isStatusFetching: boolean;
};
export {};
