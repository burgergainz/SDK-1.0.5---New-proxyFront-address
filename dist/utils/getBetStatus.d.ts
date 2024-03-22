import { type Bet } from '../hooks/useBets';
import { BetStatus as GraphBetStatus } from '../types';
export declare enum BetStatus {
    Accepted = 0,
    Live = 1,
    PendingResolution = 2,
    Resolved = 3,
    Canceled = 4
}
type Game = Pick<Bet['outcomes'][0]['game'], 'status' | 'startsAt'>;
type Props = {
    games: Game[];
    graphStatus: GraphBetStatus;
};
export declare const getBetStatus: (props: Props) => BetStatus;
export {};
