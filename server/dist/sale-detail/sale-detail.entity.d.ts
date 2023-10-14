import { product } from "src/product/product.entity";
import { User } from "src/users/entities/user.entity";
export declare class saleDetail {
    id: number;
    saleId: number;
    quantity: number;
    productId: number;
    price: number;
    amount: number;
    product: product;
    seller: User;
    createdAt: Date;
}
