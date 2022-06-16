"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_Gender_1 = require("../../enums/Enum_Gender");
let AdminMinAggregate = class AdminMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdminMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdminMinAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdminMinAggregate.prototype, "lastname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdminMinAggregate.prototype, "schoolId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Gender_1.Enum_Gender, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdminMinAggregate.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdminMinAggregate.prototype, "userId", void 0);
AdminMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AdminMinAggregate", {
        isAbstract: true
    })
], AdminMinAggregate);
exports.AdminMinAggregate = AdminMinAggregate;
