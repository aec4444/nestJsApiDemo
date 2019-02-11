export interface SportsDbTeam {
    idTeam: number;
    strTeam: string;
    strManager: string;
    strAlternate: string;
    strStadiumLocation: string;
}

export interface SportsDbTeamResult {
    teams: SportsDbTeam[];
}
