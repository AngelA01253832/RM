"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutAthleteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutAthleteInput_1 = require("../inputs/UserCreateOrConnectWithoutAthleteInput");
const UserCreateWithoutAthleteInput_1 = require("../inputs/UserCreateWithoutAthleteInput");
const UserUpdateWithoutAthleteInput_1 = require("../inputs/UserUpdateWithoutAthleteInput");
const UserUpsertWithoutAthleteInput_1 = require("../inputs/UserUpsertWithoutAthleteInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutAthleteInput = class UserUpdateOneRequiredWithoutAthleteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutAthleteInput_1.UserCreateWithoutAthleteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutAthleteInput_1.UserCreateWithoutAthleteInput)
], UserUpdateOneRequiredWithoutAthleteInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutAthleteInput_1.UserCreateOrConnectWithoutAthleteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutAthleteInput_1.UserCreateOrConnectWithoutAthleteInput)
], UserUpdateOneRequiredWithoutAthleteInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutAthleteInput_1.UserUpsertWithoutAthleteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutAthleteInput_1.UserUpsertWithoutAthleteInput)
], UserUpdateOneRequiredWithoutAthleteInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutAthleteInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutAthleteInput_1.UserUpdateWithoutAthleteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutAthleteInput_1.UserUpdateWithoutAthleteInput)
], UserUpdateOneRequiredWithoutAthleteInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutAthleteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutAthleteInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutAthleteInput);
exports.UserUpdateOneRequiredWithoutAthleteInput = UserUpdateOneRequiredWithoutAthleteInput;
