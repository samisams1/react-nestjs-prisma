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
exports.shopeProductResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const gql_auth_guard_1 = require("../auth/gql-auth-guard");
const roles_gurd_1 = require("../auth/guards/roles.gurd");
const create_shope_product_input_1 = require("./Dto/create-shope-product-input");
const update_shope_product_input_1 = require("./Dto/update-shope-product-input");
const shopeProduct_entity_1 = require("./shopeProduct.entity");
const shopeProduct_service_1 = require("./shopeProduct.service");
let shopeProductResolver = class shopeProductResolver {
    constructor(saleService) {
        this.saleService = saleService;
    }
    async shopeProduct(id) {
        const purchase = await this.saleService.Sale(id);
        return purchase;
    }
    shopeProducts() {
        return this.saleService.Sales();
    }
    async createShopeProduct(createPurchaseDto) {
        return this.saleService.create(createPurchaseDto);
    }
    async updateShopeProduct(id, data) {
        const purchase = await this.saleService.update(id, data);
        return purchase;
    }
    async deleteShopeProduct(id) {
        const purchase = await this.saleService.delete(id);
        return purchase;
    }
};
exports.shopeProductResolver = shopeProductResolver;
__decorate([
    (0, graphql_1.Query)(() => String),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], shopeProductResolver.prototype, "shopeProduct", null);
__decorate([
    (0, graphql_1.Query)(() => [shopeProduct_entity_1.shopeProduct]),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, roles_gurd_1.RolesGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], shopeProductResolver.prototype, "shopeProducts", null);
__decorate([
    (0, graphql_1.Mutation)(() => shopeProduct_entity_1.shopeProduct),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_shope_product_input_1.CreateShopeProductInput]),
    __metadata("design:returntype", Promise)
], shopeProductResolver.prototype, "createShopeProduct", null);
__decorate([
    (0, graphql_1.Mutation)(() => shopeProduct_entity_1.shopeProduct),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_shope_product_input_1.UpdateShopeProductInput]),
    __metadata("design:returntype", Promise)
], shopeProductResolver.prototype, "updateShopeProduct", null);
__decorate([
    (0, graphql_1.Mutation)(() => shopeProduct_entity_1.shopeProduct),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], shopeProductResolver.prototype, "deleteShopeProduct", null);
exports.shopeProductResolver = shopeProductResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [shopeProduct_service_1.ShopeProductService])
], shopeProductResolver);
//# sourceMappingURL=shopeProduct.resolver.js.map