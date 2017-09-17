import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage, ContactPage, SkillsPage, ProjectsPage, DescriptionPage, WorkExperiencePage } from '../shared/pages';
import { DataSharing } from "../shared/data-sharing.service";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,ProjectsPage,DescriptionPage,WorkExperiencePage,
    ContactPage,SkillsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,ProjectsPage,DescriptionPage,WorkExperiencePage,
    ContactPage,SkillsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,DataSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
