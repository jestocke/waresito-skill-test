import { Product } from "./product.interface";

export const products: Product[] = [
    {
        id: 1,
        name: "Product 1",
        unitPerBox: 10,
        boxPerPallet: 2,
        batches: [],
    },
    {
        id: 2,
        name: "Product 2",
        unitPerBox: 20,
        boxPerPallet: 5,
        batches: [
            {
                id: 1,
                number: "BATCH1",
            },
            {
                id: 2,
                number: "BATCH2",
            },
        ],
    },
    {
        id: 3,
        name: "Product 3",
        unitPerBox: 100,
        boxPerPallet: 50,
        batches: [
            {
                id: 1,
                number: "BATCH3",
            },
            {
                id: 1,
                number: "BATCH4",
            },
        ],
    },
];
