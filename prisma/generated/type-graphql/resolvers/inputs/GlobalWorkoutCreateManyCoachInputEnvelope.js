"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalWorkoutCreateManyCoachInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlobalWorkoutCreateManyCoachInput_1 = require("../inputs/GlobalWorkoutCreateManyCoachInput");
let GlobalWorkoutCreateManyCoachInputEnvelope = class GlobalWorkoutCreateManyCoachInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GlobalWorkoutCreateManyCoachInput_1.GlobalWorkoutCreateManyCoachInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GlobalWorkoutCreateManyCoachInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], GlobalWorkoutCreateManyCoachInputEnvelope.prototype, "skipDuplicates", void 0);
GlobalWorkoutCreateManyCoachInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("GlobalWorkoutCreateManyCoachInputEnvelope", {
        isAbstract: true
    })
], GlobalWorkoutCreateManyCoachInputEnvelope);
exports.GlobalWorkoutCreateManyCoachInputEnvelope = GlobalWorkoutCreateManyCoachInputEnvelope;
