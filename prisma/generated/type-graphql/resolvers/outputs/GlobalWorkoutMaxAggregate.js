"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalWorkoutMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_Goal_1 = require("../../enums/Enum_Goal");
let GlobalWorkoutMaxAggregate = class GlobalWorkoutMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutMaxAggregate.prototype, "indications", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutMaxAggregate.prototype, "goal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Goal_1.Enum_Goal, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutMaxAggregate.prototype, "goalvalue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutMaxAggregate.prototype, "coachId", void 0);
GlobalWorkoutMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("GlobalWorkoutMaxAggregate", {
        isAbstract: true
    })
], GlobalWorkoutMaxAggregate);
exports.GlobalWorkoutMaxAggregate = GlobalWorkoutMaxAggregate;
