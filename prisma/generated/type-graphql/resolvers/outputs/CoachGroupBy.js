"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CoachCountAggregate_1 = require("../outputs/CoachCountAggregate");
const CoachMaxAggregate_1 = require("../outputs/CoachMaxAggregate");
const CoachMinAggregate_1 = require("../outputs/CoachMinAggregate");
const Enum_Gender_1 = require("../../enums/Enum_Gender");
const Enum_Status_1 = require("../../enums/Enum_Status");
let CoachGroupBy = class CoachGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CoachGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CoachGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CoachGroupBy.prototype, "lastname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CoachGroupBy.prototype, "schoolId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CoachGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Gender_1.Enum_Gender, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CoachGroupBy.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Status_1.Enum_Status, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CoachGroupBy.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CoachGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachCountAggregate_1.CoachCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachCountAggregate_1.CoachCountAggregate)
], CoachGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachMinAggregate_1.CoachMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachMinAggregate_1.CoachMinAggregate)
], CoachGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachMaxAggregate_1.CoachMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachMaxAggregate_1.CoachMaxAggregate)
], CoachGroupBy.prototype, "_max", void 0);
CoachGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CoachGroupBy", {
        isAbstract: true
    })
], CoachGroupBy);
exports.CoachGroupBy = CoachGroupBy;
