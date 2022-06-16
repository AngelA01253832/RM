"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutToDoUpdateManyWithWhereWithoutCoachInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkoutToDoScalarWhereInput_1 = require("../inputs/WorkoutToDoScalarWhereInput");
const WorkoutToDoUpdateManyMutationInput_1 = require("../inputs/WorkoutToDoUpdateManyMutationInput");
let WorkoutToDoUpdateManyWithWhereWithoutCoachInput = class WorkoutToDoUpdateManyWithWhereWithoutCoachInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoScalarWhereInput_1.WorkoutToDoScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkoutToDoScalarWhereInput_1.WorkoutToDoScalarWhereInput)
], WorkoutToDoUpdateManyWithWhereWithoutCoachInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoUpdateManyMutationInput_1.WorkoutToDoUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkoutToDoUpdateManyMutationInput_1.WorkoutToDoUpdateManyMutationInput)
], WorkoutToDoUpdateManyWithWhereWithoutCoachInput.prototype, "data", void 0);
WorkoutToDoUpdateManyWithWhereWithoutCoachInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkoutToDoUpdateManyWithWhereWithoutCoachInput", {
        isAbstract: true
    })
], WorkoutToDoUpdateManyWithWhereWithoutCoachInput);
exports.WorkoutToDoUpdateManyWithWhereWithoutCoachInput = WorkoutToDoUpdateManyWithWhereWithoutCoachInput;
