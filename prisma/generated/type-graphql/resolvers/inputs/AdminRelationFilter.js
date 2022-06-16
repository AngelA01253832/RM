"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AdminWhereInput_1 = require("../inputs/AdminWhereInput");
let AdminRelationFilter = class AdminRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminWhereInput_1.AdminWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdminWhereInput_1.AdminWhereInput)
], AdminRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminWhereInput_1.AdminWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdminWhereInput_1.AdminWhereInput)
], AdminRelationFilter.prototype, "isNot", void 0);
AdminRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("AdminRelationFilter", {
        isAbstract: true
    })
], AdminRelationFilter);
exports.AdminRelationFilter = AdminRelationFilter;
