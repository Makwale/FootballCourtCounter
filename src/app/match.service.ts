import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MatchService {
  public teamsMatch: Team[] = [];

  constructor() { 

  }
  
  public addTeam(team: string){
    this.teamsMatch.push(new Team(team))
  }

  public addGoal(index: number){
    this.teamsMatch[index].setGoals();
  }

  public addYellowCard(index: number){
    
        this.teamsMatch[index].setYellowCards();
 
  }

  
  public addRedCard(index: number){
    
    this.teamsMatch[index].setRedCards();
    
  }

  
  public addOffside(index: number){
    
    this.teamsMatch[index].setOffisides();
  }

  subGoal(index: number){
    if(this.teamsMatch[index].getGoals() > 0)
      this.teamsMatch[index].subGoal()
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
   public subGoal(){
     this.goals--;
   }

}