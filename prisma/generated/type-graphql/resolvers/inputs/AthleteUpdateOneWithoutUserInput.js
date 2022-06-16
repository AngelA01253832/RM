"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AthleteUpdateOneWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteCreateOrConnectWithoutUserInput_1 = require("../inputs/AthleteCreateOrConnectWithoutUserInput");
const AthleteCreateWithoutUserInput_1 = require("../inputs/AthleteCreateWithoutUserInput");
const AthleteUpdateWithoutUserInput_1 = require("../inputs/AthleteUpdateWithoutUserInput");
const AthleteUpsertWithoutUserInput_1 = require("../inputs/AthleteUpsertWithoutUserInput");
const AthleteWhereUniqueInput_1 = require("../inputs/AthleteWhereUniqueInput");
let AthleteUpdateOneWithoutUserInput = class AthleteUpdateOneWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteCreateWithoutUserInput_1.AthleteCreateWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteCreateWithoutUserInput_1.AthleteCreateWithoutUserInput)
], AthleteUpdateOneWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteCreateOrConnectWithoutUserInput_1.AthleteCreateOrConnectWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteCreateOrConnectWithoutUserInput_1.AthleteCreateOrConnectWithoutUserInput)
], AthleteUpdateOneWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteUpsertWithoutUserInput_1.AthleteUpsertWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteUpsertWithoutUserInput_1.AthleteUpsertWithoutUserInput)
], AthleteUpdateOneWithoutUserInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AthleteUpdateOneWithoutUserInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AthleteUpdateOneWithoutUserInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteWhereUniqueInput_1.AthleteWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteWhereUniqueInput_1.AthleteWhereUniqueInput)
], AthleteUpdateOneWithoutUserInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteUpdateWithoutUserInput_1.AthleteUpdateWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteUpdateWithoutUserInput_1.AthleteUpdateWithoutUserInput)
], AthleteUpdateOneWithoutUserInput.prototype, "update", void 0);
AthleteUpdateOneWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AthleteUpdateOneWithoutUserInput", {
        isAbstract: true
    })
], AthleteUpdateOneWithoutUserInput);
exports.AthleteUpdateOneWithoutUserInput = AthleteUpdateOneWithoutUserInput;
