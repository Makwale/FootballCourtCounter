import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatchService } from '../match.service';

@Component({
  selector: 'app-footballmatch',
  templateUrl: './footballmatch.page.html',
  styleUrls: ['./footballmatch.page.scss'],
})
export class FootballmatchPage implements OnInit {

  constructor(public matchService: MatchService ) { }

  ngOnInit() {
  }

  addGoal(index: number){
    this.matchService.addGoal(this.matchService.teamsMatch[index].getTeamName());
  }

  addRedCard(tname: string){
    this.matchService.addRedCard(tname);
  }

  addYellowCard(tname: string){
    this.matchService.addYellowCard(tname);
  }

  addOffside(tname: string){
    this.matchService.addOffside(tname);
  }

}
