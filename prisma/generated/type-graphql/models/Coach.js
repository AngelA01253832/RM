"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coach = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_Gender_1 = require("../enums/Enum_Gender");
const Enum_Status_1 = require("../enums/Enum_Status");
const CoachCount_1 = require("../resolvers/outputs/CoachCount");
let Coach = class Coach {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Coach.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Coach.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Coach.prototype, "lastname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Coach.prototype, "schoolId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Coach.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Gender_1.Enum_Gender, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Coach.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Status_1.Enum_Status, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Coach.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Coach.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachCount_1.CoachCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachCount_1.CoachCount)
], Coach.prototype, "_count", void 0);
Coach = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Coach", {
        isAbstract: true
    })
], Coach);
exports.Coach = Coach;
