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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreService = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
let StoreService = class StoreService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async store(id) {
        return this.prisma.store.findUnique({ where: { id } });
    }
    async stores() {
        return this.prisma.store.findMany({
            include: {
                product: true
            }
        });
    }
    async update(input) {
        const updatedStores = [];
        const insufficientProducts = [];
        for (const updateInput of input) {
            const { orderId, products } = updateInput;
            for (const productInput of products) {
                const { productId, quantity } = productInput;
                const product = await this.prisma.product.findUnique({
                    where: { id: productId },
                });
                const store = await this.prisma.store.findUnique({
                    where: { id: productId },
                });
                if (!store || store.quantity < quantity) {
                    insufficientProducts.push(`${product?.name} (Available quantity: ${store?.quantity}, Requested quantity: ${quantity})`);
                }
                else {
                    const updatedStore = await this.prisma.store.updateMany({
                        where: { productId: productId },
                        data: { quantity: { decrement: quantity } },
                    });
                    const updatedOrder = await this.prisma.order.updateMany({
                        where: { id: orderId },
                        data: { status: "approved" },
                    });
                    const affectedStores = await this.prisma.store.findMany({
                        where: { productId: productId },
                        include: {
                            product: true,
                        },
                    });
                }
            }
        }
        if (insufficientProducts.length > 0) {
            const errorMessage = `Insufficient quantity in store for the following products:\n${insufficientProducts.join("\n")}`;
            throw new Error(errorMessage);
        }
        return updatedStores;
    }
    async updateQuantity(id, updateProductDto) {
        const { quantity } = updateProductDto;
        return this.prisma.store.update({
            where: { id },
            data: { quantity: { increment: quantity } },
        });
    }
    async storeTotalProduct() {
        const calculateTotalStores = async () => {
            try {
                const stores = await this.prisma.store.findMany();
                const sum = stores.reduce((acc, order) => acc + order.quantity, 0);
                return sum;
            }
            catch (error) {
                throw new Error('An error occurred while calculating total sales.');
            }
        };
        return calculateTotalStores();
    }
};
exports.StoreService = StoreService;
__decorate([
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StoreService.prototype, "store", null);
exports.StoreService = StoreService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], StoreService);
//# sourceMappingURL=store.service.js.map