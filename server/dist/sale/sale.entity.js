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
exports.sale = void 0;
const graphql_1 = require("@nestjs/graphql");
const sale_detail_entity_1 = require("../sale-detail/sale-detail.entity");
const user_entity_1 = require("../users/entities/user.entity");
let sale = class sale {
};
exports.sale = sale;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], sale.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], sale.prototype, "sellerId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], sale.prototype, "vat", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], sale.prototype, "net", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], sale.prototype, "grossAmount", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], sale.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => [sale_detail_entity_1.saleDetail]),
    __metadata("design:type", Array)
], sale.prototype, "saleDetail", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_entity_1.User]),
    __metadata("design:type", Array)
], sale.prototype, "seller", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], sale.prototype, "createdAt", void 0);
exports.sale = sale = __decorate([
    (0, graphql_1.ObjectType)()
], sale);
//# sourceMappingURL=sale.entity.js.map