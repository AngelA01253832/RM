"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CoachCreateWithoutUserInput_1 = require("../inputs/CoachCreateWithoutUserInput");
const CoachWhereUniqueInput_1 = require("../inputs/CoachWhereUniqueInput");
let CoachCreateOrConnectWithoutUserInput = class CoachCreateOrConnectWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachWhereUniqueInput_1.CoachWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CoachWhereUniqueInput_1.CoachWhereUniqueInput)
], CoachCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachCreateWithoutUserInput_1.CoachCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CoachCreateWithoutUserInput_1.CoachCreateWithoutUserInput)
], CoachCreateOrConnectWithoutUserInput.prototype, "create", void 0);
CoachCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CoachCreateOrConnectWithoutUserInput", {
        isAbstract: true
    })
], CoachCreateOrConnectWithoutUserInput);
exports.CoachCreateOrConnectWithoutUserInput = CoachCreateOrConnectWithoutUserInput;
