import { Component, OnInit } from '@angular/core';
import { MatchService } from '../match.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {
  displayedColumns: string[] = ['tname', 'goals', 'yellowCards', 'redCards', 'offsides'];
  dataSource;
  constructor(private matchService: MatchService) { }

  ngOnInit() {
    this.dataSource = this.matchService.teamsMatch;
  }

}
