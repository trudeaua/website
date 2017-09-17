import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Skill } from '../../models/skills.model';

@IonicPage()
@Component({
  selector: 'page-description',
  templateUrl: 'description.html',
})
export class DescriptionPage {
  skill: Skill;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.skill = navParams.data.skill;
  }
}
