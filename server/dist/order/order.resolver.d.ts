import { Order } from '@prisma/client';
import { CreateOrderInput } from './Dto/create-order.input';
import { OrderService } from './order.service';
export declare class OrderResolver {
    private orderService;
    constructor(orderService: OrderService);
    private pubSub;
    createOrder(createProductDto: CreateOrderInput): Promise<{
        id: number;
        sellerId: number;
        totalQuantity: number;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    orders(): Promise<Order[]>;
    order(id: number): Promise<Order | null>;
    countUpdated(): AsyncIterator<unknown, any, undefined>;
    countOrder(): Promise<number>;
}
