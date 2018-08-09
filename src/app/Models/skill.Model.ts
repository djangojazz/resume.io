export class Skill {
    MainSkill: string;
    SubSkills: string[] = [];

    constructor(mainSkill: string, subSkills?: string[]) {
        this.MainSkill = mainSkill;
        this.SubSkills = subSkills;
    }
}