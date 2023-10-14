import { OrderDetail } from 'src/order-detail/orderDetail.entity';
import { User } from 'src/users/entities/user.entity';
export declare class order {
    id: number;
    sellerId: number;
    totalQuantity: number;
    status: string;
    orderDetails: OrderDetail[];
    seller: User[];
    createdAt: Date;
}
