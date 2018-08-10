import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs"

import { Skill } from '../Models/skill.Model';
import { WorkPlace } from '../Models/workPlace.Model';

@Injectable()
export class SummaryService {
    MissionStatement(): Observable<Skill[]> {
        return of([
                new Skill("Full .NET stack developer that likes to try new things as they come, rather than settle for the past. I am currently enjoying coding in .NET Core 2.1 and Angular 6")
            ])
    }

    Education(): Observable<WorkPlace[]> {
        return of([
            new WorkPlace("Northern Arizona University", "Flagstaff, AZ", new Date("09-08-1998"), new Date("08-10-2001"), "Bachelor of Science Business Management", [
                new Skill("Studied Business Administration with an emphasis on Human Resources")
            ]),
        ])
    }

    AboutMe(): Observable<Skill[]> {
        return of([
                new Skill("I enjoy technology as a career and also in my spare time. I am constantly trying to learn new things and implement them." +
                "  I also like to play video games, play guitar, hike, and hangout with my family.", [
                    "See my profile on LinkedIn: https://www.linkedin.com/in/brettmorin",
                    "Check out my github repositories for some code at: https://github.com/djangojazz",
                    "Stack Overflow: https://stackoverflow.com/users/580428/djangojazz"
                ])
        ])
    }
}