import { Skill  } from "./skill.Model";

export class WorkPlace {
    WorkPlaceName: string;
    Location: string;
    StartDate: Date;
    EndDate: Date;
    Position: string;
    WorkedOn: Skill[] = [];
    
    constructor(workPlaceName: string, location: string, startDate: Date, endDate: Date, position: string, workedOn: Skill[]) {
        this.WorkPlaceName = workPlaceName;
        this.Location = location;
        this.StartDate = startDate;
        this.EndDate = endDate;
        this.Position = position;
        this.WorkedOn = workedOn;
    }
}