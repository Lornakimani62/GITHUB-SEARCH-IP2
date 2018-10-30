var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Users } from '../users';
var FinderRequestService = /** @class */ (function () {
    function FinderRequestService(http) {
        this.http = http;
        this.apiUrl = environment.apiUrl;
    }
    // A method to get user's request 
    FinderRequestService.prototype.usersRequest = function (users) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(environment.apiUrl).toPromise().then(function (data) {
                _this.users = new Users(data.avatar_url, data.email, data.location, data.html_url);
                resolve();
            }, function (error) {
                console.log("Error");
                reject(error);
            });
        });
        return promise;
    };
    FinderRequestService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], FinderRequestService);
    return FinderRequestService;
}());
export { FinderRequestService };
//# sourceMappingURL=finder-request.service.js.map