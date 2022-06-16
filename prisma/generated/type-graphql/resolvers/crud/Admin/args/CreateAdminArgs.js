"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAdminArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AdminCreateInput_1 = require("../../../inputs/AdminCreateInput");
let CreateAdminArgs = class CreateAdminArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminCreateInput_1.AdminCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AdminCreateInput_1.AdminCreateInput)
], CreateAdminArgs.prototype, "data", void 0);
CreateAdminArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateAdminArgs);
exports.CreateAdminArgs = CreateAdminArgs;
