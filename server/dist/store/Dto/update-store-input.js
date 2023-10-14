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
exports.UpdateQuantityInput = exports.UpdateStoreInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let UpdateStoreInput = class UpdateStoreInput {
};
exports.UpdateStoreInput = UpdateStoreInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], UpdateStoreInput.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductInput]),
    __metadata("design:type", Array)
], UpdateStoreInput.prototype, "products", void 0);
exports.UpdateStoreInput = UpdateStoreInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateStoreInput);
let UpdateQuantityInput = class UpdateQuantityInput {
};
exports.UpdateQuantityInput = UpdateQuantityInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], UpdateQuantityInput.prototype, "quantity", void 0);
exports.UpdateQuantityInput = UpdateQuantityInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateQuantityInput);
let ProductInput = class ProductInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], ProductInput.prototype, "productId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], ProductInput.prototype, "quantity", void 0);
ProductInput = __decorate([
    (0, graphql_1.InputType)()
], ProductInput);
//# sourceMappingURL=update-store-input.js.map