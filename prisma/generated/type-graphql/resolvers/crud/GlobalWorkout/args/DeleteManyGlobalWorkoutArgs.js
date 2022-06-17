"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyGlobalWorkoutArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlobalWorkoutWhereInput_1 = require("../../../inputs/GlobalWorkoutWhereInput");
let DeleteManyGlobalWorkoutArgs = class DeleteManyGlobalWorkoutArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutWhereInput_1.GlobalWorkoutWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutWhereInput_1.GlobalWorkoutWhereInput)
], DeleteManyGlobalWorkoutArgs.prototype, "where", void 0);
DeleteManyGlobalWorkoutArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyGlobalWorkoutArgs);
exports.DeleteManyGlobalWorkoutArgs = DeleteManyGlobalWorkoutArgs;
