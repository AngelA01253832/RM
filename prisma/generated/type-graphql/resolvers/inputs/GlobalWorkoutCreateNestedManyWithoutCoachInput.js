"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalWorkoutCreateNestedManyWithoutCoachInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlobalWorkoutCreateManyCoachInputEnvelope_1 = require("../inputs/GlobalWorkoutCreateManyCoachInputEnvelope");
const GlobalWorkoutCreateOrConnectWithoutCoachInput_1 = require("../inputs/GlobalWorkoutCreateOrConnectWithoutCoachInput");
const GlobalWorkoutCreateWithoutCoachInput_1 = require("../inputs/GlobalWorkoutCreateWithoutCoachInput");
const GlobalWorkoutWhereUniqueInput_1 = require("../inputs/GlobalWorkoutWhereUniqueInput");
let GlobalWorkoutCreateNestedManyWithoutCoachInput = class GlobalWorkoutCreateNestedManyWithoutCoachInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GlobalWorkoutCreateWithoutCoachInput_1.GlobalWorkoutCreateWithoutCoachInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GlobalWorkoutCreateNestedManyWithoutCoachInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GlobalWorkoutCreateOrConnectWithoutCoachInput_1.GlobalWorkoutCreateOrConnectWithoutCoachInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GlobalWorkoutCreateNestedManyWithoutCoachInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlobalWorkoutCreateManyCoachInputEnvelope_1.GlobalWorkoutCreateManyCoachInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlobalWorkoutCreateManyCoachInputEnvelope_1.GlobalWorkoutCreateManyCoachInputEnvelope)
], GlobalWorkoutCreateNestedManyWithoutCoachInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GlobalWorkoutWhereUniqueInput_1.GlobalWorkoutWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GlobalWorkoutCreateNestedManyWithoutCoachInput.prototype, "connect", void 0);
GlobalWorkoutCreateNestedManyWithoutCoachInput = tslib_1.__decorate([
    TypeGraphQL.InputType("GlobalWorkoutCreateNestedManyWithoutCoachInput", {
        isAbstract: true
    })
], GlobalWorkoutCreateNestedManyWithoutCoachInput);
exports.GlobalWorkoutCreateNestedManyWithoutCoachInput = GlobalWorkoutCreateNestedManyWithoutCoachInput;
