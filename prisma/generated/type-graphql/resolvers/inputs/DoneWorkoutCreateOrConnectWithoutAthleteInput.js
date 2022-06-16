"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoneWorkoutCreateOrConnectWithoutAthleteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DoneWorkoutCreateWithoutAthleteInput_1 = require("../inputs/DoneWorkoutCreateWithoutAthleteInput");
const DoneWorkoutWhereUniqueInput_1 = require("../inputs/DoneWorkoutWhereUniqueInput");
let DoneWorkoutCreateOrConnectWithoutAthleteInput = class DoneWorkoutCreateOrConnectWithoutAthleteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutWhereUniqueInput_1.DoneWorkoutWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DoneWorkoutWhereUniqueInput_1.DoneWorkoutWhereUniqueInput)
], DoneWorkoutCreateOrConnectWithoutAthleteInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutCreateWithoutAthleteInput_1.DoneWorkoutCreateWithoutAthleteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DoneWorkoutCreateWithoutAthleteInput_1.DoneWorkoutCreateWithoutAthleteInput)
], DoneWorkoutCreateOrConnectWithoutAthleteInput.prototype, "create", void 0);
DoneWorkoutCreateOrConnectWithoutAthleteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DoneWorkoutCreateOrConnectWithoutAthleteInput", {
        isAbstract: true
    })
], DoneWorkoutCreateOrConnectWithoutAthleteInput);
exports.DoneWorkoutCreateOrConnectWithoutAthleteInput = DoneWorkoutCreateOrConnectWithoutAthleteInput;
