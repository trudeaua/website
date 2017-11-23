import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, PopoverController } from 'ionic-angular';
import { Skill } from '../../models/skills.model';
import { DataSharing } from '../../shared/data-sharing.service';
import { DescriptionPage } from '../description/description';


@IonicPage()
@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {
  hoverProjectId: any;
  projects: Skill[];
  isMobile: boolean;
  rows: any;
  screenX: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private dataSharing: DataSharing, private events: Events, private popoverCtrl: PopoverController) {
    let tempProjects = dataSharing.getProjects();
    this.screenX = this.dataSharing.getScreenX();
    this.isMobile = dataSharing.getIsMobile();
    this.projects = [];
    for (let i = 0; i < tempProjects.length; i++) {
      this.projects.push(new Skill(tempProjects[i].id, tempProjects[i].icon, tempProjects[i].label, tempProjects[i].description, tempProjects[i].link));
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
      this.setExtraProjects(3);
      this.rows = Array.from(Array(Math.ceil(this.projects.length / 3)).keys());
    }
    else {
      this.setExtraProjects(2);
      this.rows = Array.from(Array(Math.ceil(this.projects.length / 2)).keys());
    }
  }
  setExtraProjects(cols: number) {
    while (this.projects.length % cols != 0) {
      this.projects.push(new Skill(null, null, null, null));
    }
  }
  mouseOver(skillId) {
    this.hoverProjectId = skillId;
  }
  mouseOut() {
    this.hoverProjectId = null;
  }
  showDescriptionModal(skill) {
    let popover = this.popoverCtrl.create(DescriptionPage, { skill: skill });
    popover.present();
  }
}
