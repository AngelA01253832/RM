"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutCoachInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutCoachInput_1 = require("../inputs/UserCreateOrConnectWithoutCoachInput");
const UserCreateWithoutCoachInput_1 = require("../inputs/UserCreateWithoutCoachInput");
const UserUpdateWithoutCoachInput_1 = require("../inputs/UserUpdateWithoutCoachInput");
const UserUpsertWithoutCoachInput_1 = require("../inputs/UserUpsertWithoutCoachInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutCoachInput = class UserUpdateOneRequiredWithoutCoachInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutCoachInput_1.UserCreateWithoutCoachInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutCoachInput_1.UserCreateWithoutCoachInput)
], UserUpdateOneRequiredWithoutCoachInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCoachInput_1.UserCreateOrConnectWithoutCoachInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutCoachInput_1.UserCreateOrConnectWithoutCoachInput)
], UserUpdateOneRequiredWithoutCoachInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutCoachInput_1.UserUpsertWithoutCoachInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutCoachInput_1.UserUpsertWithoutCoachInput)
], UserUpdateOneRequiredWithoutCoachInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutCoachInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutCoachInput_1.UserUpdateWithoutCoachInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutCoachInput_1.UserUpdateWithoutCoachInput)
], UserUpdateOneRequiredWithoutCoachInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutCoachInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutCoachInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutCoachInput);
exports.UserUpdateOneRequiredWithoutCoachInput = UserUpdateOneRequiredWithoutCoachInput;
