"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertDoneWorkoutArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DoneWorkoutCreateInput_1 = require("../../../inputs/DoneWorkoutCreateInput");
const DoneWorkoutUpdateInput_1 = require("../../../inputs/DoneWorkoutUpdateInput");
const DoneWorkoutWhereUniqueInput_1 = require("../../../inputs/DoneWorkoutWhereUniqueInput");
let UpsertDoneWorkoutArgs = class UpsertDoneWorkoutArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutWhereUniqueInput_1.DoneWorkoutWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DoneWorkoutWhereUniqueInput_1.DoneWorkoutWhereUniqueInput)
], UpsertDoneWorkoutArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutCreateInput_1.DoneWorkoutCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DoneWorkoutCreateInput_1.DoneWorkoutCreateInput)
], UpsertDoneWorkoutArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutUpdateInput_1.DoneWorkoutUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DoneWorkoutUpdateInput_1.DoneWorkoutUpdateInput)
], UpsertDoneWorkoutArgs.prototype, "update", void 0);
UpsertDoneWorkoutArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertDoneWorkoutArgs);
exports.UpsertDoneWorkoutArgs = UpsertDoneWorkoutArgs;
