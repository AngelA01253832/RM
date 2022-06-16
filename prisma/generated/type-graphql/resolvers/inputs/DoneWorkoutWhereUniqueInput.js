"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoneWorkoutWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DoneWorkoutWhereUniqueInput = class DoneWorkoutWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DoneWorkoutWhereUniqueInput.prototype, "id", void 0);
DoneWorkoutWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DoneWorkoutWhereUniqueInput", {
        isAbstract: true
    })
], DoneWorkoutWhereUniqueInput);
exports.DoneWorkoutWhereUniqueInput = DoneWorkoutWhereUniqueInput;
