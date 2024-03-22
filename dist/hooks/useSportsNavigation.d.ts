import { NavigationQuery } from '../docs/navigation';
type UseNavigationProps = {
    withGameCount?: boolean;
};
export declare const useSportsNavigation: (props?: UseNavigationProps) => import("@apollo/client").QueryResult<NavigationQuery, import("../types").Exact<{
    first?: import("../types").InputMaybe<number> | undefined;
    where?: import("../types").InputMaybe<import("../types").Game_Filter> | undefined;
    withGameCount: boolean;
}>>;
export {};
