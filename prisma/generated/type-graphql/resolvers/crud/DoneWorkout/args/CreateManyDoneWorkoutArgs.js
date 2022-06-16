"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyDoneWorkoutArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DoneWorkoutCreateManyInput_1 = require("../../../inputs/DoneWorkoutCreateManyInput");
let CreateManyDoneWorkoutArgs = class CreateManyDoneWorkoutArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DoneWorkoutCreateManyInput_1.DoneWorkoutCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyDoneWorkoutArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyDoneWorkoutArgs.prototype, "skipDuplicates", void 0);
CreateManyDoneWorkoutArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyDoneWorkoutArgs);
exports.CreateManyDoneWorkoutArgs = CreateManyDoneWorkoutArgs;
