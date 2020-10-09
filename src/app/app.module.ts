import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatCardModule, MatFormFieldModule, MatChipsModule, MatListModule, MatCheckboxModule } from '@angular/material';

import { NotifierModule } from 'angular-notifier';

import { RoutingModule } from './modules/routing.module';
import { AppComponent } from './components/app/app.component';
import { GroomingComponent } from './components/grooming/grooming.component';
import { IssueComponent } from './components/issue/issue.component';
import { IssuesComponent } from './components/issues/issues.component';
import { PlanningComponent } from './components/planning/planning.component';
import { AdminComponent } from './components/admin/admin.component';
import { StandupComponent } from './components/standup/standup.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// App routes
const appRoutes: Routes = [
  { path: 'grooming', component: GroomingComponent },
  { path: 'planning', component: PlanningComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'standup', component: StandupComponent },
  { path: '', redirectTo: 'standup', pathMatch: 'full' }
];


@NgModule({
  imports: [ 
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false, useHash: true }
    ),
    BrowserModule, 
    BrowserAnimationsModule,
    FormsModule, 
    RoutingModule,
    NotifierModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatChipsModule,
    MatListModule,
    MatCheckboxModule
    ],
  declarations: [ 
    AppComponent, 
    GroomingComponent, 
    IssueComponent,
    IssuesComponent,
    PlanningComponent,
    AdminComponent,
    StandupComponent,
    NavbarComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
