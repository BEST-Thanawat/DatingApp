"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var MemberListResolver = /** @class */ (function () {
    function MemberListResolver(userService, router, alertify) {
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
    }
    MemberListResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUsers().pipe(operators_1.catchError(function (error) {
            _this.alertify.error('Problem retriving data');
            _this.router.navigate(['/home']);
            return rxjs_1.of(null);
        }));
    };
    MemberListResolver = __decorate([
        core_1.Injectable()
    ], MemberListResolver);
    return MemberListResolver;
}());
exports.MemberListResolver = MemberListResolver;
//# sourceMappingURL=member-list.resolver.js.map