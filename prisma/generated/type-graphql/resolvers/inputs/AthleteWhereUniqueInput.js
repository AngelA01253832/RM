"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AthleteWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AthleteWhereUniqueInput = class AthleteWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AthleteWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AthleteWhereUniqueInput.prototype, "schoolId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AthleteWhereUniqueInput.prototype, "userId", void 0);
AthleteWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AthleteWhereUniqueInput", {
        isAbstract: true
    })
], AthleteWhereUniqueInput);
exports.AthleteWhereUniqueInput = AthleteWhereUniqueInput;
