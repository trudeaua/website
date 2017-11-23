import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage, ContactPage, SkillsPage, ProjectsPage, DescriptionPage, WorkExperiencePage } from '../shared/pages';
import { DataSharing } from "../shared/data-sharing.service";


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ContactPageModule } from "../pages/contact/contact.module";
import { DescriptionPageModule } from '../pages/description/description.module';
import { ProjectsPageModule } from '../pages/projects/projects.module';
import { SkillsPageModule } from '../pages/skills/skills.module';
import { WorkExperiencePageModule } from '../pages/work-experience/work-experience.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ContactPageModule,
    DescriptionPageModule,
    ProjectsPageModule,
    SkillsPageModule,
    WorkExperiencePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, ProjectsPage, DescriptionPage, WorkExperiencePage,
    ContactPage, SkillsPage
  ],
  providers: [
    StatusBar,
    SplashScreen, DataSharing,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
