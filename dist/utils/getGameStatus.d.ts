import { GameStatus as GraphGameStatus } from '../types';
export declare enum GameStatus {
    Preparing = 0,
    Live = 1,
    PendingResolution = 2,
    Resolved = 3,
    Canceled = 4,
    Paused = 5
}
type Props = {
    graphStatus: GraphGameStatus;
    startsAt: number;
};
export declare const getGameStatus: (props: Props) => GameStatus;
export {};
