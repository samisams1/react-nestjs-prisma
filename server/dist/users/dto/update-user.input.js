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
exports.StatusEnum = exports.EnumRole = exports.ChangePasswordInput = exports.UpdateUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let UpdateUserInput = class UpdateUserInput {
};
exports.UpdateUserInput = UpdateUserInput;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "password", void 0);
exports.UpdateUserInput = UpdateUserInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateUserInput);
let ChangePasswordInput = class ChangePasswordInput {
};
exports.ChangePasswordInput = ChangePasswordInput;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ChangePasswordInput.prototype, "currentPassword", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ChangePasswordInput.prototype, "newPassword", void 0);
exports.ChangePasswordInput = ChangePasswordInput = __decorate([
    (0, graphql_1.InputType)()
], ChangePasswordInput);
var EnumRole;
(function (EnumRole) {
    EnumRole["ADMIN"] = "ADMIN";
    EnumRole["USER"] = "STORE";
    EnumRole["GUEST"] = "SELLER";
})(EnumRole || (exports.EnumRole = EnumRole = {}));
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["active"] = "active";
    StatusEnum["disabled"] = "disabled";
    StatusEnum["pending"] = "pending";
})(StatusEnum || (exports.StatusEnum = StatusEnum = {}));
(0, graphql_1.registerEnumType)(EnumRole, {
    name: 'EnumRole',
});
(0, graphql_1.registerEnumType)(StatusEnum, {
    name: 'StatusEnum',
});
//# sourceMappingURL=update-user.input.js.map