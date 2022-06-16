"use strict";
var AdminWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumEnum_GenderFilter_1 = require("../inputs/EnumEnum_GenderFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let AdminWhereInput = AdminWhereInput_1 = class AdminWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AdminWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AdminWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AdminWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AdminWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AdminWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AdminWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AdminWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AdminWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AdminWhereInput.prototype, "lastname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AdminWhereInput.prototype, "schoolId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], AdminWhereInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_GenderFilter_1.EnumEnum_GenderFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_GenderFilter_1.EnumEnum_GenderFilter)
], AdminWhereInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AdminWhereInput.prototype, "userId", void 0);
AdminWhereInput = AdminWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("AdminWhereInput", {
        isAbstract: true
    })
], AdminWhereInput);
exports.AdminWhereInput = AdminWhereInput;
