export class Skill {
    mainSkill: string;
    subSkills: string[] = [];

    constructor(mainSkill: string, subSkills?: string[]) {
        this.mainSkill = mainSkill;
        this.subSkills = subSkills;
    }
}