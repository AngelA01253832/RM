"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAdminArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AdminWhereUniqueInput_1 = require("../../../inputs/AdminWhereUniqueInput");
let DeleteAdminArgs = class DeleteAdminArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminWhereUniqueInput_1.AdminWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AdminWhereUniqueInput_1.AdminWhereUniqueInput)
], DeleteAdminArgs.prototype, "where", void 0);
DeleteAdminArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteAdminArgs);
exports.DeleteAdminArgs = DeleteAdminArgs;
