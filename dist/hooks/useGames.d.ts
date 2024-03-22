import { GamesQuery } from '../docs/games';
import { Game_OrderBy, OrderDirection } from '../types';
type UseGamesProps = {
    filter?: {
        limit?: number;
        offset?: number;
        sportSlug?: string;
    };
    orderBy?: Game_OrderBy;
    orderDir?: OrderDirection;
    withConditions?: boolean;
};
export declare const useGames: (props?: UseGamesProps) => import("@apollo/client").QueryResult<GamesQuery, import("../types").Exact<{
    first?: import("../types").InputMaybe<number> | undefined;
    skip?: import("../types").InputMaybe<number> | undefined;
    where: import("../types").Game_Filter;
    orderBy?: import("../types").InputMaybe<Game_OrderBy> | undefined;
    orderDirection?: import("../types").InputMaybe<OrderDirection> | undefined;
}>>;
export {};
