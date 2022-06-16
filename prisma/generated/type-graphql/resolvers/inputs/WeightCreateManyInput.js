"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let WeightCreateManyInput = class WeightCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WeightCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], WeightCreateManyInput.prototype, "weight", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], WeightCreateManyInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WeightCreateManyInput.prototype, "athleteId", void 0);
WeightCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WeightCreateManyInput", {
        isAbstract: true
    })
], WeightCreateManyInput);
exports.WeightCreateManyInput = WeightCreateManyInput;
