"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutToDoCreateManyCoachInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkoutToDoCreateManyCoachInput_1 = require("../inputs/WorkoutToDoCreateManyCoachInput");
let WorkoutToDoCreateManyCoachInputEnvelope = class WorkoutToDoCreateManyCoachInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkoutToDoCreateManyCoachInput_1.WorkoutToDoCreateManyCoachInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], WorkoutToDoCreateManyCoachInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], WorkoutToDoCreateManyCoachInputEnvelope.prototype, "skipDuplicates", void 0);
WorkoutToDoCreateManyCoachInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkoutToDoCreateManyCoachInputEnvelope", {
        isAbstract: true
    })
], WorkoutToDoCreateManyCoachInputEnvelope);
exports.WorkoutToDoCreateManyCoachInputEnvelope = WorkoutToDoCreateManyCoachInputEnvelope;
