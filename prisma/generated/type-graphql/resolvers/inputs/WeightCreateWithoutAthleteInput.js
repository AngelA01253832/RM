"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightCreateWithoutAthleteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let WeightCreateWithoutAthleteInput = class WeightCreateWithoutAthleteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WeightCreateWithoutAthleteInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], WeightCreateWithoutAthleteInput.prototype, "weight", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], WeightCreateWithoutAthleteInput.prototype, "date", void 0);
WeightCreateWithoutAthleteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WeightCreateWithoutAthleteInput", {
        isAbstract: true
    })
], WeightCreateWithoutAthleteInput);
exports.WeightCreateWithoutAthleteInput = WeightCreateWithoutAthleteInput;
