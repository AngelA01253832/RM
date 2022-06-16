"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAdminArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AdminOrderByWithRelationInput_1 = require("../../../inputs/AdminOrderByWithRelationInput");
const AdminWhereInput_1 = require("../../../inputs/AdminWhereInput");
const AdminWhereUniqueInput_1 = require("../../../inputs/AdminWhereUniqueInput");
let AggregateAdminArgs = class AggregateAdminArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminWhereInput_1.AdminWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdminWhereInput_1.AdminWhereInput)
], AggregateAdminArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AdminOrderByWithRelationInput_1.AdminOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateAdminArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminWhereUniqueInput_1.AdminWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdminWhereUniqueInput_1.AdminWhereUniqueInput)
], AggregateAdminArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateAdminArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateAdminArgs.prototype, "skip", void 0);
AggregateAdminArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateAdminArgs);
exports.AggregateAdminArgs = AggregateAdminArgs;
