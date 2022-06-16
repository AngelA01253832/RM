"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AthleteUpdateOneRequiredWithoutWorkoutstToDoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteCreateOrConnectWithoutWorkoutstToDoInput_1 = require("../inputs/AthleteCreateOrConnectWithoutWorkoutstToDoInput");
const AthleteCreateWithoutWorkoutstToDoInput_1 = require("../inputs/AthleteCreateWithoutWorkoutstToDoInput");
const AthleteUpdateWithoutWorkoutstToDoInput_1 = require("../inputs/AthleteUpdateWithoutWorkoutstToDoInput");
const AthleteUpsertWithoutWorkoutstToDoInput_1 = require("../inputs/AthleteUpsertWithoutWorkoutstToDoInput");
const AthleteWhereUniqueInput_1 = require("../inputs/AthleteWhereUniqueInput");
let AthleteUpdateOneRequiredWithoutWorkoutstToDoInput = class AthleteUpdateOneRequiredWithoutWorkoutstToDoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteCreateWithoutWorkoutstToDoInput_1.AthleteCreateWithoutWorkoutstToDoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteCreateWithoutWorkoutstToDoInput_1.AthleteCreateWithoutWorkoutstToDoInput)
], AthleteUpdateOneRequiredWithoutWorkoutstToDoInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteCreateOrConnectWithoutWorkoutstToDoInput_1.AthleteCreateOrConnectWithoutWorkoutstToDoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteCreateOrConnectWithoutWorkoutstToDoInput_1.AthleteCreateOrConnectWithoutWorkoutstToDoInput)
], AthleteUpdateOneRequiredWithoutWorkoutstToDoInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteUpsertWithoutWorkoutstToDoInput_1.AthleteUpsertWithoutWorkoutstToDoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteUpsertWithoutWorkoutstToDoInput_1.AthleteUpsertWithoutWorkoutstToDoInput)
], AthleteUpdateOneRequiredWithoutWorkoutstToDoInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteWhereUniqueInput_1.AthleteWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteWhereUniqueInput_1.AthleteWhereUniqueInput)
], AthleteUpdateOneRequiredWithoutWorkoutstToDoInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteUpdateWithoutWorkoutstToDoInput_1.AthleteUpdateWithoutWorkoutstToDoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AthleteUpdateWithoutWorkoutstToDoInput_1.AthleteUpdateWithoutWorkoutstToDoInput)
], AthleteUpdateOneRequiredWithoutWorkoutstToDoInput.prototype, "update", void 0);
AthleteUpdateOneRequiredWithoutWorkoutstToDoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AthleteUpdateOneRequiredWithoutWorkoutstToDoInput", {
        isAbstract: true
    })
], AthleteUpdateOneRequiredWithoutWorkoutstToDoInput);
exports.AthleteUpdateOneRequiredWithoutWorkoutstToDoInput = AthleteUpdateOneRequiredWithoutWorkoutstToDoInput;
