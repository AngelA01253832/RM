"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutToDoCreateOrConnectWithoutCoachInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkoutToDoCreateWithoutCoachInput_1 = require("../inputs/WorkoutToDoCreateWithoutCoachInput");
const WorkoutToDoWhereUniqueInput_1 = require("../inputs/WorkoutToDoWhereUniqueInput");
let WorkoutToDoCreateOrConnectWithoutCoachInput = class WorkoutToDoCreateOrConnectWithoutCoachInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoWhereUniqueInput_1.WorkoutToDoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkoutToDoWhereUniqueInput_1.WorkoutToDoWhereUniqueInput)
], WorkoutToDoCreateOrConnectWithoutCoachInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoCreateWithoutCoachInput_1.WorkoutToDoCreateWithoutCoachInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkoutToDoCreateWithoutCoachInput_1.WorkoutToDoCreateWithoutCoachInput)
], WorkoutToDoCreateOrConnectWithoutCoachInput.prototype, "create", void 0);
WorkoutToDoCreateOrConnectWithoutCoachInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkoutToDoCreateOrConnectWithoutCoachInput", {
        isAbstract: true
    })
], WorkoutToDoCreateOrConnectWithoutCoachInput);
exports.WorkoutToDoCreateOrConnectWithoutCoachInput = WorkoutToDoCreateOrConnectWithoutCoachInput;
