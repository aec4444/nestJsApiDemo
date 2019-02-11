import { Injectable, HttpService } from '@nestjs/common';
import { Team } from 'src/models/teams.model';

import { map } from 'rxjs/operators';
import { SportsDbTeam, SportsDbTeamResult } from '../models/sportsDbTeam.model';
import { TeamList } from '../mockData/teams.mock';

@Injectable()
export class TeamsService {
  private teams: Team[] = [];
  private newTeamId = 10;
  private readonly teamsUrl = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=MLB';

  constructor(private readonly httpService: HttpService) {}

  findAll(): Promise<Team[]> {
    return new Promise<Team[]>((resolve, reject) => {
      if (this.teams.length > 0) {
        resolve(this.teams);
      } else {
        this.teams = TeamList;
        resolve(TeamList);

        // this.httpService.get<SportsDbTeamResult>(this.teamsUrl).pipe(
        //   map(item => item.data.teams.map(team => {
        //     return {
        //       id: team.idTeam,
        //       name: team.strTeam,
        //       nickname: team.strAlternate,
        //       location: team.strStadiumLocation,
        //       manager: team.strManager,
        //     } as Team;
        //   })),
        // ).subscribe(data => {
        //   this.teams = data;
        //   resolve(data);
        // });
      }
    });
  }

  save(team: Team): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      this.findAll().then(data => {
        const foundIndex = this.teams.findIndex(item => {
          return item.id === team.id;
        });

        if (foundIndex >= 0) {
          // shortcut for editing
          this.teams.splice(foundIndex, 1);
        }

        if (team.id === 0) {
          // get a new id.
          team.id = this.newTeamId++;
        }
        this.teams.push(team);
      });
    });
  }
}
