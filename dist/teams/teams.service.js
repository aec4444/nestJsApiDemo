"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const teams_mock_1 = require("src/mockData/teams.mock");
let TeamsService = class TeamsService {
    constructor() {
        this.teams = teams_mock_1.TeamList;
    }
    findAll() {
        return this.teams;
    }
    save(team) {
        const foundIndex = this.teams.findIndex(item => {
            return item.id === team.id;
        });
        if (foundIndex >= 0) {
            this.teams.splice(foundIndex, 1);
        }
        this.teams.push(team);
    }
};
TeamsService = __decorate([
    common_1.Injectable()
], TeamsService);
exports.TeamsService = TeamsService;
//# sourceMappingURL=teams.service.js.map