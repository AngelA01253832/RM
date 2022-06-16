"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyDoneWorkoutArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DoneWorkoutWhereInput_1 = require("../../../inputs/DoneWorkoutWhereInput");
let DeleteManyDoneWorkoutArgs = class DeleteManyDoneWorkoutArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutWhereInput_1.DoneWorkoutWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DoneWorkoutWhereInput_1.DoneWorkoutWhereInput)
], DeleteManyDoneWorkoutArgs.prototype, "where", void 0);
DeleteManyDoneWorkoutArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyDoneWorkoutArgs);
exports.DeleteManyDoneWorkoutArgs = DeleteManyDoneWorkoutArgs;
