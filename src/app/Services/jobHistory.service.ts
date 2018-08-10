import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs"

import { WorkPlace } from '../Models/workPlace.Model';
import { Skill } from '../Models/skill.Model';

@Injectable()
export class JobHistoryService {
    ListCurrentJobs(): Observable<WorkPlace[]> {
        return of(
            [
                new WorkPlace("Jeppesen Boeing", "Wilsonville, OR", new Date("10-16-2017"), new Date("08-03-2018"), "Senior Software Developer", [
                    new Skill("Worked with very large WPF application built with Telerik controls and SOAP and restful services."),
                    new Skill("Created a process to remote debug client application binaries for testing Windows OS’s in other languages against our codebase in .NET 4.5.2 and Visual Studio 2015."),
                    new Skill("Developed and lead project for an Authorization and Authentication service based in .NET Core 2.0 for restful services to manage users.", [
                            "Relied on JSON Web Tokens (JWT) to be used in header requests for authentication.",
                            "Tested with NUnit and Mock on Data Layer and Controllers with a test config/database",
                            "Drivers of Entity Framework Core 2.0 for use with SQL Server, Postgres, and SQLite",
                            "Inversion of Control (IOC) wired up a seeding class to ensure that the database was populated with data as needed for main ‘System’ account to operate.",
                            "Controllers had authorization setup with permissions in the database passed to the JWT token so certain CRUD operations would never turn on if permission was not set.",
                            "Used Swagger to self-document the controllers and make an endpoint to hit for testing"
                        ]),
                    new Skill("Lead an effort to create a thin client web site for an admin site with Angular 6", [
                        "Chose to use restful services based in .NET Core for mocking up and injectable services in Angular using ClientHttpModule.",
                        "Routing was set up so in addition to an app.module.ts there were also sub modules based on domain area, eg: Users, Flights, History, etc.",
                        "Ensured system was async using Observables with Reactive Extensions.",
                        "Stylized everything with Material design patterns using Angular Material",
                        "Chose to use Reactive Forms to have most model validation done in the component classes versus the front end html with ngModel."
                    ]),
                ]),
                new WorkPlace("Pacific Seafood", "Clackamas, OR", new Date("01-04-2016"), new Date("09-13-2017"), ".NET Programmer", [
                    new Skill("Multiple Applications WinForms and WPF frontend utilizing Prism."),
                    new Skill("Inhouse new work request with ASP.NET MVC 5 and Web API 2.0"),
                    new Skill("Data Access with ADO.NET and EF 6, and SQL Server 2012 through SQL 2016 backend."),
                    new Skill("SQL Server Transaction Replication custom development"),
                    new Skill("Custom Mapping utility for boat tracking through third party latitude and longitude stored in a local database for reuse and exposing through a Bing Maps API in WPF."),
                    new Skill("Extensible recursive product association tracking program."),
                    new Skill("Dynamic Testing Physical QC program written with SQL 2016 temporal tables.")
                ]),
                new WorkPlace("Wellero", "Portland, OR", new Date("10-20-2014"), new Date("12-18-2015"), "Software Developer", [
                    new Skill("API development with WebApi2.0, Unity IOC, EF 6, SQL Server with Azure hosting"),
                    new Skill("Payment Gateway 3rd party custom integration lead"),
                    new Skill("Extensive testing of solution with 7,000 unit tests and 4,000 regression black box tests"),
                    new Skill("X12 EDI parsing for custom output of benefits and eligibility"),
                    new Skill("Database schema updating through T4 EF templating and complex model associations")
                ]),
                new WorkPlace("QMetrix", "Portland, OR", new Date("11-26-2012"), new Date("10-17-2014"), "Software Developer", [
                    new Skill("WPF application creation following MVVM methodology with WCF service API and Prism"),
                    new Skill("SSRS creation of reports as well as automation of SSRS web service in code"),
                    new Skill("HTML5 web forms to display mapping data with Leaflet API as well as some Google Maps v3 API"),
                    new Skill("Worked on Entity Model version 4 and 5 for database access with Linq and lambda methods")
                ]),
                new WorkPlace("FIOS, Inc", "Portland, OR", new Date("4-11-2011"), new Date("11-23-2012"), "Production Engineer", [
                    new Skill("Database programming and manipulation of multiple databases for EDI transfer "),
                    new Skill("Custom reporting structure created with procedures and stripping out XML data for client reports"),
                    new Skill("Workflow processing with C# Windows and WPF forms designs using ADO.NET and Linq to XML "),
                    new Skill("Wrote internal reporting with SSRS 2008 R2 using dynamic connections to multiple databases"),
                    new Skill("Improved legacy code to newer standards with TSQL standards of SQL 2008")
                ]),
                new WorkPlace("CoreLogic Consumer Services", "Beaverton, OR", new Date("08-16-2008"), new Date("04-08-2011"), "Systems Engineer", [
                    new Skill("Designed TSQL queries, views, indexes, stored procedures and functions for business reporting"),
                    new Skill("Troubleshot issues with the credit bureaus on monitoring and credit report products"),
                    new Skill("Worked with XML batches –10,000’s of transactions every hour 24/7/365 with support"),
                    new Skill("Created custom C# and SQL applications for processing database imports of flat files"),
                    new Skill("Created and maintained Operations Sharepoint subsite 2007"),
                    new Skill("Workarounds to SQL procedures not running properly or file imports or exports that broke"),
                ]),
                new WorkPlace("OHI Construction", "Lake Oswego, OR", new Date("01-12-2004"), new Date("08-13-2008"), "Systems/Database Administrator", [
                    new Skill("Installed/Maintained financial Database: setup, users, ledger, and accounts."),
                    new Skill("Installed Server in March of 2006 for Win Small Business Server 2003"),
                    new Skill("Entry and maintenance of Payroll, AP, AR, client data, and customized reports")
                ])
            ]
        )
    }

   
}