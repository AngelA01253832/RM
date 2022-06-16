"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyAdminArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AdminOrderByWithRelationInput_1 = require("../../../inputs/AdminOrderByWithRelationInput");
const AdminWhereInput_1 = require("../../../inputs/AdminWhereInput");
const AdminWhereUniqueInput_1 = require("../../../inputs/AdminWhereUniqueInput");
const AdminScalarFieldEnum_1 = require("../../../../enums/AdminScalarFieldEnum");
let FindManyAdminArgs = class FindManyAdminArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminWhereInput_1.AdminWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdminWhereInput_1.AdminWhereInput)
], FindManyAdminArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AdminOrderByWithRelationInput_1.AdminOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyAdminArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminWhereUniqueInput_1.AdminWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdminWhereUniqueInput_1.AdminWhereUniqueInput)
], FindManyAdminArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyAdminArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyAdminArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AdminScalarFieldEnum_1.AdminScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyAdminArgs.prototype, "distinct", void 0);
FindManyAdminArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyAdminArgs);
exports.FindManyAdminArgs = FindManyAdminArgs;
