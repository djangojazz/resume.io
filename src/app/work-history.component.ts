import { Component, OnInit } from '@angular/core';
import { WorkPlace } from './Models/workPlace.Model';
import { JobHistoryService } from './Services/jobHistory.service';

@Component({
    templateUrl: 'work-history.component.html'
})
export class WorkHistoryComponent implements OnInit {
    Jobs: WorkPlace[] = [];

    constructor(private jobHistoryService: JobHistoryService) {}

    ngOnInit(): void {
        this.jobHistoryService.ListCurrentJobs()
            .subscribe(jobs => this.Jobs = jobs,
            error => console.log(error));
    } 
}
