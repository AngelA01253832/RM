"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightCreateManyAthleteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let WeightCreateManyAthleteInput = class WeightCreateManyAthleteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WeightCreateManyAthleteInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], WeightCreateManyAthleteInput.prototype, "weight", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], WeightCreateManyAthleteInput.prototype, "date", void 0);
WeightCreateManyAthleteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WeightCreateManyAthleteInput", {
        isAbstract: true
    })
], WeightCreateManyAthleteInput);
exports.WeightCreateManyAthleteInput = WeightCreateManyAthleteInput;
