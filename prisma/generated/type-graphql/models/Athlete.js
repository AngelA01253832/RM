"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Athlete = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_Gender_1 = require("../enums/Enum_Gender");
const AthleteCount_1 = require("../resolvers/outputs/AthleteCount");
let Athlete = class Athlete {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Athlete.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Athlete.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Athlete.prototype, "lastname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Athlete.prototype, "schoolId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Gender_1.Enum_Gender, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Athlete.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Athlete.prototype, "height", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Athlete.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteCount_1.AthleteCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteCount_1.AthleteCount)
], Athlete.prototype, "_count", void 0);
Athlete = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Athlete", {
        isAbstract: true
    })
], Athlete);
exports.Athlete = Athlete;
