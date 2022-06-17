"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachCreateNestedOneWithoutGlobalWorkoutInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CoachCreateOrConnectWithoutGlobalWorkoutInput_1 = require("../inputs/CoachCreateOrConnectWithoutGlobalWorkoutInput");
const CoachCreateWithoutGlobalWorkoutInput_1 = require("../inputs/CoachCreateWithoutGlobalWorkoutInput");
const CoachWhereUniqueInput_1 = require("../inputs/CoachWhereUniqueInput");
let CoachCreateNestedOneWithoutGlobalWorkoutInput = class CoachCreateNestedOneWithoutGlobalWorkoutInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachCreateWithoutGlobalWorkoutInput_1.CoachCreateWithoutGlobalWorkoutInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachCreateWithoutGlobalWorkoutInput_1.CoachCreateWithoutGlobalWorkoutInput)
], CoachCreateNestedOneWithoutGlobalWorkoutInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachCreateOrConnectWithoutGlobalWorkoutInput_1.CoachCreateOrConnectWithoutGlobalWorkoutInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachCreateOrConnectWithoutGlobalWorkoutInput_1.CoachCreateOrConnectWithoutGlobalWorkoutInput)
], CoachCreateNestedOneWithoutGlobalWorkoutInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachWhereUniqueInput_1.CoachWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachWhereUniqueInput_1.CoachWhereUniqueInput)
], CoachCreateNestedOneWithoutGlobalWorkoutInput.prototype, "connect", void 0);
CoachCreateNestedOneWithoutGlobalWorkoutInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CoachCreateNestedOneWithoutGlobalWorkoutInput", {
        isAbstract: true
    })
], CoachCreateNestedOneWithoutGlobalWorkoutInput);
exports.CoachCreateNestedOneWithoutGlobalWorkoutInput = CoachCreateNestedOneWithoutGlobalWorkoutInput;
