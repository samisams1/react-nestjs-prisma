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
exports.UpdateProductPriceInput = exports.UpdateProductInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let UpdateProductInput = class UpdateProductInput {
};
exports.UpdateProductInput = UpdateProductInput;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateProductInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], UpdateProductInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], UpdateProductInput.prototype, "categoryId", void 0);
exports.UpdateProductInput = UpdateProductInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateProductInput);
let UpdateProductPriceInput = class UpdateProductPriceInput {
};
exports.UpdateProductPriceInput = UpdateProductPriceInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], UpdateProductPriceInput.prototype, "price", void 0);
exports.UpdateProductPriceInput = UpdateProductPriceInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateProductPriceInput);
//# sourceMappingURL=product-update-input.js.map