import { Injectable } from '@nestjs/common';
import { Team } from 'src/models/teams.model';
import { TeamList } from 'src/mockData/teams.mock';
import { timer } from 'rxjs';

@Injectable()
export class TeamsService {
  private teams: Team[] = TeamList;

  findAll(): Team[] {
    return this.teams;
  }

  save(team: Team) {
    const foundIndex = this.teams.findIndex(item => {
      return item.id === team.id;
    });

    if (foundIndex >= 0) {
      // shortcut for editing
      this.teams.splice(foundIndex, 1);
    }
    this.teams.push(team);
  }
}
