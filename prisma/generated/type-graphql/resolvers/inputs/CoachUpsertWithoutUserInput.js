"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachUpsertWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CoachCreateWithoutUserInput_1 = require("../inputs/CoachCreateWithoutUserInput");
const CoachUpdateWithoutUserInput_1 = require("../inputs/CoachUpdateWithoutUserInput");
let CoachUpsertWithoutUserInput = class CoachUpsertWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachUpdateWithoutUserInput_1.CoachUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CoachUpdateWithoutUserInput_1.CoachUpdateWithoutUserInput)
], CoachUpsertWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachCreateWithoutUserInput_1.CoachCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CoachCreateWithoutUserInput_1.CoachCreateWithoutUserInput)
], CoachUpsertWithoutUserInput.prototype, "create", void 0);
CoachUpsertWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CoachUpsertWithoutUserInput", {
        isAbstract: true
    })
], CoachUpsertWithoutUserInput);
exports.CoachUpsertWithoutUserInput = CoachUpsertWithoutUserInput;
