"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueAdminArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AdminWhereUniqueInput_1 = require("../../../inputs/AdminWhereUniqueInput");
let FindUniqueAdminArgs = class FindUniqueAdminArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminWhereUniqueInput_1.AdminWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AdminWhereUniqueInput_1.AdminWhereUniqueInput)
], FindUniqueAdminArgs.prototype, "where", void 0);
FindUniqueAdminArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueAdminArgs);
exports.FindUniqueAdminArgs = FindUniqueAdminArgs;
