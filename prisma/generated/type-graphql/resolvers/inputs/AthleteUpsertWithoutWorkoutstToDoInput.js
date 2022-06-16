"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AthleteUpsertWithoutWorkoutstToDoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteCreateWithoutWorkoutstToDoInput_1 = require("../inputs/AthleteCreateWithoutWorkoutstToDoInput");
const AthleteUpdateWithoutWorkoutstToDoInput_1 = require("../inputs/AthleteUpdateWithoutWorkoutstToDoInput");
let AthleteUpsertWithoutWorkoutstToDoInput = class AthleteUpsertWithoutWorkoutstToDoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteUpdateWithoutWorkoutstToDoInput_1.AthleteUpdateWithoutWorkoutstToDoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AthleteUpdateWithoutWorkoutstToDoInput_1.AthleteUpdateWithoutWorkoutstToDoInput)
], AthleteUpsertWithoutWorkoutstToDoInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AthleteCreateWithoutWorkoutstToDoInput_1.AthleteCreateWithoutWorkoutstToDoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AthleteCreateWithoutWorkoutstToDoInput_1.AthleteCreateWithoutWorkoutstToDoInput)
], AthleteUpsertWithoutWorkoutstToDoInput.prototype, "create", void 0);
AthleteUpsertWithoutWorkoutstToDoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AthleteUpsertWithoutWorkoutstToDoInput", {
        isAbstract: true
    })
], AthleteUpsertWithoutWorkoutstToDoInput);
exports.AthleteUpsertWithoutWorkoutstToDoInput = AthleteUpsertWithoutWorkoutstToDoInput;
