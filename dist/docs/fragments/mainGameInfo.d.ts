import * as Types from '../../types';
export type MainGameInfoFragment = {
    __typename?: 'Game';
    id: string;
    gameId: any;
    title?: string | null;
    startsAt: any;
    status: Types.GameStatus;
    sport: {
        __typename?: 'Sport';
        slug: string;
        name: string;
    };
    league: {
        __typename?: 'League';
        slug: string;
        name: string;
        country: {
            __typename?: 'Country';
            slug: string;
            name: string;
        };
    };
    participants: Array<{
        __typename?: 'Participant';
        image?: string | null;
        name: string;
    }>;
};
export declare const MainGameInfoFragmentDoc: import("@apollo/client").DocumentNode;
