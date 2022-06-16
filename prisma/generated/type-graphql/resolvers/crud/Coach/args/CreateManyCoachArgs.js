"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCoachArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CoachCreateManyInput_1 = require("../../../inputs/CoachCreateManyInput");
let CreateManyCoachArgs = class CreateManyCoachArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CoachCreateManyInput_1.CoachCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyCoachArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyCoachArgs.prototype, "skipDuplicates", void 0);
CreateManyCoachArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyCoachArgs);
exports.CreateManyCoachArgs = CreateManyCoachArgs;
