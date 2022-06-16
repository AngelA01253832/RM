"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAdminArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AdminUpdateInput_1 = require("../../../inputs/AdminUpdateInput");
const AdminWhereUniqueInput_1 = require("../../../inputs/AdminWhereUniqueInput");
let UpdateAdminArgs = class UpdateAdminArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminUpdateInput_1.AdminUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AdminUpdateInput_1.AdminUpdateInput)
], UpdateAdminArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminWhereUniqueInput_1.AdminWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AdminWhereUniqueInput_1.AdminWhereUniqueInput)
], UpdateAdminArgs.prototype, "where", void 0);
UpdateAdminArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateAdminArgs);
exports.UpdateAdminArgs = UpdateAdminArgs;
