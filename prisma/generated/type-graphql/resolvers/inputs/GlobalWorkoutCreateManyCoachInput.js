"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalWorkoutCreateManyCoachInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_Goal_1 = require("../../enums/Enum_Goal");
let GlobalWorkoutCreateManyCoachInput = class GlobalWorkoutCreateManyCoachInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutCreateManyCoachInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutCreateManyCoachInput.prototype, "indications", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutCreateManyCoachInput.prototype, "goal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Goal_1.Enum_Goal, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutCreateManyCoachInput.prototype, "goalvalue", void 0);
GlobalWorkoutCreateManyCoachInput = tslib_1.__decorate([
    TypeGraphQL.InputType("GlobalWorkoutCreateManyCoachInput", {
        isAbstract: true
    })
], GlobalWorkoutCreateManyCoachInput);
exports.GlobalWorkoutCreateManyCoachInput = GlobalWorkoutCreateManyCoachInput;
