"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AdminCountOrderByAggregateInput_1 = require("../inputs/AdminCountOrderByAggregateInput");
const AdminMaxOrderByAggregateInput_1 = require("../inputs/AdminMaxOrderByAggregateInput");
const AdminMinOrderByAggregateInput_1 = require("../inputs/AdminMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AdminOrderByWithAggregationInput = class AdminOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdminOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdminOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdminOrderByWithAggregationInput.prototype, "lastname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdminOrderByWithAggregationInput.prototype, "schoolId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdminOrderByWithAggregationInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdminOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminCountOrderByAggregateInput_1.AdminCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdminCountOrderByAggregateInput_1.AdminCountOrderByAggregateInput)
], AdminOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminMaxOrderByAggregateInput_1.AdminMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdminMaxOrderByAggregateInput_1.AdminMaxOrderByAggregateInput)
], AdminOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminMinOrderByAggregateInput_1.AdminMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdminMinOrderByAggregateInput_1.AdminMinOrderByAggregateInput)
], AdminOrderByWithAggregationInput.prototype, "_min", void 0);
AdminOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AdminOrderByWithAggregationInput", {
        isAbstract: true
    })
], AdminOrderByWithAggregationInput);
exports.AdminOrderByWithAggregationInput = AdminOrderByWithAggregationInput;
