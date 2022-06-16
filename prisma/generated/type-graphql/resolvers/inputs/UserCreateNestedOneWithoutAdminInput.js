"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutAdminInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutAdminInput_1 = require("../inputs/UserCreateOrConnectWithoutAdminInput");
const UserCreateWithoutAdminInput_1 = require("../inputs/UserCreateWithoutAdminInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutAdminInput = class UserCreateNestedOneWithoutAdminInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutAdminInput_1.UserCreateWithoutAdminInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutAdminInput_1.UserCreateWithoutAdminInput)
], UserCreateNestedOneWithoutAdminInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutAdminInput_1.UserCreateOrConnectWithoutAdminInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutAdminInput_1.UserCreateOrConnectWithoutAdminInput)
], UserCreateNestedOneWithoutAdminInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutAdminInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutAdminInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutAdminInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutAdminInput);
exports.UserCreateNestedOneWithoutAdminInput = UserCreateNestedOneWithoutAdminInput;
