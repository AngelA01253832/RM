"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertAdminArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AdminCreateInput_1 = require("../../../inputs/AdminCreateInput");
const AdminUpdateInput_1 = require("../../../inputs/AdminUpdateInput");
const AdminWhereUniqueInput_1 = require("../../../inputs/AdminWhereUniqueInput");
let UpsertAdminArgs = class UpsertAdminArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminWhereUniqueInput_1.AdminWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AdminWhereUniqueInput_1.AdminWhereUniqueInput)
], UpsertAdminArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminCreateInput_1.AdminCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AdminCreateInput_1.AdminCreateInput)
], UpsertAdminArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminUpdateInput_1.AdminUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AdminUpdateInput_1.AdminUpdateInput)
], UpsertAdminArgs.prototype, "update", void 0);
UpsertAdminArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertAdminArgs);
exports.UpsertAdminArgs = UpsertAdminArgs;
