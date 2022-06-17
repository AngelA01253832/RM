"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalWorkoutCreateWithoutCoachInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_Goal_1 = require("../../enums/Enum_Goal");
let GlobalWorkoutCreateWithoutCoachInput = class GlobalWorkoutCreateWithoutCoachInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutCreateWithoutCoachInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutCreateWithoutCoachInput.prototype, "indications", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutCreateWithoutCoachInput.prototype, "goal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Goal_1.Enum_Goal, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutCreateWithoutCoachInput.prototype, "goalvalue", void 0);
GlobalWorkoutCreateWithoutCoachInput = tslib_1.__decorate([
    TypeGraphQL.InputType("GlobalWorkoutCreateWithoutCoachInput", {
        isAbstract: true
    })
], GlobalWorkoutCreateWithoutCoachInput);
exports.GlobalWorkoutCreateWithoutCoachInput = GlobalWorkoutCreateWithoutCoachInput;
