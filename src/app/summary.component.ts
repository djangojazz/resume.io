import { Component, OnInit } from '@angular/core';
import { Skill } from './Models/skill.Model';
import { WorkPlace } from './Models/workPlace.Model';
import { SummaryService } from './Services/summary.service';

@Component({
    templateUrl: 'summary.component.html'
})
export class SummaryComponent implements OnInit {
    Mission: Skill[] = [];
    Educational: WorkPlace[] = [];
    AboutMe: Skill[] = [];

    constructor(private summaryService: SummaryService) {}

    ngOnInit(): void {
        this.summaryService.MissionStatement()
            .subscribe(statement => this.Mission = statement,
            error => console.log(error));
            
        this.summaryService.Education()
            .subscribe(edu => this.Educational = edu,
            error => console.log(error));

        this.summaryService.AboutMe()
            .subscribe(about => this.AboutMe = about,
            error => console.log(error));
    } 
}
