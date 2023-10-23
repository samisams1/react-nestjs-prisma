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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
let ProductService = class ProductService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async product(id) {
        return this.prisma.product.findUnique({
            where: { id },
            include: {
                category: true
            }
        });
    }
    async products() {
        return this.prisma.product.findMany({
            include: {
                category: true
            }
        });
    }
    async createProduct(data) {
        const { name, price, categoryId } = data;
        try {
            const product = await this.prisma.product.create({
                data: {
                    name,
                    price,
                    categoryId,
                    description: "yto",
                    code: "1452ddd",
                    image: 'product'
                },
            });
            const shopeProduct = await this.prisma.shopeProduct.create({
                data: {
                    quantity: 0,
                    productId: product.id,
                    userId: 1
                }
            });
            const store = await this.prisma.store.create({
                data: {
                    quantity: 0,
                    productId: product.id,
                    userId: 1
                }
            });
            return product;
        }
        catch (error) {
            console.error('Error creating product:', error);
            return null;
        }
    }
    async update(id, updateProductDto) {
        const { name, price, categoryId } = updateProductDto;
        return this.prisma.product.update({
            where: {
                id,
            },
            data: {
                name,
                price,
                categoryId,
            },
        });
    }
    async countProducts() {
        const countProducts = async () => {
            try {
                const count = await this.prisma.product.count();
                return count;
            }
            catch (error) {
                throw new Error('An error occurred while counting products.');
            }
        };
        return countProducts();
    }
    async updatePrice(id, updateProductDto) {
        const { price } = updateProductDto;
        return this.prisma.product.update({
            where: { id },
            data: { price: price },
        });
    }
};
exports.ProductService = ProductService;
__decorate([
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductService.prototype, "product", null);
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ProductService);
//# sourceMappingURL=product.service.js.map