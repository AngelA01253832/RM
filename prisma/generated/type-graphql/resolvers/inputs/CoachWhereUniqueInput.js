"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CoachWhereUniqueInput = class CoachWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CoachWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CoachWhereUniqueInput.prototype, "schoolId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CoachWhereUniqueInput.prototype, "userId", void 0);
CoachWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CoachWhereUniqueInput", {
        isAbstract: true
    })
], CoachWhereUniqueInput);
exports.CoachWhereUniqueInput = CoachWhereUniqueInput;
