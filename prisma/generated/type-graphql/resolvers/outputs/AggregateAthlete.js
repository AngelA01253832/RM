"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAthlete = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteAvgAggregate_1 = require("../outputs/AthleteAvgAggregate");
const AthleteCountAggregate_1 = require("../outputs/AthleteCountAggregate");
const AthleteMaxAggregate_1 = require("../outputs/AthleteMaxAggregate");
const AthleteMinAggregate_1 = require("../outputs/AthleteMinAggregate");
const AthleteSumAggregate_1 = require("../outputs/AthleteSumAggregate");
let AggregateAthlete = class AggregateAthlete {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteCountAggregate_1.AthleteCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteCountAggregate_1.AthleteCountAggregate)
], AggregateAthlete.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteAvgAggregate_1.AthleteAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteAvgAggregate_1.AthleteAvgAggregate)
], AggregateAthlete.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteSumAggregate_1.AthleteSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteSumAggregate_1.AthleteSumAggregate)
], AggregateAthlete.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteMinAggregate_1.AthleteMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteMinAggregate_1.AthleteMinAggregate)
], AggregateAthlete.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteMaxAggregate_1.AthleteMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteMaxAggregate_1.AthleteMaxAggregate)
], AggregateAthlete.prototype, "_max", void 0);
AggregateAthlete = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateAthlete", {
        isAbstract: true
    })
], AggregateAthlete);
exports.AggregateAthlete = AggregateAthlete;
