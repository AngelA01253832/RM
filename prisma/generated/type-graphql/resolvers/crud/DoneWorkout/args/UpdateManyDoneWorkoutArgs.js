"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyDoneWorkoutArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DoneWorkoutUpdateManyMutationInput_1 = require("../../../inputs/DoneWorkoutUpdateManyMutationInput");
const DoneWorkoutWhereInput_1 = require("../../../inputs/DoneWorkoutWhereInput");
let UpdateManyDoneWorkoutArgs = class UpdateManyDoneWorkoutArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutUpdateManyMutationInput_1.DoneWorkoutUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DoneWorkoutUpdateManyMutationInput_1.DoneWorkoutUpdateManyMutationInput)
], UpdateManyDoneWorkoutArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutWhereInput_1.DoneWorkoutWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DoneWorkoutWhereInput_1.DoneWorkoutWhereInput)
], UpdateManyDoneWorkoutArgs.prototype, "where", void 0);
UpdateManyDoneWorkoutArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyDoneWorkoutArgs);
exports.UpdateManyDoneWorkoutArgs = UpdateManyDoneWorkoutArgs;
