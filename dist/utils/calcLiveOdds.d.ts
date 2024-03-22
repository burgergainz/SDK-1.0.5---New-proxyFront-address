import { Selection } from '../global';
type SocketData = {
    id: string;
    margin: number;
    reinforcement: number;
    winningOutcomesCount: number;
    outcomes: Array<{
        id: number;
        price: number;
        clearPrice: number;
    }>;
};
type CalcLiveOddsProps = {
    selection: Selection;
    betAmount: string;
    oddsData: SocketData;
};
export declare const calcLiveOdds: ({ selection, betAmount, oddsData }: CalcLiveOddsProps) => number;
export {};
