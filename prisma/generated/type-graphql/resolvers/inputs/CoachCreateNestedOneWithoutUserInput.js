"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachCreateNestedOneWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CoachCreateOrConnectWithoutUserInput_1 = require("../inputs/CoachCreateOrConnectWithoutUserInput");
const CoachCreateWithoutUserInput_1 = require("../inputs/CoachCreateWithoutUserInput");
const CoachWhereUniqueInput_1 = require("../inputs/CoachWhereUniqueInput");
let CoachCreateNestedOneWithoutUserInput = class CoachCreateNestedOneWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachCreateWithoutUserInput_1.CoachCreateWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachCreateWithoutUserInput_1.CoachCreateWithoutUserInput)
], CoachCreateNestedOneWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachCreateOrConnectWithoutUserInput_1.CoachCreateOrConnectWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachCreateOrConnectWithoutUserInput_1.CoachCreateOrConnectWithoutUserInput)
], CoachCreateNestedOneWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachWhereUniqueInput_1.CoachWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachWhereUniqueInput_1.CoachWhereUniqueInput)
], CoachCreateNestedOneWithoutUserInput.prototype, "connect", void 0);
CoachCreateNestedOneWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CoachCreateNestedOneWithoutUserInput", {
        isAbstract: true
    })
], CoachCreateNestedOneWithoutUserInput);
exports.CoachCreateNestedOneWithoutUserInput = CoachCreateNestedOneWithoutUserInput;
