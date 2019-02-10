import { Team } from '../models/teams.model';
export declare class TeamDto implements Team {
    readonly name: string;
    readonly location: string;
    readonly nickname: string;
    readonly manager: string;
    readonly id: number;
}
