"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CoachWhereInput_1 = require("../inputs/CoachWhereInput");
let CoachRelationFilter = class CoachRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachWhereInput_1.CoachWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachWhereInput_1.CoachWhereInput)
], CoachRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachWhereInput_1.CoachWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachWhereInput_1.CoachWhereInput)
], CoachRelationFilter.prototype, "isNot", void 0);
CoachRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("CoachRelationFilter", {
        isAbstract: true
    })
], CoachRelationFilter);
exports.CoachRelationFilter = CoachRelationFilter;
