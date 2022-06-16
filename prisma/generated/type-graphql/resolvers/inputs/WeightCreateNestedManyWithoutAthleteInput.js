"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightCreateNestedManyWithoutAthleteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WeightCreateManyAthleteInputEnvelope_1 = require("../inputs/WeightCreateManyAthleteInputEnvelope");
const WeightCreateOrConnectWithoutAthleteInput_1 = require("../inputs/WeightCreateOrConnectWithoutAthleteInput");
const WeightCreateWithoutAthleteInput_1 = require("../inputs/WeightCreateWithoutAthleteInput");
const WeightWhereUniqueInput_1 = require("../inputs/WeightWhereUniqueInput");
let WeightCreateNestedManyWithoutAthleteInput = class WeightCreateNestedManyWithoutAthleteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WeightCreateWithoutAthleteInput_1.WeightCreateWithoutAthleteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WeightCreateNestedManyWithoutAthleteInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WeightCreateOrConnectWithoutAthleteInput_1.WeightCreateOrConnectWithoutAthleteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WeightCreateNestedManyWithoutAthleteInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightCreateManyAthleteInputEnvelope_1.WeightCreateManyAthleteInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WeightCreateManyAthleteInputEnvelope_1.WeightCreateManyAthleteInputEnvelope)
], WeightCreateNestedManyWithoutAthleteInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WeightWhereUniqueInput_1.WeightWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WeightCreateNestedManyWithoutAthleteInput.prototype, "connect", void 0);
WeightCreateNestedManyWithoutAthleteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WeightCreateNestedManyWithoutAthleteInput", {
        isAbstract: true
    })
], WeightCreateNestedManyWithoutAthleteInput);
exports.WeightCreateNestedManyWithoutAthleteInput = WeightCreateNestedManyWithoutAthleteInput;
