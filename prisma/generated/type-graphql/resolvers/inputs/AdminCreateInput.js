"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutAdminInput_1 = require("../inputs/UserCreateNestedOneWithoutAdminInput");
const Enum_Gender_1 = require("../../enums/Enum_Gender");
let AdminCreateInput = class AdminCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdminCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AdminCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AdminCreateInput.prototype, "lastname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AdminCreateInput.prototype, "schoolId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutAdminInput_1.UserCreateNestedOneWithoutAdminInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutAdminInput_1.UserCreateNestedOneWithoutAdminInput)
], AdminCreateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Gender_1.Enum_Gender, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AdminCreateInput.prototype, "gender", void 0);
AdminCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AdminCreateInput", {
        isAbstract: true
    })
], AdminCreateInput);
exports.AdminCreateInput = AdminCreateInput;
