"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightUpdateWithWhereUniqueWithoutAthleteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WeightUpdateWithoutAthleteInput_1 = require("../inputs/WeightUpdateWithoutAthleteInput");
const WeightWhereUniqueInput_1 = require("../inputs/WeightWhereUniqueInput");
let WeightUpdateWithWhereUniqueWithoutAthleteInput = class WeightUpdateWithWhereUniqueWithoutAthleteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightWhereUniqueInput_1.WeightWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WeightWhereUniqueInput_1.WeightWhereUniqueInput)
], WeightUpdateWithWhereUniqueWithoutAthleteInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightUpdateWithoutAthleteInput_1.WeightUpdateWithoutAthleteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WeightUpdateWithoutAthleteInput_1.WeightUpdateWithoutAthleteInput)
], WeightUpdateWithWhereUniqueWithoutAthleteInput.prototype, "data", void 0);
WeightUpdateWithWhereUniqueWithoutAthleteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WeightUpdateWithWhereUniqueWithoutAthleteInput", {
        isAbstract: true
    })
], WeightUpdateWithWhereUniqueWithoutAthleteInput);
exports.WeightUpdateWithWhereUniqueWithoutAthleteInput = WeightUpdateWithWhereUniqueWithoutAthleteInput;
