import { saleDetail } from "src/sale-detail/sale-detail.entity";
import { User } from "src/users/entities/user.entity";
export declare class sale {
    id: number;
    sellerId: number;
    vat: number;
    net: number;
    grossAmount: number;
    status: string;
    saleDetail: saleDetail[];
    seller: User[];
    createdAt: Date;
}
