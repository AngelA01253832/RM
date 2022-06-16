"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightUpdateManyWithWhereWithoutAthleteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WeightScalarWhereInput_1 = require("../inputs/WeightScalarWhereInput");
const WeightUpdateManyMutationInput_1 = require("../inputs/WeightUpdateManyMutationInput");
let WeightUpdateManyWithWhereWithoutAthleteInput = class WeightUpdateManyWithWhereWithoutAthleteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightScalarWhereInput_1.WeightScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WeightScalarWhereInput_1.WeightScalarWhereInput)
], WeightUpdateManyWithWhereWithoutAthleteInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightUpdateManyMutationInput_1.WeightUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WeightUpdateManyMutationInput_1.WeightUpdateManyMutationInput)
], WeightUpdateManyWithWhereWithoutAthleteInput.prototype, "data", void 0);
WeightUpdateManyWithWhereWithoutAthleteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WeightUpdateManyWithWhereWithoutAthleteInput", {
        isAbstract: true
    })
], WeightUpdateManyWithWhereWithoutAthleteInput);
exports.WeightUpdateManyWithWhereWithoutAthleteInput = WeightUpdateManyWithWhereWithoutAthleteInput;
