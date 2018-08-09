import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule  } from "@angular/platform-browser/animations";
import { MaterialModule } from './Shared/material.module';

import { AppRoutingModule } from "./Shared/app-routing.module"

import { SkillsComponent  } from "./skills.component";
import { WorkHistoryComponent  } from "./work-history.component";
import { PageNotFoundComponent  } from "./page-not-found.component";

import { AppComponent } from './app.component';
import { SkillsService } from './Services/skills.service';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    WorkHistoryComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [SkillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
