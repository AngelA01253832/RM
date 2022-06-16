"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var WeightScalarFieldEnum;
(function (WeightScalarFieldEnum) {
    WeightScalarFieldEnum["id"] = "id";
    WeightScalarFieldEnum["weight"] = "weight";
    WeightScalarFieldEnum["date"] = "date";
    WeightScalarFieldEnum["athleteId"] = "athleteId";
})(WeightScalarFieldEnum = exports.WeightScalarFieldEnum || (exports.WeightScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(WeightScalarFieldEnum, {
    name: "WeightScalarFieldEnum",
    description: undefined,
});
