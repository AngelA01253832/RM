"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAdmin = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AdminCountAggregate_1 = require("../outputs/AdminCountAggregate");
const AdminMaxAggregate_1 = require("../outputs/AdminMaxAggregate");
const AdminMinAggregate_1 = require("../outputs/AdminMinAggregate");
let AggregateAdmin = class AggregateAdmin {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminCountAggregate_1.AdminCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdminCountAggregate_1.AdminCountAggregate)
], AggregateAdmin.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminMinAggregate_1.AdminMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdminMinAggregate_1.AdminMinAggregate)
], AggregateAdmin.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminMaxAggregate_1.AdminMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdminMaxAggregate_1.AdminMaxAggregate)
], AggregateAdmin.prototype, "_max", void 0);
AggregateAdmin = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateAdmin", {
        isAbstract: true
    })
], AggregateAdmin);
exports.AggregateAdmin = AggregateAdmin;
