"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachUpdateOneWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CoachCreateOrConnectWithoutUserInput_1 = require("../inputs/CoachCreateOrConnectWithoutUserInput");
const CoachCreateWithoutUserInput_1 = require("../inputs/CoachCreateWithoutUserInput");
const CoachUpdateWithoutUserInput_1 = require("../inputs/CoachUpdateWithoutUserInput");
const CoachUpsertWithoutUserInput_1 = require("../inputs/CoachUpsertWithoutUserInput");
const CoachWhereUniqueInput_1 = require("../inputs/CoachWhereUniqueInput");
let CoachUpdateOneWithoutUserInput = class CoachUpdateOneWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachCreateWithoutUserInput_1.CoachCreateWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachCreateWithoutUserInput_1.CoachCreateWithoutUserInput)
], CoachUpdateOneWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachCreateOrConnectWithoutUserInput_1.CoachCreateOrConnectWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachCreateOrConnectWithoutUserInput_1.CoachCreateOrConnectWithoutUserInput)
], CoachUpdateOneWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachUpsertWithoutUserInput_1.CoachUpsertWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachUpsertWithoutUserInput_1.CoachUpsertWithoutUserInput)
], CoachUpdateOneWithoutUserInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CoachUpdateOneWithoutUserInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CoachUpdateOneWithoutUserInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachWhereUniqueInput_1.CoachWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachWhereUniqueInput_1.CoachWhereUniqueInput)
], CoachUpdateOneWithoutUserInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachUpdateWithoutUserInput_1.CoachUpdateWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachUpdateWithoutUserInput_1.CoachUpdateWithoutUserInput)
], CoachUpdateOneWithoutUserInput.prototype, "update", void 0);
CoachUpdateOneWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CoachUpdateOneWithoutUserInput", {
        isAbstract: true
    })
], CoachUpdateOneWithoutUserInput);
exports.CoachUpdateOneWithoutUserInput = CoachUpdateOneWithoutUserInput;
