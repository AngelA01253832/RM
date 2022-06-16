"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateDoneWorkoutArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DoneWorkoutOrderByWithRelationInput_1 = require("../../../inputs/DoneWorkoutOrderByWithRelationInput");
const DoneWorkoutWhereInput_1 = require("../../../inputs/DoneWorkoutWhereInput");
const DoneWorkoutWhereUniqueInput_1 = require("../../../inputs/DoneWorkoutWhereUniqueInput");
let AggregateDoneWorkoutArgs = class AggregateDoneWorkoutArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutWhereInput_1.DoneWorkoutWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DoneWorkoutWhereInput_1.DoneWorkoutWhereInput)
], AggregateDoneWorkoutArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DoneWorkoutOrderByWithRelationInput_1.DoneWorkoutOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateDoneWorkoutArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutWhereUniqueInput_1.DoneWorkoutWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DoneWorkoutWhereUniqueInput_1.DoneWorkoutWhereUniqueInput)
], AggregateDoneWorkoutArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateDoneWorkoutArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateDoneWorkoutArgs.prototype, "skip", void 0);
AggregateDoneWorkoutArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateDoneWorkoutArgs);
exports.AggregateDoneWorkoutArgs = AggregateDoneWorkoutArgs;
