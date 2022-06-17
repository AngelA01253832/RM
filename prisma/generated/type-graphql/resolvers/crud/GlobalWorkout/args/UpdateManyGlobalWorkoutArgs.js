"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyGlobalWorkoutArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlobalWorkoutUpdateManyMutationInput_1 = require("../../../inputs/GlobalWorkoutUpdateManyMutationInput");
const GlobalWorkoutWhereInput_1 = require("../../../inputs/GlobalWorkoutWhereInput");
let UpdateManyGlobalWorkoutArgs = class UpdateManyGlobalWorkoutArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutUpdateManyMutationInput_1.GlobalWorkoutUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutUpdateManyMutationInput_1.GlobalWorkoutUpdateManyMutationInput)
], UpdateManyGlobalWorkoutArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutWhereInput_1.GlobalWorkoutWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutWhereInput_1.GlobalWorkoutWhereInput)
], UpdateManyGlobalWorkoutArgs.prototype, "where", void 0);
UpdateManyGlobalWorkoutArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyGlobalWorkoutArgs);
exports.UpdateManyGlobalWorkoutArgs = UpdateManyGlobalWorkoutArgs;
