"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertGlobalWorkoutArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlobalWorkoutCreateInput_1 = require("../../../inputs/GlobalWorkoutCreateInput");
const GlobalWorkoutUpdateInput_1 = require("../../../inputs/GlobalWorkoutUpdateInput");
const GlobalWorkoutWhereUniqueInput_1 = require("../../../inputs/GlobalWorkoutWhereUniqueInput");
let UpsertGlobalWorkoutArgs = class UpsertGlobalWorkoutArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutWhereUniqueInput_1.GlobalWorkoutWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutWhereUniqueInput_1.GlobalWorkoutWhereUniqueInput)
], UpsertGlobalWorkoutArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutCreateInput_1.GlobalWorkoutCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutCreateInput_1.GlobalWorkoutCreateInput)
], UpsertGlobalWorkoutArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutUpdateInput_1.GlobalWorkoutUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutUpdateInput_1.GlobalWorkoutUpdateInput)
], UpsertGlobalWorkoutArgs.prototype, "update", void 0);
UpsertGlobalWorkoutArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertGlobalWorkoutArgs);
exports.UpsertGlobalWorkoutArgs = UpsertGlobalWorkoutArgs;
