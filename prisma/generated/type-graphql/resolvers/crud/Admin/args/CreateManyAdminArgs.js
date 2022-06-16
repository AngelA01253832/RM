"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAdminArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AdminCreateManyInput_1 = require("../../../inputs/AdminCreateManyInput");
let CreateManyAdminArgs = class CreateManyAdminArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AdminCreateManyInput_1.AdminCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyAdminArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyAdminArgs.prototype, "skipDuplicates", void 0);
CreateManyAdminArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyAdminArgs);
exports.CreateManyAdminArgs = CreateManyAdminArgs;
