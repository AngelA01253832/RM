"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGlobalWorkoutArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlobalWorkoutUpdateInput_1 = require("../../../inputs/GlobalWorkoutUpdateInput");
const GlobalWorkoutWhereUniqueInput_1 = require("../../../inputs/GlobalWorkoutWhereUniqueInput");
let UpdateGlobalWorkoutArgs = class UpdateGlobalWorkoutArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutUpdateInput_1.GlobalWorkoutUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutUpdateInput_1.GlobalWorkoutUpdateInput)
], UpdateGlobalWorkoutArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutWhereUniqueInput_1.GlobalWorkoutWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutWhereUniqueInput_1.GlobalWorkoutWhereUniqueInput)
], UpdateGlobalWorkoutArgs.prototype, "where", void 0);
UpdateGlobalWorkoutArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateGlobalWorkoutArgs);
exports.UpdateGlobalWorkoutArgs = UpdateGlobalWorkoutArgs;
