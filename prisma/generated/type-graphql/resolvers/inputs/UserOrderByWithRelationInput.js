"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountOrderByRelationAggregateInput_1 = require("../inputs/AccountOrderByRelationAggregateInput");
const AdminOrderByWithRelationInput_1 = require("../inputs/AdminOrderByWithRelationInput");
const AthleteOrderByWithRelationInput_1 = require("../inputs/AthleteOrderByWithRelationInput");
const CoachOrderByWithRelationInput_1 = require("../inputs/CoachOrderByWithRelationInput");
const SessionOrderByRelationAggregateInput_1 = require("../inputs/SessionOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let UserOrderByWithRelationInput = class UserOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountOrderByRelationAggregateInput_1.AccountOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountOrderByRelationAggregateInput_1.AccountOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionOrderByRelationAggregateInput_1.SessionOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionOrderByRelationAggregateInput_1.SessionOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "sessions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachOrderByWithRelationInput_1.CoachOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachOrderByWithRelationInput_1.CoachOrderByWithRelationInput)
], UserOrderByWithRelationInput.prototype, "Coach", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteOrderByWithRelationInput_1.AthleteOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteOrderByWithRelationInput_1.AthleteOrderByWithRelationInput)
], UserOrderByWithRelationInput.prototype, "Athlete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminOrderByWithRelationInput_1.AdminOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdminOrderByWithRelationInput_1.AdminOrderByWithRelationInput)
], UserOrderByWithRelationInput.prototype, "Admin", void 0);
UserOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserOrderByWithRelationInput", {
        isAbstract: true
    })
], UserOrderByWithRelationInput);
exports.UserOrderByWithRelationInput = UserOrderByWithRelationInput;
