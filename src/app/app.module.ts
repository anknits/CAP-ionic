import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { HttpModule } from "@angular/http";
import { IonicStorageModule } from "@ionic/storage";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { FaIconComponent } from "../components/fa-icon/fa-icon.component";

// pages
import { MyApp } from "./app.component";
import { CoinsListPage } from "../pages/coins/coins-list/coins-list";
import { AlertsListPage } from "../pages/alerts/alerts-list/alerts-list";
import { AlertAddPage } from "../pages/alerts/alert-add/alert-add";
import { PortfolioListPage } from "../pages/portfolio/portfolio-list/portfolio-list";

// services
import { CoinsDataProvider } from "../providers/coins-data/coins-data";
import { AlertsDataProvider } from "../providers/alerts-data/alerts-data";

@NgModule({
  declarations: [
    MyApp,
    FaIconComponent,
    PortfolioListPage,
    CoinsListPage,
    AlertsListPage,
    AlertAddPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PortfolioListPage,
    CoinsListPage,
    AlertsListPage,
    AlertAddPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CoinsDataProvider,
    AlertsDataProvider
  ]
})
export class AppModule {}
