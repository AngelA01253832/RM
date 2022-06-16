"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutToDoCreateOrConnectWithoutAthleteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkoutToDoCreateWithoutAthleteInput_1 = require("../inputs/WorkoutToDoCreateWithoutAthleteInput");
const WorkoutToDoWhereUniqueInput_1 = require("../inputs/WorkoutToDoWhereUniqueInput");
let WorkoutToDoCreateOrConnectWithoutAthleteInput = class WorkoutToDoCreateOrConnectWithoutAthleteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoWhereUniqueInput_1.WorkoutToDoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkoutToDoWhereUniqueInput_1.WorkoutToDoWhereUniqueInput)
], WorkoutToDoCreateOrConnectWithoutAthleteInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoCreateWithoutAthleteInput_1.WorkoutToDoCreateWithoutAthleteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkoutToDoCreateWithoutAthleteInput_1.WorkoutToDoCreateWithoutAthleteInput)
], WorkoutToDoCreateOrConnectWithoutAthleteInput.prototype, "create", void 0);
WorkoutToDoCreateOrConnectWithoutAthleteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkoutToDoCreateOrConnectWithoutAthleteInput", {
        isAbstract: true
    })
], WorkoutToDoCreateOrConnectWithoutAthleteInput);
exports.WorkoutToDoCreateOrConnectWithoutAthleteInput = WorkoutToDoCreateOrConnectWithoutAthleteInput;
