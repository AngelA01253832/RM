"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUpsertWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AdminCreateWithoutUserInput_1 = require("../inputs/AdminCreateWithoutUserInput");
const AdminUpdateWithoutUserInput_1 = require("../inputs/AdminUpdateWithoutUserInput");
let AdminUpsertWithoutUserInput = class AdminUpsertWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminUpdateWithoutUserInput_1.AdminUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AdminUpdateWithoutUserInput_1.AdminUpdateWithoutUserInput)
], AdminUpsertWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminCreateWithoutUserInput_1.AdminCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AdminCreateWithoutUserInput_1.AdminCreateWithoutUserInput)
], AdminUpsertWithoutUserInput.prototype, "create", void 0);
AdminUpsertWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AdminUpsertWithoutUserInput", {
        isAbstract: true
    })
], AdminUpsertWithoutUserInput);
exports.AdminUpsertWithoutUserInput = AdminUpsertWithoutUserInput;
