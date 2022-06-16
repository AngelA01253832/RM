"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutAdminInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutAdminInput_1 = require("../inputs/UserCreateWithoutAdminInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutAdminInput = class UserCreateOrConnectWithoutAdminInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutAdminInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutAdminInput_1.UserCreateWithoutAdminInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutAdminInput_1.UserCreateWithoutAdminInput)
], UserCreateOrConnectWithoutAdminInput.prototype, "create", void 0);
UserCreateOrConnectWithoutAdminInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutAdminInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutAdminInput);
exports.UserCreateOrConnectWithoutAdminInput = UserCreateOrConnectWithoutAdminInput;
