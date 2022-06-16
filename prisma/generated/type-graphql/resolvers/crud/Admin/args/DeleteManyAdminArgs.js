"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyAdminArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AdminWhereInput_1 = require("../../../inputs/AdminWhereInput");
let DeleteManyAdminArgs = class DeleteManyAdminArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminWhereInput_1.AdminWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdminWhereInput_1.AdminWhereInput)
], DeleteManyAdminArgs.prototype, "where", void 0);
DeleteManyAdminArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyAdminArgs);
exports.DeleteManyAdminArgs = DeleteManyAdminArgs;
