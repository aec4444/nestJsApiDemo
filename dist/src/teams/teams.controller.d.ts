import { Team } from 'src/models/teams.model';
import { TeamsService } from './teams.service';
export declare class TeamsController {
    private readonly teamService;
    constructor(teamService: TeamsService);
    findAll(): Promise<Team[]>;
    create(team: Team): Promise<void>;
    edit(team: Team): Promise<void>;
}
