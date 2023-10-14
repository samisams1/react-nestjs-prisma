import { ShopeProduct } from '@prisma/client';
import { CreateShopeProductInput } from './Dto/create-shope-product-input';
import { UpdateShopeProductInput } from './Dto/update-shope-product-input';
import { ShopeProductService } from './shopeProduct.service';
export declare class shopeProductResolver {
    private readonly saleService;
    constructor(saleService: ShopeProductService);
    shopeProduct(id: number): Promise<{
        id: number;
        productId: number;
        userId: number;
        quantity: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    shopeProducts(): Promise<ShopeProduct[]>;
    createShopeProduct(createPurchaseDto: CreateShopeProductInput): Promise<{
        id: number;
        productId: number;
        userId: number;
        quantity: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateShopeProduct(id: number, data: UpdateShopeProductInput): Promise<{
        id: number;
        productId: number;
        userId: number;
        quantity: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteShopeProduct(id: number): Promise<{
        id: number;
        productId: number;
        userId: number;
        quantity: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
