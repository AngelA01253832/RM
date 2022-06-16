"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCoachArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CoachUpdateInput_1 = require("../../../inputs/CoachUpdateInput");
const CoachWhereUniqueInput_1 = require("../../../inputs/CoachWhereUniqueInput");
let UpdateCoachArgs = class UpdateCoachArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachUpdateInput_1.CoachUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CoachUpdateInput_1.CoachUpdateInput)
], UpdateCoachArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CoachWhereUniqueInput_1.CoachWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CoachWhereUniqueInput_1.CoachWhereUniqueInput)
], UpdateCoachArgs.prototype, "where", void 0);
UpdateCoachArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateCoachArgs);
exports.UpdateCoachArgs = UpdateCoachArgs;
