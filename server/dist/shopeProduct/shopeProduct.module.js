"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopeProductModule = void 0;
const common_1 = require("@nestjs/common");
const shopeProduct_resolver_1 = require("./shopeProduct.resolver");
const shopeProduct_service_1 = require("./shopeProduct.service");
let ShopeProductModule = class ShopeProductModule {
};
exports.ShopeProductModule = ShopeProductModule;
exports.ShopeProductModule = ShopeProductModule = __decorate([
    (0, common_1.Module)({
        providers: [shopeProduct_service_1.ShopeProductService, shopeProduct_resolver_1.shopeProductResolver]
    })
], ShopeProductModule);
//# sourceMappingURL=shopeProduct.module.js.map