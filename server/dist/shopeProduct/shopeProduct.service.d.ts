import { Prisma, ShopeProduct } from '@prisma/client';
import { CreateShopeProductInput } from './Dto/create-shope-product-input';
export declare class ShopeProductService {
    private prisma;
    constructor();
    Sale(id: number): Promise<ShopeProduct | null>;
    Sales(): Promise<ShopeProduct[]>;
    create(createSaleInput: CreateShopeProductInput): Promise<ShopeProduct>;
    update(id: number, data: Prisma.ShopeProductUpdateInput): Promise<ShopeProduct | null>;
    delete(id: number): Promise<ShopeProduct | null>;
}
