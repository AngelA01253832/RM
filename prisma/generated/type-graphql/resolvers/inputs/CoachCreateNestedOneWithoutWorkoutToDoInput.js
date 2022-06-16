"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachCreateNestedOneWithoutWorkoutToDoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CoachCreateOrConnectWithoutWorkoutToDoInput_1 = require("../inputs/CoachCreateOrConnectWithoutWorkoutToDoInput");
const CoachCreateWithoutWorkoutToDoInput_1 = require("../inputs/CoachCreateWithoutWorkoutToDoInput");
const CoachWhereUniqueInput_1 = require("../inputs/CoachWhereUniqueInput");
let CoachCreateNestedOneWithoutWorkoutToDoInput = class CoachCreateNestedOneWithoutWorkoutToDoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachCreateWithoutWorkoutToDoInput_1.CoachCreateWithoutWorkoutToDoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachCreateWithoutWorkoutToDoInput_1.CoachCreateWithoutWorkoutToDoInput)
], CoachCreateNestedOneWithoutWorkoutToDoInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachCreateOrConnectWithoutWorkoutToDoInput_1.CoachCreateOrConnectWithoutWorkoutToDoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachCreateOrConnectWithoutWorkoutToDoInput_1.CoachCreateOrConnectWithoutWorkoutToDoInput)
], CoachCreateNestedOneWithoutWorkoutToDoInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachWhereUniqueInput_1.CoachWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachWhereUniqueInput_1.CoachWhereUniqueInput)
], CoachCreateNestedOneWithoutWorkoutToDoInput.prototype, "connect", void 0);
CoachCreateNestedOneWithoutWorkoutToDoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CoachCreateNestedOneWithoutWorkoutToDoInput", {
        isAbstract: true
    })
], CoachCreateNestedOneWithoutWorkoutToDoInput);
exports.CoachCreateNestedOneWithoutWorkoutToDoInput = CoachCreateNestedOneWithoutWorkoutToDoInput;
