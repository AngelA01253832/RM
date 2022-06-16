"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAthleteArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AthleteCreateManyInput_1 = require("../../../inputs/AthleteCreateManyInput");
let CreateManyAthleteArgs = class CreateManyAthleteArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AthleteCreateManyInput_1.AthleteCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyAthleteArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyAthleteArgs.prototype, "skipDuplicates", void 0);
CreateManyAthleteArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyAthleteArgs);
exports.CreateManyAthleteArgs = CreateManyAthleteArgs;
