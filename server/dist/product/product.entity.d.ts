import { Category } from 'src/category/category.entity';
export declare class product {
    id: number;
    name: string;
    price: number;
    categoryId: number;
    description: string;
    code: string;
    image: string;
    createdAt: Date;
    category: Category;
    updatedAt: Date;
}
