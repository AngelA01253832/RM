"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutToDoWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let WorkoutToDoWhereUniqueInput = class WorkoutToDoWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkoutToDoWhereUniqueInput.prototype, "id", void 0);
WorkoutToDoWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkoutToDoWhereUniqueInput", {
        isAbstract: true
    })
], WorkoutToDoWhereUniqueInput);
exports.WorkoutToDoWhereUniqueInput = WorkoutToDoWhereUniqueInput;
