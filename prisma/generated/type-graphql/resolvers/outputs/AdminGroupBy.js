"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AdminCountAggregate_1 = require("../outputs/AdminCountAggregate");
const AdminMaxAggregate_1 = require("../outputs/AdminMaxAggregate");
const AdminMinAggregate_1 = require("../outputs/AdminMinAggregate");
const Enum_Gender_1 = require("../../enums/Enum_Gender");
let AdminGroupBy = class AdminGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AdminGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AdminGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AdminGroupBy.prototype, "lastname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AdminGroupBy.prototype, "schoolId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Gender_1.Enum_Gender, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AdminGroupBy.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AdminGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminCountAggregate_1.AdminCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdminCountAggregate_1.AdminCountAggregate)
], AdminGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminMinAggregate_1.AdminMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdminMinAggregate_1.AdminMinAggregate)
], AdminGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminMaxAggregate_1.AdminMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdminMaxAggregate_1.AdminMaxAggregate)
], AdminGroupBy.prototype, "_max", void 0);
AdminGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AdminGroupBy", {
        isAbstract: true
    })
], AdminGroupBy);
exports.AdminGroupBy = AdminGroupBy;
