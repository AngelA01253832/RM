"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDoneWorkoutArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DoneWorkoutCreateInput_1 = require("../../../inputs/DoneWorkoutCreateInput");
let CreateDoneWorkoutArgs = class CreateDoneWorkoutArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DoneWorkoutCreateInput_1.DoneWorkoutCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DoneWorkoutCreateInput_1.DoneWorkoutCreateInput)
], CreateDoneWorkoutArgs.prototype, "data", void 0);
CreateDoneWorkoutArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateDoneWorkoutArgs);
exports.CreateDoneWorkoutArgs = CreateDoneWorkoutArgs;
