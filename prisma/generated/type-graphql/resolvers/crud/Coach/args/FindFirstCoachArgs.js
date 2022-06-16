"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCoachArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CoachOrderByWithRelationInput_1 = require("../../../inputs/CoachOrderByWithRelationInput");
const CoachWhereInput_1 = require("../../../inputs/CoachWhereInput");
const CoachWhereUniqueInput_1 = require("../../../inputs/CoachWhereUniqueInput");
const CoachScalarFieldEnum_1 = require("../../../../enums/CoachScalarFieldEnum");
let FindFirstCoachArgs = class FindFirstCoachArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachWhereInput_1.CoachWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachWhereInput_1.CoachWhereInput)
], FindFirstCoachArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CoachOrderByWithRelationInput_1.CoachOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCoachArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachWhereUniqueInput_1.CoachWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachWhereUniqueInput_1.CoachWhereUniqueInput)
], FindFirstCoachArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCoachArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCoachArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CoachScalarFieldEnum_1.CoachScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCoachArgs.prototype, "distinct", void 0);
FindFirstCoachArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstCoachArgs);
exports.FindFirstCoachArgs = FindFirstCoachArgs;
