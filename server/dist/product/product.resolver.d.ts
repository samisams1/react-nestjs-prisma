import { CreateProductInput } from './Dto/product-create-input';
import { UpdateProductInput, UpdateProductPriceInput } from './Dto/product-update-input';
import { product } from './product.entity';
import { ProductService } from './product.service';
import { Product } from '@prisma/client';
export declare class ProductResolver {
    private productService;
    constructor(productService: ProductService);
    product(id: number): Promise<product>;
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
    createProduct(createProductDto: CreateProductInput): Promise<Product | null>;
    updateProduct(id: number, updateProductInput: UpdateProductInput): Promise<{
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
    updateProductPrice(id: number, input: UpdateProductPriceInput): Promise<{
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
