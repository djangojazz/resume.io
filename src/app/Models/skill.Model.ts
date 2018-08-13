import { Link } from "./link.Model";

export class Skill {
    MainSkill: string;
    SubSkills: string[] = [];
    Links: Link[] = [];

    constructor(mainSkill: string, subSkills?: string[], links?: Link[]) {
        this.MainSkill = mainSkill;
        this.SubSkills = subSkills;
        this.Links = links;
    }
}