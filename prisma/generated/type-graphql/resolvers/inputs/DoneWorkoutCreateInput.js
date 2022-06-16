"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoneWorkoutCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteCreateNestedOneWithoutDoneWorkoutsInput_1 = require("../inputs/AthleteCreateNestedOneWithoutDoneWorkoutsInput");
let DoneWorkoutCreateInput = class DoneWorkoutCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DoneWorkoutCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteCreateNestedOneWithoutDoneWorkoutsInput_1.AthleteCreateNestedOneWithoutDoneWorkoutsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AthleteCreateNestedOneWithoutDoneWorkoutsInput_1.AthleteCreateNestedOneWithoutDoneWorkoutsInput)
], DoneWorkoutCreateInput.prototype, "athlete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], DoneWorkoutCreateInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], DoneWorkoutCreateInput.prototype, "calories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], DoneWorkoutCreateInput.prototype, "time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], DoneWorkoutCreateInput.prototype, "distance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], DoneWorkoutCreateInput.prototype, "intensity", void 0);
DoneWorkoutCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DoneWorkoutCreateInput", {
        isAbstract: true
    })
], DoneWorkoutCreateInput);
exports.DoneWorkoutCreateInput = DoneWorkoutCreateInput;
