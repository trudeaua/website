import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataSharing } from '../../shared/data-sharing.service';

/**
 * Generated class for the WorkExperiencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-work-experience',
  templateUrl: 'work-experience.html',
})
export class WorkExperiencePage {
  screenX: number;
  isMobile: boolean;
  constructor(public navCtrl: NavController, private dataSharing: DataSharing, public navParams: NavParams) {
    this.isMobile = dataSharing.getIsMobile();
    this.screenX = dataSharing.getScreenX();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkExperiencePage');
  }

}
