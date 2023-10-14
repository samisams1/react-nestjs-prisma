import { Store } from '@prisma/client';
import { UpdateQuantityInput, UpdateStoreInput } from './Dto/update-store-input';
export declare class StoreService {
    private prisma;
    constructor();
    store(id: number): Promise<Store | null>;
    stores(): Promise<Store[]>;
    update(input: UpdateStoreInput[]): Promise<Store[]>;
    updateQuantity(id: number, updateProductDto: UpdateQuantityInput): Promise<{
        id: number;
        productId: number;
        userId: number;
        quantity: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    storeTotalProduct(): Promise<number>;
}
