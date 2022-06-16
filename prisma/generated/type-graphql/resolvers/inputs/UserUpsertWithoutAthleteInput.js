"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutAthleteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutAthleteInput_1 = require("../inputs/UserCreateWithoutAthleteInput");
const UserUpdateWithoutAthleteInput_1 = require("../inputs/UserUpdateWithoutAthleteInput");
let UserUpsertWithoutAthleteInput = class UserUpsertWithoutAthleteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutAthleteInput_1.UserUpdateWithoutAthleteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutAthleteInput_1.UserUpdateWithoutAthleteInput)
], UserUpsertWithoutAthleteInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutAthleteInput_1.UserCreateWithoutAthleteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutAthleteInput_1.UserCreateWithoutAthleteInput)
], UserUpsertWithoutAthleteInput.prototype, "create", void 0);
UserUpsertWithoutAthleteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutAthleteInput", {
        isAbstract: true
    })
], UserUpsertWithoutAthleteInput);
exports.UserUpsertWithoutAthleteInput = UserUpsertWithoutAthleteInput;
