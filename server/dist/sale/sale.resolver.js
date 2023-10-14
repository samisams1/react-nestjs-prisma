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
exports.SaleResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const gql_auth_guard_1 = require("../auth/gql-auth-guard");
const roles_gurd_1 = require("../auth/guards/roles.gurd");
const sale_detail_entity_1 = require("../sale-detail/sale-detail.entity");
const update_store_input_1 = require("../store/Dto/update-store-input");
const store_entity_1 = require("../store/store.entity");
const sale_create_input_1 = require("./Dto/sale-create-input");
const sale_entity_1 = require("./sale.entity");
const sale_service_1 = require("./sale.service");
let SaleResolver = class SaleResolver {
    constructor(saleService) {
        this.saleService = saleService;
    }
    async createSale(CreateSaleInput) {
        return this.saleService.create(CreateSaleInput);
    }
    async sales() {
        return this.saleService.sales();
    }
    async sale(id) {
        return this.saleService.sale(id);
    }
    async saleDetails() {
        return this.saleService.saleDetail();
    }
    async saleDetailById(id) {
        return this.saleService.saleDetailBySellId(id);
    }
    async totalSale() {
        return this.saleService.sumTheGross();
    }
    async saleTotalProduct() {
        return this.saleService.saleTotalProduct();
    }
    async acceptStoreProduct(input) {
        return await this.saleService.acceptProductFromSale(input);
    }
};
exports.SaleResolver = SaleResolver;
__decorate([
    (0, graphql_1.Mutation)(() => sale_entity_1.sale),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, roles_gurd_1.RolesGuard),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sale_create_input_1.CreateSaleInput]),
    __metadata("design:returntype", Promise)
], SaleResolver.prototype, "createSale", null);
__decorate([
    (0, graphql_1.Query)(() => [sale_entity_1.sale]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SaleResolver.prototype, "sales", null);
__decorate([
    (0, graphql_1.Query)(() => sale_entity_1.sale),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SaleResolver.prototype, "sale", null);
__decorate([
    (0, graphql_1.Query)(() => [sale_detail_entity_1.saleDetail]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SaleResolver.prototype, "saleDetails", null);
__decorate([
    (0, graphql_1.Query)(() => [sale_detail_entity_1.saleDetail]),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SaleResolver.prototype, "saleDetailById", null);
__decorate([
    (0, graphql_1.Query)(() => Number),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SaleResolver.prototype, "totalSale", null);
__decorate([
    (0, graphql_1.Query)(() => Number),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SaleResolver.prototype, "saleTotalProduct", null);
__decorate([
    (0, graphql_1.Mutation)(() => [store_entity_1.store]),
    __param(0, (0, graphql_1.Args)('input', { type: () => [update_store_input_1.UpdateStoreInput] })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], SaleResolver.prototype, "acceptStoreProduct", null);
exports.SaleResolver = SaleResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [sale_service_1.SaleService])
], SaleResolver);
//# sourceMappingURL=sale.resolver.js.map