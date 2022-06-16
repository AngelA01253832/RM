"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueDoneWorkoutArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DoneWorkoutWhereUniqueInput_1 = require("../../../inputs/DoneWorkoutWhereUniqueInput");
let FindUniqueDoneWorkoutArgs = class FindUniqueDoneWorkoutArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutWhereUniqueInput_1.DoneWorkoutWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DoneWorkoutWhereUniqueInput_1.DoneWorkoutWhereUniqueInput)
], FindUniqueDoneWorkoutArgs.prototype, "where", void 0);
FindUniqueDoneWorkoutArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueDoneWorkoutArgs);
exports.FindUniqueDoneWorkoutArgs = FindUniqueDoneWorkoutArgs;
