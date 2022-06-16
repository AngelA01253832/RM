"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUpdateOneWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AdminCreateOrConnectWithoutUserInput_1 = require("../inputs/AdminCreateOrConnectWithoutUserInput");
const AdminCreateWithoutUserInput_1 = require("../inputs/AdminCreateWithoutUserInput");
const AdminUpdateWithoutUserInput_1 = require("../inputs/AdminUpdateWithoutUserInput");
const AdminUpsertWithoutUserInput_1 = require("../inputs/AdminUpsertWithoutUserInput");
const AdminWhereUniqueInput_1 = require("../inputs/AdminWhereUniqueInput");
let AdminUpdateOneWithoutUserInput = class AdminUpdateOneWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminCreateWithoutUserInput_1.AdminCreateWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdminCreateWithoutUserInput_1.AdminCreateWithoutUserInput)
], AdminUpdateOneWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminCreateOrConnectWithoutUserInput_1.AdminCreateOrConnectWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdminCreateOrConnectWithoutUserInput_1.AdminCreateOrConnectWithoutUserInput)
], AdminUpdateOneWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminUpsertWithoutUserInput_1.AdminUpsertWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdminUpsertWithoutUserInput_1.AdminUpsertWithoutUserInput)
], AdminUpdateOneWithoutUserInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AdminUpdateOneWithoutUserInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AdminUpdateOneWithoutUserInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminWhereUniqueInput_1.AdminWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdminWhereUniqueInput_1.AdminWhereUniqueInput)
], AdminUpdateOneWithoutUserInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminUpdateWithoutUserInput_1.AdminUpdateWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdminUpdateWithoutUserInput_1.AdminUpdateWithoutUserInput)
], AdminUpdateOneWithoutUserInput.prototype, "update", void 0);
AdminUpdateOneWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AdminUpdateOneWithoutUserInput", {
        isAbstract: true
    })
], AdminUpdateOneWithoutUserInput);
exports.AdminUpdateOneWithoutUserInput = AdminUpdateOneWithoutUserInput;
