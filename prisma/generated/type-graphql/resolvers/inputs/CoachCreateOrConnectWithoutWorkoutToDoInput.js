"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachCreateOrConnectWithoutWorkoutToDoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CoachCreateWithoutWorkoutToDoInput_1 = require("../inputs/CoachCreateWithoutWorkoutToDoInput");
const CoachWhereUniqueInput_1 = require("../inputs/CoachWhereUniqueInput");
let CoachCreateOrConnectWithoutWorkoutToDoInput = class CoachCreateOrConnectWithoutWorkoutToDoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachWhereUniqueInput_1.CoachWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CoachWhereUniqueInput_1.CoachWhereUniqueInput)
], CoachCreateOrConnectWithoutWorkoutToDoInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachCreateWithoutWorkoutToDoInput_1.CoachCreateWithoutWorkoutToDoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CoachCreateWithoutWorkoutToDoInput_1.CoachCreateWithoutWorkoutToDoInput)
], CoachCreateOrConnectWithoutWorkoutToDoInput.prototype, "create", void 0);
CoachCreateOrConnectWithoutWorkoutToDoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CoachCreateOrConnectWithoutWorkoutToDoInput", {
        isAbstract: true
    })
], CoachCreateOrConnectWithoutWorkoutToDoInput);
exports.CoachCreateOrConnectWithoutWorkoutToDoInput = CoachCreateOrConnectWithoutWorkoutToDoInput;
