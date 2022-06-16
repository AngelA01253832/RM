"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_Gender_1 = require("../../enums/Enum_Gender");
let AdminCreateManyInput = class AdminCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdminCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AdminCreateManyInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AdminCreateManyInput.prototype, "lastname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AdminCreateManyInput.prototype, "schoolId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Gender_1.Enum_Gender, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AdminCreateManyInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AdminCreateManyInput.prototype, "userId", void 0);
AdminCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AdminCreateManyInput", {
        isAbstract: true
    })
], AdminCreateManyInput);
exports.AdminCreateManyInput = AdminCreateManyInput;
