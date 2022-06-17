"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalWorkoutCreateOrConnectWithoutCoachInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlobalWorkoutCreateWithoutCoachInput_1 = require("../inputs/GlobalWorkoutCreateWithoutCoachInput");
const GlobalWorkoutWhereUniqueInput_1 = require("../inputs/GlobalWorkoutWhereUniqueInput");
let GlobalWorkoutCreateOrConnectWithoutCoachInput = class GlobalWorkoutCreateOrConnectWithoutCoachInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutWhereUniqueInput_1.GlobalWorkoutWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutWhereUniqueInput_1.GlobalWorkoutWhereUniqueInput)
], GlobalWorkoutCreateOrConnectWithoutCoachInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutCreateWithoutCoachInput_1.GlobalWorkoutCreateWithoutCoachInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutCreateWithoutCoachInput_1.GlobalWorkoutCreateWithoutCoachInput)
], GlobalWorkoutCreateOrConnectWithoutCoachInput.prototype, "create", void 0);
GlobalWorkoutCreateOrConnectWithoutCoachInput = tslib_1.__decorate([
    TypeGraphQL.InputType("GlobalWorkoutCreateOrConnectWithoutCoachInput", {
        isAbstract: true
    })
], GlobalWorkoutCreateOrConnectWithoutCoachInput);
exports.GlobalWorkoutCreateOrConnectWithoutCoachInput = GlobalWorkoutCreateOrConnectWithoutCoachInput;
