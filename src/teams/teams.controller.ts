import { Get, Post, Controller, Put, Body, UsePipes } from '@nestjs/common';
import { Team } from 'src/models/teams.model';
import { TeamList } from 'src/mockData/teams.mock';
import { TeamsService } from './teams.service';
import { ValidationPipe } from 'src/validation/validation.pipe';
import { TeamDto } from 'src/dto/teams.dto';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamService: TeamsService) {}

  @Get()
  async findAll(): Promise<Team[]> {
    return this.teamService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async save(@Body() team: TeamDto): Promise<Team> {
    this.teamService.save(team);
    return team;
  }
}
