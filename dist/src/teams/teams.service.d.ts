import { Team } from 'src/models/teams.model';
export declare class TeamsService {
    private teams;
    findAll(): Team[];
    create(team: Team): void;
    edit(team: Team): void;
}
