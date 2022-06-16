"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByDoneWorkoutArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DoneWorkoutOrderByWithAggregationInput_1 = require("../../../inputs/DoneWorkoutOrderByWithAggregationInput");
const DoneWorkoutScalarWhereWithAggregatesInput_1 = require("../../../inputs/DoneWorkoutScalarWhereWithAggregatesInput");
const DoneWorkoutWhereInput_1 = require("../../../inputs/DoneWorkoutWhereInput");
const DoneWorkoutScalarFieldEnum_1 = require("../../../../enums/DoneWorkoutScalarFieldEnum");
let GroupByDoneWorkoutArgs = class GroupByDoneWorkoutArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutWhereInput_1.DoneWorkoutWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DoneWorkoutWhereInput_1.DoneWorkoutWhereInput)
], GroupByDoneWorkoutArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DoneWorkoutOrderByWithAggregationInput_1.DoneWorkoutOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByDoneWorkoutArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DoneWorkoutScalarFieldEnum_1.DoneWorkoutScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByDoneWorkoutArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutScalarWhereWithAggregatesInput_1.DoneWorkoutScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DoneWorkoutScalarWhereWithAggregatesInput_1.DoneWorkoutScalarWhereWithAggregatesInput)
], GroupByDoneWorkoutArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByDoneWorkoutArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByDoneWorkoutArgs.prototype, "skip", void 0);
GroupByDoneWorkoutArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByDoneWorkoutArgs);
exports.GroupByDoneWorkoutArgs = GroupByDoneWorkoutArgs;
