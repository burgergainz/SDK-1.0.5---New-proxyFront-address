type Procedure = (...args: any[]) => void;
export declare function debounce<F extends Procedure>(func: F, wait: number, immediate?: boolean): (this: ThisParameterType<F>, ...args: Parameters<F>) => void;
export {};
