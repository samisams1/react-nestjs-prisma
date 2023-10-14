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
exports.SaleService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let SaleService = class SaleService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async sale(id) {
        const sale = await this.prisma.sale.findUnique({
            where: { id: id },
            include: {
                saleDetail: {
                    include: {
                        product: true,
                    }
                }
            }
        });
        return sale;
    }
    async sales() {
        const sales = await this.prisma.sale.findMany({
            include: {
                seller: true,
                saleDetail: {
                    include: {
                        product: true,
                    },
                }
            }
        });
        return sales;
    }
    async create(createSaleInput) {
        const { sellerId, vat, net, grossAmount, status, saleDetail } = createSaleInput;
        for (const saleItem of saleDetail) {
            const { productId, quantity } = saleItem;
            const product = await this.prisma.shopeProduct.findUnique({ where: { id: productId }, include: { product: true }, });
            if (!product || product.quantity < quantity) {
                const productName = product ? product.product.name : 'Unknown Product';
                throw new Error(`Insufficient stock for product '${productName}'`);
            }
        }
        const sale = await this.prisma.sale.create({
            data: {
                grossAmount,
                vat,
                sellerId,
                net,
                status,
                saleDetail: {
                    create: saleDetail.map((oDetail) => ({
                        amount: oDetail.amount,
                        quantity: oDetail.quantity,
                        productId: oDetail.productId,
                        price: oDetail.price,
                    })),
                },
            },
            include: {
                saleDetail: {
                    include: {
                        product: true
                    }
                },
            },
        });
        for (const saleItem of sale.saleDetail) {
            const { productId, quantity } = saleItem;
            await this.prisma.shopeProduct.update({
                where: { id: productId },
                data: { quantity: { decrement: quantity } }
            });
        }
        return sale;
    }
    async acceptProductFromSale(input) {
        const updatedShopess = [];
        for (const updateInput of input) {
            const { orderId, products } = updateInput;
            for (const productInput of products) {
                const { productId, quantity } = productInput;
                const product = await this.prisma.product.findUnique({
                    where: { id: productId },
                });
                const updatedShope = await this.prisma.shopeProduct.updateMany({
                    where: { productId: productId },
                    data: { quantity: { increment: quantity } },
                });
                const updatedOrder = await this.prisma.order.updateMany({
                    where: { id: orderId },
                    data: { status: "accepet" },
                });
            }
        }
        return updatedShopess;
    }
    async saleDetail() {
        const sales = await this.prisma.saleDetail.findMany({
            include: {
                product: true
            }
        });
        return sales;
    }
    async saleDetailBySellId(id) {
        const sales = await this.prisma.saleDetail.findMany({
            where: { saleId: id },
            include: {
                product: true,
            }
        });
        return sales;
    }
    async sumTheGross() {
        const sumGross = async () => {
            try {
                const orders = await this.prisma.sale.findMany();
                let sum = 0;
                for (const order of orders) {
                    sum += order.grossAmount;
                }
                return sum;
            }
            catch (error) {
                throw new Error('An error occurred while calculating total sales.');
            }
        };
        return sumGross();
    }
    async saleTotalProduct() {
        const calculateTotalSales = async () => {
            try {
                const orders = await this.prisma.shopeProduct.findMany();
                const sum = orders.reduce((acc, order) => acc + order.quantity, 0);
                return sum;
            }
            catch (error) {
                throw new Error('An error occurred while calculating total sales.');
            }
        };
        return calculateTotalSales();
    }
};
exports.SaleService = SaleService;
exports.SaleService = SaleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], SaleService);
//# sourceMappingURL=sale.service.js.map