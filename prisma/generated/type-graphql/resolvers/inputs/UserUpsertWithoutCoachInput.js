"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutCoachInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutCoachInput_1 = require("../inputs/UserCreateWithoutCoachInput");
const UserUpdateWithoutCoachInput_1 = require("../inputs/UserUpdateWithoutCoachInput");
let UserUpsertWithoutCoachInput = class UserUpsertWithoutCoachInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutCoachInput_1.UserUpdateWithoutCoachInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutCoachInput_1.UserUpdateWithoutCoachInput)
], UserUpsertWithoutCoachInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutCoachInput_1.UserCreateWithoutCoachInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutCoachInput_1.UserCreateWithoutCoachInput)
], UserUpsertWithoutCoachInput.prototype, "create", void 0);
UserUpsertWithoutCoachInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutCoachInput", {
        isAbstract: true
    })
], UserUpsertWithoutCoachInput);
exports.UserUpsertWithoutCoachInput = UserUpsertWithoutCoachInput;
