"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutCoachInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutCoachInput_1 = require("../inputs/UserCreateOrConnectWithoutCoachInput");
const UserCreateWithoutCoachInput_1 = require("../inputs/UserCreateWithoutCoachInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutCoachInput = class UserCreateNestedOneWithoutCoachInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutCoachInput_1.UserCreateWithoutCoachInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutCoachInput_1.UserCreateWithoutCoachInput)
], UserCreateNestedOneWithoutCoachInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCoachInput_1.UserCreateOrConnectWithoutCoachInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutCoachInput_1.UserCreateOrConnectWithoutCoachInput)
], UserCreateNestedOneWithoutCoachInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutCoachInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutCoachInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutCoachInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutCoachInput);
exports.UserCreateNestedOneWithoutCoachInput = UserCreateNestedOneWithoutCoachInput;
