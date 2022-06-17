"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalWorkoutGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlobalWorkoutCountAggregate_1 = require("../outputs/GlobalWorkoutCountAggregate");
const GlobalWorkoutMaxAggregate_1 = require("../outputs/GlobalWorkoutMaxAggregate");
const GlobalWorkoutMinAggregate_1 = require("../outputs/GlobalWorkoutMinAggregate");
const Enum_Goal_1 = require("../../enums/Enum_Goal");
let GlobalWorkoutGroupBy = class GlobalWorkoutGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutGroupBy.prototype, "indications", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutGroupBy.prototype, "goal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Goal_1.Enum_Goal, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutGroupBy.prototype, "goalvalue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutGroupBy.prototype, "coachId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutCountAggregate_1.GlobalWorkoutCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutCountAggregate_1.GlobalWorkoutCountAggregate)
], GlobalWorkoutGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutMinAggregate_1.GlobalWorkoutMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutMinAggregate_1.GlobalWorkoutMinAggregate)
], GlobalWorkoutGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutMaxAggregate_1.GlobalWorkoutMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutMaxAggregate_1.GlobalWorkoutMaxAggregate)
], GlobalWorkoutGroupBy.prototype, "_max", void 0);
GlobalWorkoutGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("GlobalWorkoutGroupBy", {
        isAbstract: true
    })
], GlobalWorkoutGroupBy);
exports.GlobalWorkoutGroupBy = GlobalWorkoutGroupBy;
