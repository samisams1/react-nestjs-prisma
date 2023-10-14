"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const graphql_subscriptions_1 = require("graphql-subscriptions");
let OrderService = class OrderService {
    constructor() {
        this.pubSub = new graphql_subscriptions_1.PubSub();
        this.prisma = new client_1.PrismaClient();
    }
    async order(id) {
        const order = await this.prisma.order.findUnique({
            where: { id: id },
            include: {
                orderDetails: {
                    include: {
                        product: true,
                    }
                }
            }
        });
        return order;
    }
    async getOrderDetails() {
        const orders = await this.prisma.order.findMany({
            include: {
                seller: true,
                orderDetails: {
                    include: {
                        product: true,
                    }
                },
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        return orders;
    }
    async createOrder(createSaleInput) {
        const { totalQuantity, sellerId, orderDetails, status } = createSaleInput;
        const insufficientProducts = [];
        for (const orderDetail of orderDetails) {
            const { productId, quantity } = orderDetail;
            const store = await this.prisma.store.findUnique({
                where: { id: productId },
                include: { product: true },
            });
            if (!store || store.quantity < quantity) {
                const productName = store && store.product ? store.product.name : `Product with ID: ${productId}`;
                insufficientProducts.push(`${productName} (Available quantity: ${store?.quantity}, Requested quantity: ${quantity})`);
            }
        }
        if (insufficientProducts.length > 0) {
            const errorMessage = `Insufficient quantity in store for the following products:\n${insufficientProducts.join("\n")}`;
            throw new Error(errorMessage);
        }
        return this.prisma.order.create({
            data: {
                totalQuantity,
                status,
                sellerId,
                orderDetails: {
                    create: orderDetails.map((orderDetail) => ({
                        quantity: orderDetail.quantity,
                        productId: orderDetail.productId,
                    })),
                },
            },
            include: {
                orderDetails: {
                    include: {
                        product: true,
                    },
                },
            },
        });
    }
    async update(createSaleInput) {
        const { totalQuantity, sellerId, orderDetails, status } = createSaleInput;
        return this.prisma.order.create({
            data: {
                totalQuantity,
                status: "mimi",
                sellerId,
                orderDetails: {
                    create: orderDetails.map((orderDetail) => ({
                        quantity: orderDetail.quantity,
                        productId: orderDetail.productId,
                    })),
                },
            },
            include: {
                orderDetails: {
                    include: {
                        product: true
                    }
                },
            },
        });
    }
    async incrementCount() {
        const count = await this.prisma.order.count();
        this.pubSub.publish('COUNT_UPDATED', { countUpdated: count });
    }
    async countOrders() {
        const countOrders = async () => {
            try {
                const count = await this.prisma.order.count({ where: { status: "pending" } });
                return count;
            }
            catch (error) {
                throw new Error('An error occurred while counting products.');
            }
        };
        return countOrders();
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], OrderService);
//# sourceMappingURL=order.service.js.map