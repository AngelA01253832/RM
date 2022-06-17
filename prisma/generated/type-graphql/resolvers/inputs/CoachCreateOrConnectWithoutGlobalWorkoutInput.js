"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachCreateOrConnectWithoutGlobalWorkoutInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CoachCreateWithoutGlobalWorkoutInput_1 = require("../inputs/CoachCreateWithoutGlobalWorkoutInput");
const CoachWhereUniqueInput_1 = require("../inputs/CoachWhereUniqueInput");
let CoachCreateOrConnectWithoutGlobalWorkoutInput = class CoachCreateOrConnectWithoutGlobalWorkoutInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachWhereUniqueInput_1.CoachWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CoachWhereUniqueInput_1.CoachWhereUniqueInput)
], CoachCreateOrConnectWithoutGlobalWorkoutInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachCreateWithoutGlobalWorkoutInput_1.CoachCreateWithoutGlobalWorkoutInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CoachCreateWithoutGlobalWorkoutInput_1.CoachCreateWithoutGlobalWorkoutInput)
], CoachCreateOrConnectWithoutGlobalWorkoutInput.prototype, "create", void 0);
CoachCreateOrConnectWithoutGlobalWorkoutInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CoachCreateOrConnectWithoutGlobalWorkoutInput", {
        isAbstract: true
    })
], CoachCreateOrConnectWithoutGlobalWorkoutInput);
exports.CoachCreateOrConnectWithoutGlobalWorkoutInput = CoachCreateOrConnectWithoutGlobalWorkoutInput;
