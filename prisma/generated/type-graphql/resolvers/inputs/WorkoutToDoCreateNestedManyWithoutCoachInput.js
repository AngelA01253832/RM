"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutToDoCreateNestedManyWithoutCoachInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkoutToDoCreateManyCoachInputEnvelope_1 = require("../inputs/WorkoutToDoCreateManyCoachInputEnvelope");
const WorkoutToDoCreateOrConnectWithoutCoachInput_1 = require("../inputs/WorkoutToDoCreateOrConnectWithoutCoachInput");
const WorkoutToDoCreateWithoutCoachInput_1 = require("../inputs/WorkoutToDoCreateWithoutCoachInput");
const WorkoutToDoWhereUniqueInput_1 = require("../inputs/WorkoutToDoWhereUniqueInput");
let WorkoutToDoCreateNestedManyWithoutCoachInput = class WorkoutToDoCreateNestedManyWithoutCoachInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkoutToDoCreateWithoutCoachInput_1.WorkoutToDoCreateWithoutCoachInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkoutToDoCreateNestedManyWithoutCoachInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkoutToDoCreateOrConnectWithoutCoachInput_1.WorkoutToDoCreateOrConnectWithoutCoachInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkoutToDoCreateNestedManyWithoutCoachInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoCreateManyCoachInputEnvelope_1.WorkoutToDoCreateManyCoachInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkoutToDoCreateManyCoachInputEnvelope_1.WorkoutToDoCreateManyCoachInputEnvelope)
], WorkoutToDoCreateNestedManyWithoutCoachInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkoutToDoWhereUniqueInput_1.WorkoutToDoWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkoutToDoCreateNestedManyWithoutCoachInput.prototype, "connect", void 0);
WorkoutToDoCreateNestedManyWithoutCoachInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkoutToDoCreateNestedManyWithoutCoachInput", {
        isAbstract: true
    })
], WorkoutToDoCreateNestedManyWithoutCoachInput);
exports.WorkoutToDoCreateNestedManyWithoutCoachInput = WorkoutToDoCreateNestedManyWithoutCoachInput;
