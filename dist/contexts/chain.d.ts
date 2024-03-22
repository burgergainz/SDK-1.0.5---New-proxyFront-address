import React from 'react';
import { type Chain } from 'wagmi';
import { type ChainId, type ChainData } from '../config';
export type ChainContextValue = Omit<ChainData, 'chain'> & {
    appChain: Omit<Chain, 'id'> & {
        id: ChainId;
    };
    walletChain: Chain | undefined;
    isRightNetwork: boolean;
    setAppChainId: (chainId: ChainId) => void;
};
type Props = {
    children: React.ReactNode;
    initialChainId: ChainId;
};
export declare const ChainProvider: React.FC<Props>;
export declare const useChain: () => ChainContextValue;
export {};
