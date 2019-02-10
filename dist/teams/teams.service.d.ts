import { Team } from 'src/models/teams.model';
export declare class TeamsService {
    private teams;
    findAll(): Team[];
    save(team: Team): void;
}
