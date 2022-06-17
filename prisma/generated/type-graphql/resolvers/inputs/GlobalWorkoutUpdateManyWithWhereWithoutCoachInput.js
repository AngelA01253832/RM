"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalWorkoutUpdateManyWithWhereWithoutCoachInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlobalWorkoutScalarWhereInput_1 = require("../inputs/GlobalWorkoutScalarWhereInput");
const GlobalWorkoutUpdateManyMutationInput_1 = require("../inputs/GlobalWorkoutUpdateManyMutationInput");
let GlobalWorkoutUpdateManyWithWhereWithoutCoachInput = class GlobalWorkoutUpdateManyWithWhereWithoutCoachInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutScalarWhereInput_1.GlobalWorkoutScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutScalarWhereInput_1.GlobalWorkoutScalarWhereInput)
], GlobalWorkoutUpdateManyWithWhereWithoutCoachInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutUpdateManyMutationInput_1.GlobalWorkoutUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutUpdateManyMutationInput_1.GlobalWorkoutUpdateManyMutationInput)
], GlobalWorkoutUpdateManyWithWhereWithoutCoachInput.prototype, "data", void 0);
GlobalWorkoutUpdateManyWithWhereWithoutCoachInput = tslib_1.__decorate([
    TypeGraphQL.InputType("GlobalWorkoutUpdateManyWithWhereWithoutCoachInput", {
        isAbstract: true
    })
], GlobalWorkoutUpdateManyWithWhereWithoutCoachInput);
exports.GlobalWorkoutUpdateManyWithWhereWithoutCoachInput = GlobalWorkoutUpdateManyWithWhereWithoutCoachInput;
