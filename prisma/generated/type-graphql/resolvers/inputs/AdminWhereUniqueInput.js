"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AdminWhereUniqueInput = class AdminWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdminWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdminWhereUniqueInput.prototype, "schoolId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdminWhereUniqueInput.prototype, "userId", void 0);
AdminWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AdminWhereUniqueInput", {
        isAbstract: true
    })
], AdminWhereUniqueInput);
exports.AdminWhereUniqueInput = AdminWhereUniqueInput;
