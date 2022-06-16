"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutAdminInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutAdminInput_1 = require("../inputs/UserCreateWithoutAdminInput");
const UserUpdateWithoutAdminInput_1 = require("../inputs/UserUpdateWithoutAdminInput");
let UserUpsertWithoutAdminInput = class UserUpsertWithoutAdminInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutAdminInput_1.UserUpdateWithoutAdminInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutAdminInput_1.UserUpdateWithoutAdminInput)
], UserUpsertWithoutAdminInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutAdminInput_1.UserCreateWithoutAdminInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutAdminInput_1.UserCreateWithoutAdminInput)
], UserUpsertWithoutAdminInput.prototype, "create", void 0);
UserUpsertWithoutAdminInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutAdminInput", {
        isAbstract: true
    })
], UserUpsertWithoutAdminInput);
exports.UserUpsertWithoutAdminInput = UserUpsertWithoutAdminInput;
