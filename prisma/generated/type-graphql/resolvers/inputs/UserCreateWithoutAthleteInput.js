"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutAthleteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountCreateNestedManyWithoutUserInput_1 = require("../inputs/AccountCreateNestedManyWithoutUserInput");
const AdminCreateNestedOneWithoutUserInput_1 = require("../inputs/AdminCreateNestedOneWithoutUserInput");
const CoachCreateNestedOneWithoutUserInput_1 = require("../inputs/CoachCreateNestedOneWithoutUserInput");
const SessionCreateNestedManyWithoutUserInput_1 = require("../inputs/SessionCreateNestedManyWithoutUserInput");
let UserCreateWithoutAthleteInput = class UserCreateWithoutAthleteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutAthleteInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutAthleteInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutAthleteInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutAthleteInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutAthleteInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput)
], UserCreateWithoutAthleteInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput)
], UserCreateWithoutAthleteInput.prototype, "sessions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachCreateNestedOneWithoutUserInput_1.CoachCreateNestedOneWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachCreateNestedOneWithoutUserInput_1.CoachCreateNestedOneWithoutUserInput)
], UserCreateWithoutAthleteInput.prototype, "Coach", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminCreateNestedOneWithoutUserInput_1.AdminCreateNestedOneWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdminCreateNestedOneWithoutUserInput_1.AdminCreateNestedOneWithoutUserInput)
], UserCreateWithoutAthleteInput.prototype, "Admin", void 0);
UserCreateWithoutAthleteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutAthleteInput", {
        isAbstract: true
    })
], UserCreateWithoutAthleteInput);
exports.UserCreateWithoutAthleteInput = UserCreateWithoutAthleteInput;
