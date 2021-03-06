var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { HttpModule } from "@angular/http";
import { IonicStorageModule } from "@ionic/storage";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
// pages
import { MyApp } from "./app.component";
import { CoinsListPage } from "../pages/coins/coins-list/coins-list";
import { AlertsListPage } from "../pages/alerts/alerts-list/alerts-list";
import { PortfolioListPage } from "../pages/portfolio/portfolio-list/portfolio-list";
// services
import { CoinsDataProvider } from "../providers/coins-data/coins-data";
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [MyApp, PortfolioListPage, CoinsListPage, AlertsListPage],
            imports: [
                BrowserModule,
                HttpModule,
                IonicModule.forRoot(MyApp),
                IonicStorageModule.forRoot()
            ],
            bootstrap: [IonicApp],
            entryComponents: [MyApp, PortfolioListPage, CoinsListPage, AlertsListPage],
            providers: [
                StatusBar,
                SplashScreen,
                { provide: ErrorHandler, useClass: IonicErrorHandler },
                CoinsDataProvider
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map