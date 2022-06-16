"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutCoachInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutCoachInput_1 = require("../inputs/UserCreateWithoutCoachInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutCoachInput = class UserCreateOrConnectWithoutCoachInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutCoachInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutCoachInput_1.UserCreateWithoutCoachInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutCoachInput_1.UserCreateWithoutCoachInput)
], UserCreateOrConnectWithoutCoachInput.prototype, "create", void 0);
UserCreateOrConnectWithoutCoachInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutCoachInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutCoachInput);
exports.UserCreateOrConnectWithoutCoachInput = UserCreateOrConnectWithoutCoachInput;
