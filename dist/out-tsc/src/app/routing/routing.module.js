var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersComponent } from '../users/users.component';
import { RepositoriesComponent } from '../repositories/repositories.component';
import { NotFoundComponent } from '../not-found/not-found.component';
// Defining Routes
var routes = [
    { path: "users", component: UsersComponent },
    { path: "Repositories", component: RepositoriesComponent },
    { path: "", redirectTo: "/users", pathMatch: "full" },
    { path: '**', component: NotFoundComponent }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule.forRoot(routes)
            ],
            exports: [RouterModule],
            declarations: []
        })
    ], RoutingModule);
    return RoutingModule;
}());
export { RoutingModule };
//# sourceMappingURL=routing.module.js.map