"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightCreateManyAthleteInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WeightCreateManyAthleteInput_1 = require("../inputs/WeightCreateManyAthleteInput");
let WeightCreateManyAthleteInputEnvelope = class WeightCreateManyAthleteInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WeightCreateManyAthleteInput_1.WeightCreateManyAthleteInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], WeightCreateManyAthleteInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], WeightCreateManyAthleteInputEnvelope.prototype, "skipDuplicates", void 0);
WeightCreateManyAthleteInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("WeightCreateManyAthleteInputEnvelope", {
        isAbstract: true
    })
], WeightCreateManyAthleteInputEnvelope);
exports.WeightCreateManyAthleteInputEnvelope = WeightCreateManyAthleteInputEnvelope;
