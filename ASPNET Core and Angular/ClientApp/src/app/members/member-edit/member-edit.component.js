"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MemberEditComponent = /** @class */ (function () {
    /** member-edit ctor */
    function MemberEditComponent(route, alertify) {
        this.route = route;
        this.alertify = alertify;
    }
    MemberEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.user = data['user'];
        });
    };
    MemberEditComponent.prototype.updateUser = function () {
        console.log(this.user);
        this.alertify.success('Profile updated successfully');
        this.editForm.reset(this.user);
    };
    __decorate([
        core_1.ViewChild('editForm', { static: false })
    ], MemberEditComponent.prototype, "editForm", void 0);
    MemberEditComponent = __decorate([
        core_1.Component({
            selector: 'app-member-edit',
            templateUrl: './member-edit.component.html',
            styleUrls: ['./member-edit.component.css']
        })
        /** member-edit component*/
    ], MemberEditComponent);
    return MemberEditComponent;
}());
exports.MemberEditComponent = MemberEditComponent;
//# sourceMappingURL=member-edit.component.js.map