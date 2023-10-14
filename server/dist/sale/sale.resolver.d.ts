import { Sale, SaleDetail, Store } from '@prisma/client';
import { UpdateStoreInput } from 'src/store/Dto/update-store-input';
import { CreateSaleInput } from './Dto/sale-create-input';
import { SaleService } from './sale.service';
export declare class SaleResolver {
    private saleService;
    constructor(saleService: SaleService);
    createSale(CreateSaleInput: CreateSaleInput): Promise<{
        id: number;
        grossAmount: number;
        vat: number;
        net: number;
        sellerId: number;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    sales(): Promise<Sale[]>;
    sale(id: number): Promise<Sale | null>;
    saleDetails(): Promise<({
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
    saleDetailById(id: number): Promise<SaleDetail[]>;
    totalSale(): Promise<number>;
    saleTotalProduct(): Promise<number>;
    acceptStoreProduct(input: UpdateStoreInput[]): Promise<Store[]>;
}
