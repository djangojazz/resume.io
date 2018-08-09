import { Component, OnInit } from '@angular/core';
import { Skill } from './Models/skill.Model';
import { SkillsService } from './Services/skills.service';

@Component({
    templateUrl: 'skills.component.html'
})
export class SkillsComponent implements OnInit {
    Skills: Skill[] = [];
    Certs: Skill[] = [];

    constructor(private skillsService: SkillsService) {}

    ngOnInit(): void {
        this.skillsService.ListCurrentSkills()
            .subscribe(skills => this.Skills = skills,
            error => console.log(error));
            
        this.skillsService.ListCurrentCertifications()
            .subscribe(certs => this.Certs = certs,
            error => console.log(error));
    } 
}
