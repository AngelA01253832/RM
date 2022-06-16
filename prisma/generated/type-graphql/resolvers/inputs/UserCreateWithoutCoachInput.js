"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutCoachInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountCreateNestedManyWithoutUserInput_1 = require("../inputs/AccountCreateNestedManyWithoutUserInput");
const AdminCreateNestedOneWithoutUserInput_1 = require("../inputs/AdminCreateNestedOneWithoutUserInput");
const AthleteCreateNestedOneWithoutUserInput_1 = require("../inputs/AthleteCreateNestedOneWithoutUserInput");
const SessionCreateNestedManyWithoutUserInput_1 = require("../inputs/SessionCreateNestedManyWithoutUserInput");
let UserCreateWithoutCoachInput = class UserCreateWithoutCoachInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutCoachInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutCoachInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutCoachInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutCoachInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutCoachInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput)
], UserCreateWithoutCoachInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput)
], UserCreateWithoutCoachInput.prototype, "sessions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteCreateNestedOneWithoutUserInput_1.AthleteCreateNestedOneWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteCreateNestedOneWithoutUserInput_1.AthleteCreateNestedOneWithoutUserInput)
], UserCreateWithoutCoachInput.prototype, "Athlete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminCreateNestedOneWithoutUserInput_1.AdminCreateNestedOneWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdminCreateNestedOneWithoutUserInput_1.AdminCreateNestedOneWithoutUserInput)
], UserCreateWithoutCoachInput.prototype, "Admin", void 0);
UserCreateWithoutCoachInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutCoachInput", {
        isAbstract: true
    })
], UserCreateWithoutCoachInput);
exports.UserCreateWithoutCoachInput = UserCreateWithoutCoachInput;
