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
exports.ShopeProductService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let ShopeProductService = class ShopeProductService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async Sale(id) {
        return this.prisma.shopeProduct.findUnique({ where: { id } });
    }
    async Sales() {
        return this.prisma.shopeProduct.findMany({
            include: {
                product: true,
                user: true
            }
        });
    }
    async create(createSaleInput) {
        const { quantity, storeId, productId, userId } = createSaleInput;
        return this.prisma.shopeProduct.create({
            data: {
                quantity,
                userId,
                productId
            }
        });
    }
    async update(id, data) {
        return this.prisma.shopeProduct.update({ where: { id }, data });
    }
    async delete(id) {
        return this.prisma.shopeProduct.delete({ where: { id } });
    }
};
exports.ShopeProductService = ShopeProductService;
exports.ShopeProductService = ShopeProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ShopeProductService);
//# sourceMappingURL=shopeProduct.service.js.map