import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {GroomingComponent } from '../components/grooming/grooming.component';
import {IssuesComponent } from '../components/issues/issues.component';
import {IssueComponent } from '../components/issue/issue.component';

const routes: Routes = [
  {path: 'grooming' , component: GroomingComponent},
  {path: 'issues' , component: IssuesComponent},
  {path: 'issue' , component: IssueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }