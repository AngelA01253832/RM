"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutToDoListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkoutToDoWhereInput_1 = require("../inputs/WorkoutToDoWhereInput");
let WorkoutToDoListRelationFilter = class WorkoutToDoListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoWhereInput_1.WorkoutToDoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkoutToDoWhereInput_1.WorkoutToDoWhereInput)
], WorkoutToDoListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoWhereInput_1.WorkoutToDoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkoutToDoWhereInput_1.WorkoutToDoWhereInput)
], WorkoutToDoListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkoutToDoWhereInput_1.WorkoutToDoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkoutToDoWhereInput_1.WorkoutToDoWhereInput)
], WorkoutToDoListRelationFilter.prototype, "none", void 0);
WorkoutToDoListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkoutToDoListRelationFilter", {
        isAbstract: true
    })
], WorkoutToDoListRelationFilter);
exports.WorkoutToDoListRelationFilter = WorkoutToDoListRelationFilter;
