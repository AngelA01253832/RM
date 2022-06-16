"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightUpsertWithWhereUniqueWithoutAthleteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WeightCreateWithoutAthleteInput_1 = require("../inputs/WeightCreateWithoutAthleteInput");
const WeightUpdateWithoutAthleteInput_1 = require("../inputs/WeightUpdateWithoutAthleteInput");
const WeightWhereUniqueInput_1 = require("../inputs/WeightWhereUniqueInput");
let WeightUpsertWithWhereUniqueWithoutAthleteInput = class WeightUpsertWithWhereUniqueWithoutAthleteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightWhereUniqueInput_1.WeightWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WeightWhereUniqueInput_1.WeightWhereUniqueInput)
], WeightUpsertWithWhereUniqueWithoutAthleteInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightUpdateWithoutAthleteInput_1.WeightUpdateWithoutAthleteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WeightUpdateWithoutAthleteInput_1.WeightUpdateWithoutAthleteInput)
], WeightUpsertWithWhereUniqueWithoutAthleteInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightCreateWithoutAthleteInput_1.WeightCreateWithoutAthleteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WeightCreateWithoutAthleteInput_1.WeightCreateWithoutAthleteInput)
], WeightUpsertWithWhereUniqueWithoutAthleteInput.prototype, "create", void 0);
WeightUpsertWithWhereUniqueWithoutAthleteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WeightUpsertWithWhereUniqueWithoutAthleteInput", {
        isAbstract: true
    })
], WeightUpsertWithWhereUniqueWithoutAthleteInput);
exports.WeightUpsertWithWhereUniqueWithoutAthleteInput = WeightUpsertWithWhereUniqueWithoutAthleteInput;
