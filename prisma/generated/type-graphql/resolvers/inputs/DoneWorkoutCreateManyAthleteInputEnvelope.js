"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoneWorkoutCreateManyAthleteInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DoneWorkoutCreateManyAthleteInput_1 = require("../inputs/DoneWorkoutCreateManyAthleteInput");
let DoneWorkoutCreateManyAthleteInputEnvelope = class DoneWorkoutCreateManyAthleteInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DoneWorkoutCreateManyAthleteInput_1.DoneWorkoutCreateManyAthleteInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], DoneWorkoutCreateManyAthleteInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], DoneWorkoutCreateManyAthleteInputEnvelope.prototype, "skipDuplicates", void 0);
DoneWorkoutCreateManyAthleteInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("DoneWorkoutCreateManyAthleteInputEnvelope", {
        isAbstract: true
    })
], DoneWorkoutCreateManyAthleteInputEnvelope);
exports.DoneWorkoutCreateManyAthleteInputEnvelope = DoneWorkoutCreateManyAthleteInputEnvelope;
