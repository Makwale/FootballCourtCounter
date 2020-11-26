import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from '../match.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  team = "First";
  index;
  teamA: string;
  constructor(private router: Router, public matchService: MatchService, private toastController: ToastController) {
    this.matchService.teamsMatch.length;
  }

  navigateToMach(){
     this.router.navigateByUrl("footballmatch");
  }

  async addTeam(teamName){

    if(teamName.value == this.teamA){
      const toast3 = await this.toastController.create({
        message: teamName.value + " cannot be added more than once",
        duration: 3000,
        color: "danger"

      })

      toast3.present()

      return ""
    }
    
    if(this.matchService.teamsMatch.length < 2){
        if((<string>teamName.value).length > 0){
          this.matchService.addTeam(teamName.value);
        this.team = "Second";
          this.teamA = teamName.value;
        const toast = await this.toastController.create({
          message: teamName.value + " has been added",
          duration: 3000,
          color: "success"

        })

        toast.present()

        teamName.value = "";
        if(this.matchService.teamsMatch.length == 2){
          this.team = "First";
          this.router.navigateByUrl("footballmatch")
        }
      }else{
        const toast2 = await this.toastController.create({
          message: "Team Name cannot be empty",
          duration: 4000,
          color : "danger"
        });

        toast2.present();
      }
    }

    
  }

}
