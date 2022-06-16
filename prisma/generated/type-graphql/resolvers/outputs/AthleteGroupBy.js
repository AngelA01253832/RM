"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AthleteGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteAvgAggregate_1 = require("../outputs/AthleteAvgAggregate");
const AthleteCountAggregate_1 = require("../outputs/AthleteCountAggregate");
const AthleteMaxAggregate_1 = require("../outputs/AthleteMaxAggregate");
const AthleteMinAggregate_1 = require("../outputs/AthleteMinAggregate");
const AthleteSumAggregate_1 = require("../outputs/AthleteSumAggregate");
const Enum_Gender_1 = require("../../enums/Enum_Gender");
let AthleteGroupBy = class AthleteGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AthleteGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AthleteGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AthleteGroupBy.prototype, "lastname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AthleteGroupBy.prototype, "schoolId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Gender_1.Enum_Gender, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AthleteGroupBy.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], AthleteGroupBy.prototype, "height", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AthleteGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteCountAggregate_1.AthleteCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteCountAggregate_1.AthleteCountAggregate)
], AthleteGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteAvgAggregate_1.AthleteAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteAvgAggregate_1.AthleteAvgAggregate)
], AthleteGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteSumAggregate_1.AthleteSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteSumAggregate_1.AthleteSumAggregate)
], AthleteGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteMinAggregate_1.AthleteMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteMinAggregate_1.AthleteMinAggregate)
], AthleteGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteMaxAggregate_1.AthleteMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteMaxAggregate_1.AthleteMaxAggregate)
], AthleteGroupBy.prototype, "_max", void 0);
AthleteGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AthleteGroupBy", {
        isAbstract: true
    })
], AthleteGroupBy);
exports.AthleteGroupBy = AthleteGroupBy;
