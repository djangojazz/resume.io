import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SkillsComponent } from '../skills.component';
import { WorkHistoryComponent } from '../work-history.component';
import { PageNotFoundComponent } from '../page-not-found.component';
import { SummaryComponent } from '../summary.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'summary', component: SummaryComponent },
      { path: 'skillsAndCerts', component: SkillsComponent },
      { path: 'workHistory', component: WorkHistoryComponent },
      { path: '', redirectTo: 'skillsAndCerts', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ])
    //, { enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }