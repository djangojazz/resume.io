import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs"

import { Skill } from '../Models/skill.Model';

@Injectable()
export class SkillsService {
    ListCurrentCertifications(): Observable<Skill[]> {
        return of(
            [
                new Skill(".NET Framework 4", [
                    "Data Access", 
                    "Web Applications"
                ]),
                new Skill("SQL Server 2008", [
                    "Business Intelligence Development and Maintenance", 
                    "Database Development",
                    "Implementation and Maintenance"
                ])
            ]
        )
    }

    ListCurrentSkills(): Observable<Skill[]> {
        return of(
            [
                new Skill("C# and VB.NET programming with Visual Studio 2005 - 2017 9 years - .NET 3.5 – 4.7.1", [
                        "Front End with WPF MVVM, Prism, Win Foms and some ASP.NET MVC",
                        "Data Access using EntityFramework 4-6/Core 2 and 2.1, ADO.NET, and some NHibernate",
                        "Task, Async, Parallel patterns to be used as needed for asycronous programming",
                        "Services work with WCF, WebApi2.0, Core API",
                        "Unit Testing with MSTest and NUnit with MOQ framework",
                        "Core skills with lambdas and fluent syntax as well as generics and complex object modeling"
                    ]),
                new Skill("SQL Server 2005 - 2016 for 11 years", [
                    "TSQL objects such as queries, functions, stored procedures, database creation, xml",
                    "SSRS 2008 - 2016 with customized report creation, design, and deployment"
                    ]),
                new Skill("Angular 2-6 two years", [
                    "Custom routes to be determined with route interceptors as needed.",
                    "Injectable classes like services to be used with injection of constructor component.",
                    "Work with Reactive Extensions to subscribe to changes of services asynchronously",
                    "Reactive Model validation in the Component classes"
                ]),
                new Skill("Azure cloud computing with knowledge of Storage, Servicebus Queues, WebApps, and Web Service"),
                new Skill("XML, flat file interaction and custom EDI solutions with proprietary formats"),
                new Skill("HTML5, CSS, Jquery, and some Javascript"),
                new Skill("Other minor language skills in F#, C++, PHP, Python, and Android SDK with Java")
            ]
        )	
    }
}