import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage, ContactPage, SkillsPage, ProjectsPage, WorkExperiencePage } from '../shared/pages';
import { DataSharing } from "../shared/data-sharing.service";


@Component({
  templateUrl: 'app.html',
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(public events: Events, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private dataSharing: DataSharing) {
    this.initializeApp();
    if (platform.is('mobile')) {
      dataSharing.setIsMobile(true);
    }
    else {
      dataSharing.setIsMobile(false);
    }
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Work Experience', component: WorkExperiencePage },
      { title: 'Skills & Competencies', component: SkillsPage },
      { title: 'Personal Projects', component: ProjectsPage },
      { title: 'Contact', component: ContactPage },

    ];

    this.dataSharing.setScreenX(window.screen.width);
    this.dataSharing.setScreenY(window.screen.height);
  }
  onResize(event) {
    console.log('fired!');
    this.dataSharing.setScreenX(event.target.innerWidth); // window width
    if (this.platform.is('mobile')) {
      this.dataSharing.setIsMobile(true);
    }
    else {
      this.dataSharing.setIsMobile(false);
    }
    this.events.publish('window changed');
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
