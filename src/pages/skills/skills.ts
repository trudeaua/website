import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, PopoverController} from 'ionic-angular';
import { Skill } from "../../models/skills.model";
import { DataSharing } from "../../shared/data-sharing.service";
import { DescriptionPage } from '../description/description';

@IonicPage()
@Component({
  selector: 'page-skills',
  templateUrl: 'skills.html',
})
export class SkillsPage {
  isMobile: boolean;
  rows: any;
  screenX: number;
  skills: Skill[];
  hoverSkillId: number;
  viewingDescription: boolean;
  constructor(public navCtrl: NavController, public events: Events, private popoverCtrl: PopoverController, public navParams: NavParams, private dataSharing: DataSharing) {
    this.viewingDescription = false;
    this.skills = [];
    this.screenX = this.dataSharing.getScreenX();
    this.isMobile = dataSharing.getIsMobile();
    let skillsTemp = dataSharing.getSkills();
    this.skills = [];
    for (let i = 0; i < skillsTemp.length; i++) {
      this.skills.push(new Skill(skillsTemp[i].id, skillsTemp[i].icon, skillsTemp[i].label, skillsTemp[i].description, skillsTemp[i].link));
    }

    this.events.subscribe('window changed', () => {
      this.viewDidLoad();
    });
    this.viewDidLoad();
  }
  viewDidLoad() {
    this.screenX = this.dataSharing.getScreenX();
    this.isMobile = this.dataSharing.getIsMobile();
    if (!this.isMobile) {
      this.setExtraSkills(3);
      this.rows = Array.from(Array(Math.ceil(this.skills.length / 3)).keys());
    }
    else {
      this.setExtraSkills(2);
      this.rows = Array.from(Array(Math.ceil(this.skills.length / 2)).keys());
    }
  }
  setExtraSkills(cols: number) {
    while (this.skills.length % cols != 0) {
      this.skills.push(new Skill(null, null, null, null));
    }
  }
  mouseOver(skillId) {
    this.hoverSkillId = skillId;
  }
  mouseOut() {
    this.hoverSkillId = null;
  }
  showDescriptionModal(skill) {
    // if (!this.viewingDescription) {
    //   this.hoverSkillId = skillId;
    // }
    // else {
    //   this.hoverSkillId = null;
    // }
    let popover = this.popoverCtrl.create(DescriptionPage, {skill: skill});
    popover.present();
  }
}
