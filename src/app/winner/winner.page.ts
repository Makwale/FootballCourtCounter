import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from '../match.service';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ThrowStmt } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.page.html',
  styleUrls: ['./winner.page.scss'],
})
export class WinnerPage implements OnInit {
  goals;
  goalsTeamA;
  goalsTeamB;
  teamName;
  winner = true;
  constructor(public matchService: MatchService, private router: Router,private modalController: ModalController, private alert: AlertController) { }

  ngOnInit() {
    if(this.matchService.teamsMatch[0].getGoals() > this.matchService.teamsMatch[1].getGoals()){

      this.goals = this.matchService.teamsMatch[0].getGoals();
      this.teamName = this.matchService.teamsMatch[0].getTeamName();
     
    }else if(this.matchService.teamsMatch[0].getGoals() < this.matchService.teamsMatch[1].getGoals()){
      this.goals = this.matchService.teamsMatch[1].getGoals();
      this.teamName = this.matchService.teamsMatch[1].getTeamName();
  
    }else{
      this.goalsTeamA = this.matchService.teamsMatch[0];
      this.goalsTeamB  = this.matchService.teamsMatch[1];
      this.winner = false;
    }
  }

  close(){
    this.matchService.teamsMatch = [];
    this.modalController.dismiss()
    this.router.navigateByUrl("home");
    
  }

}
