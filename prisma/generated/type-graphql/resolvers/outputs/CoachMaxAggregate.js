"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_Gender_1 = require("../../enums/Enum_Gender");
const Enum_Status_1 = require("../../enums/Enum_Status");
let CoachMaxAggregate = class CoachMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CoachMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CoachMaxAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CoachMaxAggregate.prototype, "lastname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CoachMaxAggregate.prototype, "schoolId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CoachMaxAggregate.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CoachMaxAggregate.prototype, "scheduler", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CoachMaxAggregate.prototype, "KnowTrainer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Gender_1.Enum_Gender, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CoachMaxAggregate.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Status_1.Enum_Status, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CoachMaxAggregate.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CoachMaxAggregate.prototype, "userId", void 0);
CoachMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CoachMaxAggregate", {
        isAbstract: true
    })
], CoachMaxAggregate);
exports.CoachMaxAggregate = CoachMaxAggregate;
