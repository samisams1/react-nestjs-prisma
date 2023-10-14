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
exports.EnumRole = exports.ChangePasswordInput = exports.CreateUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let CreateUserInput = class CreateUserInput {
};
exports.CreateUserInput = CreateUserInput;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateUserInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateUserInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateUserInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateUserInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateUserInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateUserInput.prototype, "password", void 0);
exports.CreateUserInput = CreateUserInput = __decorate([
    (0, graphql_1.InputType)()
], CreateUserInput);
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
(0, graphql_1.registerEnumType)(EnumRole, {
    name: 'EnumRole',
});
//# sourceMappingURL=create-user.input.js.map