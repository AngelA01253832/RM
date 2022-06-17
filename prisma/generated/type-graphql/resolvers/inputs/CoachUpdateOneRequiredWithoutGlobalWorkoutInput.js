"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachUpdateOneRequiredWithoutGlobalWorkoutInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CoachCreateOrConnectWithoutGlobalWorkoutInput_1 = require("../inputs/CoachCreateOrConnectWithoutGlobalWorkoutInput");
const CoachCreateWithoutGlobalWorkoutInput_1 = require("../inputs/CoachCreateWithoutGlobalWorkoutInput");
const CoachUpdateWithoutGlobalWorkoutInput_1 = require("../inputs/CoachUpdateWithoutGlobalWorkoutInput");
const CoachUpsertWithoutGlobalWorkoutInput_1 = require("../inputs/CoachUpsertWithoutGlobalWorkoutInput");
const CoachWhereUniqueInput_1 = require("../inputs/CoachWhereUniqueInput");
let CoachUpdateOneRequiredWithoutGlobalWorkoutInput = class CoachUpdateOneRequiredWithoutGlobalWorkoutInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachCreateWithoutGlobalWorkoutInput_1.CoachCreateWithoutGlobalWorkoutInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachCreateWithoutGlobalWorkoutInput_1.CoachCreateWithoutGlobalWorkoutInput)
], CoachUpdateOneRequiredWithoutGlobalWorkoutInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachCreateOrConnectWithoutGlobalWorkoutInput_1.CoachCreateOrConnectWithoutGlobalWorkoutInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachCreateOrConnectWithoutGlobalWorkoutInput_1.CoachCreateOrConnectWithoutGlobalWorkoutInput)
], CoachUpdateOneRequiredWithoutGlobalWorkoutInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachUpsertWithoutGlobalWorkoutInput_1.CoachUpsertWithoutGlobalWorkoutInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachUpsertWithoutGlobalWorkoutInput_1.CoachUpsertWithoutGlobalWorkoutInput)
], CoachUpdateOneRequiredWithoutGlobalWorkoutInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachWhereUniqueInput_1.CoachWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachWhereUniqueInput_1.CoachWhereUniqueInput)
], CoachUpdateOneRequiredWithoutGlobalWorkoutInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachUpdateWithoutGlobalWorkoutInput_1.CoachUpdateWithoutGlobalWorkoutInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CoachUpdateWithoutGlobalWorkoutInput_1.CoachUpdateWithoutGlobalWorkoutInput)
], CoachUpdateOneRequiredWithoutGlobalWorkoutInput.prototype, "update", void 0);
CoachUpdateOneRequiredWithoutGlobalWorkoutInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CoachUpdateOneRequiredWithoutGlobalWorkoutInput", {
        isAbstract: true
    })
], CoachUpdateOneRequiredWithoutGlobalWorkoutInput);
exports.CoachUpdateOneRequiredWithoutGlobalWorkoutInput = CoachUpdateOneRequiredWithoutGlobalWorkoutInput;
