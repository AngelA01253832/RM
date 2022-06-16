"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCoach = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CoachCountAggregate_1 = require("../outputs/CoachCountAggregate");
const CoachMaxAggregate_1 = require("../outputs/CoachMaxAggregate");
const CoachMinAggregate_1 = require("../outputs/CoachMinAggregate");
let AggregateCoach = class AggregateCoach {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachCountAggregate_1.CoachCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachCountAggregate_1.CoachCountAggregate)
], AggregateCoach.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachMinAggregate_1.CoachMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachMinAggregate_1.CoachMinAggregate)
], AggregateCoach.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachMaxAggregate_1.CoachMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachMaxAggregate_1.CoachMaxAggregate)
], AggregateCoach.prototype, "_max", void 0);
AggregateCoach = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateCoach", {
        isAbstract: true
    })
], AggregateCoach);
exports.AggregateCoach = AggregateCoach;
