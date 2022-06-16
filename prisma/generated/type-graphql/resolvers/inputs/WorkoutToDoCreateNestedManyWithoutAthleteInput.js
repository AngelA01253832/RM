"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutToDoCreateNestedManyWithoutAthleteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkoutToDoCreateManyAthleteInputEnvelope_1 = require("../inputs/WorkoutToDoCreateManyAthleteInputEnvelope");
const WorkoutToDoCreateOrConnectWithoutAthleteInput_1 = require("../inputs/WorkoutToDoCreateOrConnectWithoutAthleteInput");
const WorkoutToDoCreateWithoutAthleteInput_1 = require("../inputs/WorkoutToDoCreateWithoutAthleteInput");
const WorkoutToDoWhereUniqueInput_1 = require("../inputs/WorkoutToDoWhereUniqueInput");
let WorkoutToDoCreateNestedManyWithoutAthleteInput = class WorkoutToDoCreateNestedManyWithoutAthleteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkoutToDoCreateWithoutAthleteInput_1.WorkoutToDoCreateWithoutAthleteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkoutToDoCreateNestedManyWithoutAthleteInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkoutToDoCreateOrConnectWithoutAthleteInput_1.WorkoutToDoCreateOrConnectWithoutAthleteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkoutToDoCreateNestedManyWithoutAthleteInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoCreateManyAthleteInputEnvelope_1.WorkoutToDoCreateManyAthleteInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkoutToDoCreateManyAthleteInputEnvelope_1.WorkoutToDoCreateManyAthleteInputEnvelope)
], WorkoutToDoCreateNestedManyWithoutAthleteInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkoutToDoWhereUniqueInput_1.WorkoutToDoWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkoutToDoCreateNestedManyWithoutAthleteInput.prototype, "connect", void 0);
WorkoutToDoCreateNestedManyWithoutAthleteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkoutToDoCreateNestedManyWithoutAthleteInput", {
        isAbstract: true
    })
], WorkoutToDoCreateNestedManyWithoutAthleteInput);
exports.WorkoutToDoCreateNestedManyWithoutAthleteInput = WorkoutToDoCreateNestedManyWithoutAthleteInput;
