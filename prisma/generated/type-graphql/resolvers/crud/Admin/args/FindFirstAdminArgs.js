"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstAdminArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AdminOrderByWithRelationInput_1 = require("../../../inputs/AdminOrderByWithRelationInput");
const AdminWhereInput_1 = require("../../../inputs/AdminWhereInput");
const AdminWhereUniqueInput_1 = require("../../../inputs/AdminWhereUniqueInput");
const AdminScalarFieldEnum_1 = require("../../../../enums/AdminScalarFieldEnum");
let FindFirstAdminArgs = class FindFirstAdminArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminWhereInput_1.AdminWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdminWhereInput_1.AdminWhereInput)
], FindFirstAdminArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AdminOrderByWithRelationInput_1.AdminOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstAdminArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminWhereUniqueInput_1.AdminWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdminWhereUniqueInput_1.AdminWhereUniqueInput)
], FindFirstAdminArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstAdminArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstAdminArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AdminScalarFieldEnum_1.AdminScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstAdminArgs.prototype, "distinct", void 0);
FindFirstAdminArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstAdminArgs);
exports.FindFirstAdminArgs = FindFirstAdminArgs;
