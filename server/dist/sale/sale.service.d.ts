import { Sale, SaleDetail, Store } from '@prisma/client';
import { UpdateStoreInput } from 'src/store/Dto/update-store-input';
import { CreateSaleInput } from './Dto/sale-create-input';
export declare class SaleService {
    private prisma;
    constructor();
    sale(id: number): Promise<Sale | null>;
    sales(): Promise<Sale[]>;
    create(createSaleInput: CreateSaleInput): Promise<Sale>;
    acceptProductFromSale(input: UpdateStoreInput[]): Promise<Store[]>;
    saleDetail(): Promise<({
        product: {
            id: number;
            name: string;
            price: number;
            createdAt: Date;
            updatedAt: Date;
            description: string;
            image: string;
            code: string;
            categoryId: number;
        };
    } & {
        id: number;
        saleId: number;
        quantity: number;
        productId: number;
        price: number;
        amount: number;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    saleDetailBySellId(id: number): Promise<SaleDetail[]>;
    sumTheGross(): Promise<number>;
    saleTotalProduct(): Promise<number>;
}
