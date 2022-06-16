"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutAthleteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutAthleteInput_1 = require("../inputs/UserCreateOrConnectWithoutAthleteInput");
const UserCreateWithoutAthleteInput_1 = require("../inputs/UserCreateWithoutAthleteInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutAthleteInput = class UserCreateNestedOneWithoutAthleteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutAthleteInput_1.UserCreateWithoutAthleteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutAthleteInput_1.UserCreateWithoutAthleteInput)
], UserCreateNestedOneWithoutAthleteInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutAthleteInput_1.UserCreateOrConnectWithoutAthleteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutAthleteInput_1.UserCreateOrConnectWithoutAthleteInput)
], UserCreateNestedOneWithoutAthleteInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutAthleteInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutAthleteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutAthleteInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutAthleteInput);
exports.UserCreateNestedOneWithoutAthleteInput = UserCreateNestedOneWithoutAthleteInput;
