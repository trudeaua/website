import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataSharing } from "../../shared/data-sharing.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isMobile: boolean;
  screenX: number;
  constructor(public navCtrl: NavController, private dataSharing: DataSharing) {
    this.isMobile = dataSharing.getIsMobile();
    this.screenX = dataSharing.getScreenX();
  }
}
