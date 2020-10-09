import { Component, Input } from '@angular/core';

import { DataService } from '../../services/data.service';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'issues',
  templateUrl: './issues.component.html',
  styleUrls: [ './issues.component.scss' ]
})

export class IssuesComponent {

  //@Input() issues: any[];
  issues: any[];
  users: any[];

  constructor(private dataService: DataService, private stateService: StateService) { }

  ngOnInit() {

    // Load users
    this.users = this.dataService.getUsers();

    // Load issues from backlog
    this.issues = this.dataService.getIssues();
    console.log(this.issues);

  }

  selectIssue(issue){
    this.stateService.selectIssue(issue);
  }
}