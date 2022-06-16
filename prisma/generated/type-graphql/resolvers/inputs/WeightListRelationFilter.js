"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WeightWhereInput_1 = require("../inputs/WeightWhereInput");
let WeightListRelationFilter = class WeightListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightWhereInput_1.WeightWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WeightWhereInput_1.WeightWhereInput)
], WeightListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightWhereInput_1.WeightWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WeightWhereInput_1.WeightWhereInput)
], WeightListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WeightWhereInput_1.WeightWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WeightWhereInput_1.WeightWhereInput)
], WeightListRelationFilter.prototype, "none", void 0);
WeightListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("WeightListRelationFilter", {
        isAbstract: true
    })
], WeightListRelationFilter);
exports.WeightListRelationFilter = WeightListRelationFilter;
