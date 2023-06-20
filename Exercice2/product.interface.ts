export interface Batch {
    id: number;
    number: string;
}

export interface Product {
    id: number;
    name: string;
    unitPerBox: number;
    boxPerPallet: number;
    batches: Batch[];
}
