"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AthleteRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteWhereInput_1 = require("../inputs/AthleteWhereInput");
let AthleteRelationFilter = class AthleteRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteWhereInput_1.AthleteWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteWhereInput_1.AthleteWhereInput)
], AthleteRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteWhereInput_1.AthleteWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteWhereInput_1.AthleteWhereInput)
], AthleteRelationFilter.prototype, "isNot", void 0);
AthleteRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("AthleteRelationFilter", {
        isAbstract: true
    })
], AthleteRelationFilter);
exports.AthleteRelationFilter = AthleteRelationFilter;
