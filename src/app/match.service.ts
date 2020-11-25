import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MatchService {
  public teamsMatch: Team[] = [new Team("Cape Town City"),new Team("Orlando Pirates")
];
  constructor() { 
    console.log(this.teamsMatch)
  }
  
  public addTeam(team: Team){
    this.teamsMatch.push(team)
  }

  public addGoal(tname: string){
    for(let index = 0; index < this.teamsMatch.length; index++){
      if(this.teamsMatch[index] != undefined){
       let team = this.teamsMatch[index];
     
      if(team.getTeamName() === tname){
        console.log(team);
        team.setGoals();
        break;
      }
      }
    }
  }

  public addYellowCard(tname: string){
    for(let team of this.teamsMatch){
      if(team.getTeamName() == tname){
        team.setYellowCards();
        break;
      }
    }
  }

  
  public addRedCard(tname: string){
    for(let team of this.teamsMatch){
      if(team.getTeamName() == tname){
        team.setRedCards();
        break;
      }
    }
  }

  
  public addOffside(tname: string){
    for(let team of this.teamsMatch){
      if(team.getTeamName() == tname){
        team.setOffisides();
        break;
      }
    }
  }
}



class Team{

  private tname: string;
  private goals?: number;
  private yellowCards?: number;
  private redCards?: number;
  private offsides?: number;

  constructor(tname){
    this.tname = tname;
    this.goals = 0;
    this.yellowCards = 0;
    this.redCards = 0;
    this.offsides = 0;
  }

  public getTeamName() { return this.tname;}

  public getGoals(){ return this.goals;}

  public getYellowCards(){ return this.yellowCards;}
  
  public getRedCards(){ return this.redCards;}

  public getOffisides(){ return this.offsides;}

  public setTeamName(tname) {
    this.tname = tname;}

  public setGoals(){ 
    this.goals++;
  }

  public setYellowCards(){ 
    this.yellowCards++;}
  
  public setRedCards(){ 
    this.redCards++
  }

  public setOffisides(){ 
    this.offsides++;
  }

}