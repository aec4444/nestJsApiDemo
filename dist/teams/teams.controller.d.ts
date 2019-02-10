import { Team } from 'src/models/teams.model';
import { TeamsService } from './teams.service';
import { TeamDto } from 'src/dto/teams.dto';
export declare class TeamsController {
    private readonly teamService;
    constructor(teamService: TeamsService);
    findAll(): Promise<Team[]>;
    save(team: TeamDto): Promise<Team>;
}
