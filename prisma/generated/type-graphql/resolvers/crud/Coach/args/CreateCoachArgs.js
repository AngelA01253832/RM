"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCoachArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CoachCreateInput_1 = require("../../../inputs/CoachCreateInput");
let CreateCoachArgs = class CreateCoachArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachCreateInput_1.CoachCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CoachCreateInput_1.CoachCreateInput)
], CreateCoachArgs.prototype, "data", void 0);
CreateCoachArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateCoachArgs);
exports.CreateCoachArgs = CreateCoachArgs;
