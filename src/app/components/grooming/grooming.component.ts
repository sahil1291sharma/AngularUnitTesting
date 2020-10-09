import { Component } from '@angular/core';

import { DataService } from '../../services/data.service';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'grooming',
  templateUrl: './grooming.component.html',
  styleUrls: ["./grooming.component.scss"]
})

export class GroomingComponent {

  users: Object;
  issues: Object;
  selectedIssue;

  constructor(private dataService: DataService, private stateService: StateService) { 
       // Subscribe to whether to show the Json paste panel
    this.stateService.selectedIssue.subscribe(selectedIssue => {
      this.selectedIssue = selectedIssue;
    });
  }

  ngOnInit() {

    // Load users
    this.users = this.dataService.getUsers();

    // Load issues from backlog
    this.issues = this.dataService.getIssues();


  }
}