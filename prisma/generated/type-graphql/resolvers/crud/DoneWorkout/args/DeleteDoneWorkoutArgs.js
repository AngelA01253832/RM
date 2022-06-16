"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteDoneWorkoutArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DoneWorkoutWhereUniqueInput_1 = require("../../../inputs/DoneWorkoutWhereUniqueInput");
let DeleteDoneWorkoutArgs = class DeleteDoneWorkoutArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutWhereUniqueInput_1.DoneWorkoutWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DoneWorkoutWhereUniqueInput_1.DoneWorkoutWhereUniqueInput)
], DeleteDoneWorkoutArgs.prototype, "where", void 0);
DeleteDoneWorkoutArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteDoneWorkoutArgs);
exports.DeleteDoneWorkoutArgs = DeleteDoneWorkoutArgs;
