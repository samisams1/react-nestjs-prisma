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
exports.CreateSaleInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const sale_detail_create_input_1 = require("../../sale-detail/Dto/sale-detail-create-input");
let CreateSaleInput = class CreateSaleInput {
};
exports.CreateSaleInput = CreateSaleInput;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CreateSaleInput.prototype, "vat", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CreateSaleInput.prototype, "net", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CreateSaleInput.prototype, "grossAmount", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CreateSaleInput.prototype, "sellerId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateSaleInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => [sale_detail_create_input_1.CreateSaleDetailInput]),
    __metadata("design:type", Array)
], CreateSaleInput.prototype, "saleDetail", void 0);
exports.CreateSaleInput = CreateSaleInput = __decorate([
    (0, graphql_1.InputType)()
], CreateSaleInput);
//# sourceMappingURL=sale-create-input.js.map