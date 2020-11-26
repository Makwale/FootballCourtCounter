import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';


import { MatchService } from '../match.service';
import { WinnerPage } from '../winner/winner.page';

@Component({
  selector: 'app-footballmatch',
  templateUrl: './footballmatch.page.html',
  styleUrls: ['./footballmatch.page.scss'],
})
export class FootballmatchPage implements OnInit {

  constructor(public matchService: MatchService, private router: Router, private modalController: ModalController ) { }

  ngOnInit() {
  }

  addGoal(index: number){
    this.matchService.addGoal(index);
  }

  addRedCard(index: number){
    this.matchService.addRedCard(index);
  }

  addYellowCard(index: number){
    this.matchService.addYellowCard(index);
  }

  addOffside(index: number){
    this.matchService.addOffside(index);
  }

  async reset(index: number){
    if(confirm("Are you sure you want to end the match?")){
      const modal = await this.modalController.create({
        component: WinnerPage
      })
  
      modal.present();
    }
  
   
  }

  navigateToStats(){
    this.router.navigateByUrl("stats");
  }

  subGoal(index){
    this.matchService.subGoal(index);
  }

}
