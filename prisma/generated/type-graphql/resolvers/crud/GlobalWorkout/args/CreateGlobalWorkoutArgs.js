"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGlobalWorkoutArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlobalWorkoutCreateInput_1 = require("../../../inputs/GlobalWorkoutCreateInput");
let CreateGlobalWorkoutArgs = class CreateGlobalWorkoutArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutCreateInput_1.GlobalWorkoutCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutCreateInput_1.GlobalWorkoutCreateInput)
], CreateGlobalWorkoutArgs.prototype, "data", void 0);
CreateGlobalWorkoutArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateGlobalWorkoutArgs);
exports.CreateGlobalWorkoutArgs = CreateGlobalWorkoutArgs;
