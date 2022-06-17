"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalWorkoutMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_Goal_1 = require("../../enums/Enum_Goal");
let GlobalWorkoutMinAggregate = class GlobalWorkoutMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutMinAggregate.prototype, "indications", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutMinAggregate.prototype, "goal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Goal_1.Enum_Goal, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutMinAggregate.prototype, "goalvalue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutMinAggregate.prototype, "coachId", void 0);
GlobalWorkoutMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("GlobalWorkoutMinAggregate", {
        isAbstract: true
    })
], GlobalWorkoutMinAggregate);
exports.GlobalWorkoutMinAggregate = GlobalWorkoutMinAggregate;
