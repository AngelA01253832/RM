"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutAthleteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutAthleteInput_1 = require("../inputs/UserCreateWithoutAthleteInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutAthleteInput = class UserCreateOrConnectWithoutAthleteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutAthleteInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutAthleteInput_1.UserCreateWithoutAthleteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutAthleteInput_1.UserCreateWithoutAthleteInput)
], UserCreateOrConnectWithoutAthleteInput.prototype, "create", void 0);
UserCreateOrConnectWithoutAthleteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutAthleteInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutAthleteInput);
exports.UserCreateOrConnectWithoutAthleteInput = UserCreateOrConnectWithoutAthleteInput;
