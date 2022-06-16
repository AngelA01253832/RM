"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDoneWorkoutArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DoneWorkoutUpdateInput_1 = require("../../../inputs/DoneWorkoutUpdateInput");
const DoneWorkoutWhereUniqueInput_1 = require("../../../inputs/DoneWorkoutWhereUniqueInput");
let UpdateDoneWorkoutArgs = class UpdateDoneWorkoutArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutUpdateInput_1.DoneWorkoutUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DoneWorkoutUpdateInput_1.DoneWorkoutUpdateInput)
], UpdateDoneWorkoutArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutWhereUniqueInput_1.DoneWorkoutWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DoneWorkoutWhereUniqueInput_1.DoneWorkoutWhereUniqueInput)
], UpdateDoneWorkoutArgs.prototype, "where", void 0);
UpdateDoneWorkoutArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateDoneWorkoutArgs);
exports.UpdateDoneWorkoutArgs = UpdateDoneWorkoutArgs;
