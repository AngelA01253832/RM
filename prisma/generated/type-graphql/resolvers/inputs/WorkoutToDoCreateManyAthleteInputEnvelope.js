"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutToDoCreateManyAthleteInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkoutToDoCreateManyAthleteInput_1 = require("../inputs/WorkoutToDoCreateManyAthleteInput");
let WorkoutToDoCreateManyAthleteInputEnvelope = class WorkoutToDoCreateManyAthleteInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkoutToDoCreateManyAthleteInput_1.WorkoutToDoCreateManyAthleteInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], WorkoutToDoCreateManyAthleteInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], WorkoutToDoCreateManyAthleteInputEnvelope.prototype, "skipDuplicates", void 0);
WorkoutToDoCreateManyAthleteInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkoutToDoCreateManyAthleteInputEnvelope", {
        isAbstract: true
    })
], WorkoutToDoCreateManyAthleteInputEnvelope);
exports.WorkoutToDoCreateManyAthleteInputEnvelope = WorkoutToDoCreateManyAthleteInputEnvelope;
