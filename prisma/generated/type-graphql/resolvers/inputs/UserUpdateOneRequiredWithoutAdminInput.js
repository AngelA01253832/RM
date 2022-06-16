"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutAdminInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutAdminInput_1 = require("../inputs/UserCreateOrConnectWithoutAdminInput");
const UserCreateWithoutAdminInput_1 = require("../inputs/UserCreateWithoutAdminInput");
const UserUpdateWithoutAdminInput_1 = require("../inputs/UserUpdateWithoutAdminInput");
const UserUpsertWithoutAdminInput_1 = require("../inputs/UserUpsertWithoutAdminInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutAdminInput = class UserUpdateOneRequiredWithoutAdminInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutAdminInput_1.UserCreateWithoutAdminInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutAdminInput_1.UserCreateWithoutAdminInput)
], UserUpdateOneRequiredWithoutAdminInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutAdminInput_1.UserCreateOrConnectWithoutAdminInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutAdminInput_1.UserCreateOrConnectWithoutAdminInput)
], UserUpdateOneRequiredWithoutAdminInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutAdminInput_1.UserUpsertWithoutAdminInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutAdminInput_1.UserUpsertWithoutAdminInput)
], UserUpdateOneRequiredWithoutAdminInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutAdminInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutAdminInput_1.UserUpdateWithoutAdminInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutAdminInput_1.UserUpdateWithoutAdminInput)
], UserUpdateOneRequiredWithoutAdminInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutAdminInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutAdminInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutAdminInput);
exports.UserUpdateOneRequiredWithoutAdminInput = UserUpdateOneRequiredWithoutAdminInput;
