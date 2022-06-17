"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalWorkoutCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CoachCreateNestedOneWithoutGlobalWorkoutInput_1 = require("../inputs/CoachCreateNestedOneWithoutGlobalWorkoutInput");
const Enum_Goal_1 = require("../../enums/Enum_Goal");
let GlobalWorkoutCreateInput = class GlobalWorkoutCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachCreateNestedOneWithoutGlobalWorkoutInput_1.CoachCreateNestedOneWithoutGlobalWorkoutInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CoachCreateNestedOneWithoutGlobalWorkoutInput_1.CoachCreateNestedOneWithoutGlobalWorkoutInput)
], GlobalWorkoutCreateInput.prototype, "coach", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutCreateInput.prototype, "indications", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutCreateInput.prototype, "goal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Goal_1.Enum_Goal, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutCreateInput.prototype, "goalvalue", void 0);
GlobalWorkoutCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("GlobalWorkoutCreateInput", {
        isAbstract: true
    })
], GlobalWorkoutCreateInput);
exports.GlobalWorkoutCreateInput = GlobalWorkoutCreateInput;
