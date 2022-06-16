"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AthleteUpsertWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteCreateWithoutUserInput_1 = require("../inputs/AthleteCreateWithoutUserInput");
const AthleteUpdateWithoutUserInput_1 = require("../inputs/AthleteUpdateWithoutUserInput");
let AthleteUpsertWithoutUserInput = class AthleteUpsertWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteUpdateWithoutUserInput_1.AthleteUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AthleteUpdateWithoutUserInput_1.AthleteUpdateWithoutUserInput)
], AthleteUpsertWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteCreateWithoutUserInput_1.AthleteCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AthleteCreateWithoutUserInput_1.AthleteCreateWithoutUserInput)
], AthleteUpsertWithoutUserInput.prototype, "create", void 0);
AthleteUpsertWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AthleteUpsertWithoutUserInput", {
        isAbstract: true
    })
], AthleteUpsertWithoutUserInput);
exports.AthleteUpsertWithoutUserInput = AthleteUpsertWithoutUserInput;
