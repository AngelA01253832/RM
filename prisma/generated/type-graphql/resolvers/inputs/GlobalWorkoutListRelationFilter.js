"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalWorkoutListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlobalWorkoutWhereInput_1 = require("../inputs/GlobalWorkoutWhereInput");
let GlobalWorkoutListRelationFilter = class GlobalWorkoutListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutWhereInput_1.GlobalWorkoutWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutWhereInput_1.GlobalWorkoutWhereInput)
], GlobalWorkoutListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutWhereInput_1.GlobalWorkoutWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutWhereInput_1.GlobalWorkoutWhereInput)
], GlobalWorkoutListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutWhereInput_1.GlobalWorkoutWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutWhereInput_1.GlobalWorkoutWhereInput)
], GlobalWorkoutListRelationFilter.prototype, "none", void 0);
GlobalWorkoutListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("GlobalWorkoutListRelationFilter", {
        isAbstract: true
    })
], GlobalWorkoutListRelationFilter);
exports.GlobalWorkoutListRelationFilter = GlobalWorkoutListRelationFilter;
