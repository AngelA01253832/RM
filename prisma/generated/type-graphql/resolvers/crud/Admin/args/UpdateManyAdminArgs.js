"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyAdminArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AdminUpdateManyMutationInput_1 = require("../../../inputs/AdminUpdateManyMutationInput");
const AdminWhereInput_1 = require("../../../inputs/AdminWhereInput");
let UpdateManyAdminArgs = class UpdateManyAdminArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminUpdateManyMutationInput_1.AdminUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AdminUpdateManyMutationInput_1.AdminUpdateManyMutationInput)
], UpdateManyAdminArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminWhereInput_1.AdminWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdminWhereInput_1.AdminWhereInput)
], UpdateManyAdminArgs.prototype, "where", void 0);
UpdateManyAdminArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyAdminArgs);
exports.UpdateManyAdminArgs = UpdateManyAdminArgs;
