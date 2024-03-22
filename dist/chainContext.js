import {jsx}from'react/jsx-runtime';import {createContext,useState,useContext}from'react';import {useNetwork}from'wagmi';import {c as chainsData}from'./config.js';const ChainContext = createContext(null);
const ChainProvider = (props) => {
    const { children, initialChainId } = props;
    const [appChainId, setAppChainId] = useState(initialChainId);
    const { chain: walletChain } = useNetwork();
    const walletChainId = walletChain?.id || null;
    const isRightNetwork = walletChainId === appChainId;
    const { chain, contracts, betToken } = chainsData[appChainId];
    const context = {
        appChain: chain,
        walletChain,
        contracts,
        betToken,
        isRightNetwork,
        setAppChainId,
    };
    return (jsx(ChainContext.Provider, { value: context, children: children }));
};
const useChain = () => {
    return useContext(ChainContext);
};export{ChainProvider as C,useChain as u};