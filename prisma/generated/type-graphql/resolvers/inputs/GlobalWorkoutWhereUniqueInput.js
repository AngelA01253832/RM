"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalWorkoutWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let GlobalWorkoutWhereUniqueInput = class GlobalWorkoutWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlobalWorkoutWhereUniqueInput.prototype, "id", void 0);
GlobalWorkoutWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("GlobalWorkoutWhereUniqueInput", {
        isAbstract: true
    })
], GlobalWorkoutWhereUniqueInput);
exports.GlobalWorkoutWhereUniqueInput = GlobalWorkoutWhereUniqueInput;
