import { Selection } from '../global';
type CalcOddsProps = {
    selections: Selection[];
    amount?: string;
};
export declare const useCalcOdds: (props: CalcOddsProps) => {
    data: {
        selectionsOdds: readonly bigint[] | undefined;
        totalOdds: bigint | undefined;
    };
    loading: boolean;
    error: Error | null;
};
export {};
