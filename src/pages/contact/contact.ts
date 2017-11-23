import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataSharing } from '../../shared/data-sharing.service';


@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  screenX: number;
  isMobile: boolean;
  constructor(public navCtrl: NavController, private dataSharing: DataSharing, public navParams: NavParams) {
    this.isMobile = this.dataSharing.getIsMobile();
    this.screenX = this.dataSharing.getScreenX();
  }
}
