import { Product } from '@prisma/client';
import { CreateProductInput } from './Dto/product-create-input';
import { UpdateProductInput, UpdateProductPriceInput } from './Dto/product-update-input';
import { product } from './product.entity';
export declare class ProductService {
    private prisma;
    constructor();
    product(id: number): Promise<product | null>;
    products(): Promise<({
        category: {
            id: number;
            name: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: number;
        name: string;
        price: number;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        image: string;
        code: string;
        categoryId: number;
    })[]>;
    createProduct(data: CreateProductInput): Promise<Product | null>;
    update(id: number, updateProductDto: UpdateProductInput): Promise<{
        id: number;
        name: string;
        price: number;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        image: string;
        code: string;
        categoryId: number;
    }>;
    countProducts(): Promise<number>;
    updatePrice(id: number, updateProductDto: UpdateProductPriceInput): Promise<{
        id: number;
        name: string;
        price: number;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        image: string;
        code: string;
        categoryId: number;
    }>;
}
