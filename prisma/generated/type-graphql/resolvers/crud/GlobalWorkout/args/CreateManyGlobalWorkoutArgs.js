"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyGlobalWorkoutArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlobalWorkoutCreateManyInput_1 = require("../../../inputs/GlobalWorkoutCreateManyInput");
let CreateManyGlobalWorkoutArgs = class CreateManyGlobalWorkoutArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GlobalWorkoutCreateManyInput_1.GlobalWorkoutCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyGlobalWorkoutArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyGlobalWorkoutArgs.prototype, "skipDuplicates", void 0);
CreateManyGlobalWorkoutArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyGlobalWorkoutArgs);
exports.CreateManyGlobalWorkoutArgs = CreateManyGlobalWorkoutArgs;
