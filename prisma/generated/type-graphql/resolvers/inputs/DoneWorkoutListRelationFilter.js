"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoneWorkoutListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DoneWorkoutWhereInput_1 = require("../inputs/DoneWorkoutWhereInput");
let DoneWorkoutListRelationFilter = class DoneWorkoutListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutWhereInput_1.DoneWorkoutWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DoneWorkoutWhereInput_1.DoneWorkoutWhereInput)
], DoneWorkoutListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutWhereInput_1.DoneWorkoutWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DoneWorkoutWhereInput_1.DoneWorkoutWhereInput)
], DoneWorkoutListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutWhereInput_1.DoneWorkoutWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DoneWorkoutWhereInput_1.DoneWorkoutWhereInput)
], DoneWorkoutListRelationFilter.prototype, "none", void 0);
DoneWorkoutListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("DoneWorkoutListRelationFilter", {
        isAbstract: true
    })
], DoneWorkoutListRelationFilter);
exports.DoneWorkoutListRelationFilter = DoneWorkoutListRelationFilter;
