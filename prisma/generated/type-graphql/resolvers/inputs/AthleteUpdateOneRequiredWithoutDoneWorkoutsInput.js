"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AthleteUpdateOneRequiredWithoutDoneWorkoutsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteCreateOrConnectWithoutDoneWorkoutsInput_1 = require("../inputs/AthleteCreateOrConnectWithoutDoneWorkoutsInput");
const AthleteCreateWithoutDoneWorkoutsInput_1 = require("../inputs/AthleteCreateWithoutDoneWorkoutsInput");
const AthleteUpdateWithoutDoneWorkoutsInput_1 = require("../inputs/AthleteUpdateWithoutDoneWorkoutsInput");
const AthleteUpsertWithoutDoneWorkoutsInput_1 = require("../inputs/AthleteUpsertWithoutDoneWorkoutsInput");
const AthleteWhereUniqueInput_1 = require("../inputs/AthleteWhereUniqueInput");
let AthleteUpdateOneRequiredWithoutDoneWorkoutsInput = class AthleteUpdateOneRequiredWithoutDoneWorkoutsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteCreateWithoutDoneWorkoutsInput_1.AthleteCreateWithoutDoneWorkoutsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteCreateWithoutDoneWorkoutsInput_1.AthleteCreateWithoutDoneWorkoutsInput)
], AthleteUpdateOneRequiredWithoutDoneWorkoutsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteCreateOrConnectWithoutDoneWorkoutsInput_1.AthleteCreateOrConnectWithoutDoneWorkoutsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteCreateOrConnectWithoutDoneWorkoutsInput_1.AthleteCreateOrConnectWithoutDoneWorkoutsInput)
], AthleteUpdateOneRequiredWithoutDoneWorkoutsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteUpsertWithoutDoneWorkoutsInput_1.AthleteUpsertWithoutDoneWorkoutsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteUpsertWithoutDoneWorkoutsInput_1.AthleteUpsertWithoutDoneWorkoutsInput)
], AthleteUpdateOneRequiredWithoutDoneWorkoutsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteWhereUniqueInput_1.AthleteWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteWhereUniqueInput_1.AthleteWhereUniqueInput)
], AthleteUpdateOneRequiredWithoutDoneWorkoutsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteUpdateWithoutDoneWorkoutsInput_1.AthleteUpdateWithoutDoneWorkoutsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteUpdateWithoutDoneWorkoutsInput_1.AthleteUpdateWithoutDoneWorkoutsInput)
], AthleteUpdateOneRequiredWithoutDoneWorkoutsInput.prototype, "update", void 0);
AthleteUpdateOneRequiredWithoutDoneWorkoutsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AthleteUpdateOneRequiredWithoutDoneWorkoutsInput", {
        isAbstract: true
    })
], AthleteUpdateOneRequiredWithoutDoneWorkoutsInput);
exports.AthleteUpdateOneRequiredWithoutDoneWorkoutsInput = AthleteUpdateOneRequiredWithoutDoneWorkoutsInput;
