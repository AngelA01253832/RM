"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutToDoUpdateManyWithWhereWithoutAthleteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkoutToDoScalarWhereInput_1 = require("../inputs/WorkoutToDoScalarWhereInput");
const WorkoutToDoUpdateManyMutationInput_1 = require("../inputs/WorkoutToDoUpdateManyMutationInput");
let WorkoutToDoUpdateManyWithWhereWithoutAthleteInput = class WorkoutToDoUpdateManyWithWhereWithoutAthleteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoScalarWhereInput_1.WorkoutToDoScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkoutToDoScalarWhereInput_1.WorkoutToDoScalarWhereInput)
], WorkoutToDoUpdateManyWithWhereWithoutAthleteInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoUpdateManyMutationInput_1.WorkoutToDoUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkoutToDoUpdateManyMutationInput_1.WorkoutToDoUpdateManyMutationInput)
], WorkoutToDoUpdateManyWithWhereWithoutAthleteInput.prototype, "data", void 0);
WorkoutToDoUpdateManyWithWhereWithoutAthleteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkoutToDoUpdateManyWithWhereWithoutAthleteInput", {
        isAbstract: true
    })
], WorkoutToDoUpdateManyWithWhereWithoutAthleteInput);
exports.WorkoutToDoUpdateManyWithWhereWithoutAthleteInput = WorkoutToDoUpdateManyWithWhereWithoutAthleteInput;
