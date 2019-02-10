import { IsString, IsInt } from "class-validator";
import { Team } from '../models/teams.model';

export class TeamDto implements Team {
    @IsString() readonly name: string;
    @IsString() readonly location: string;
    @IsString() readonly nickname: string;
    @IsString() readonly manager: string;
    @IsInt() readonly id: number;
}