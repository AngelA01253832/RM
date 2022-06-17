"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteGlobalWorkoutArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlobalWorkoutWhereUniqueInput_1 = require("../../../inputs/GlobalWorkoutWhereUniqueInput");
let DeleteGlobalWorkoutArgs = class DeleteGlobalWorkoutArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutWhereUniqueInput_1.GlobalWorkoutWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutWhereUniqueInput_1.GlobalWorkoutWhereUniqueInput)
], DeleteGlobalWorkoutArgs.prototype, "where", void 0);
DeleteGlobalWorkoutArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteGlobalWorkoutArgs);
exports.DeleteGlobalWorkoutArgs = DeleteGlobalWorkoutArgs;
