import { Skill  } from "./skill.Model";
import { start } from "repl";

export class WorkPlace {
    workPlaceName: string;
    startDate: Date;
    endDate: Date;
    position: string;
    workedOn: Skill[] = [];

    constructor(workPlaceName: string, startDate: Date, endDate: Date, position: string, workedOn: Skill[]) {
        this.workPlaceName = workPlaceName;
        this.startDate = startDate;
        this.endDate = endDate;
        this.position = position;
        this.workedOn = workedOn;
    }
}