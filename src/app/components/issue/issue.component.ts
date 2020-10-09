import { Component, Input, Output, EventEmitter } from "@angular/core";

import * as toastr from "toastr";

import { IssuesService } from "../../services/issues.service";

@Component({
  selector: "issue",
  templateUrl: "./issue.component.html",
  styleUrls: ["./issue.component.scss"]
})
export class IssueComponent {
  @Input() users: any[];

// Two way binding for the issue pobject
  _issue: Object;
  @Output()
  issueChange = new EventEmitter<Object>();
  @Input()
  get issue() {
    return this._issue;
  }
  set issue(val) {
    this._issue = val;
    this.issueChange.emit(this._issue);
  }

  progressStates = ["new", "in progress", "done"];

  // data = {
  //   "id": 1,
  //   "assignee": null,
  //   "userStory": "As a student I can watch the lecture after the class so that I can revisit important points that I missed in class.",
  //   "priority": 100,
  //   "sprint": 2,
  //   "progress": "new",
  //   "status": "backlog"
  // }

  //   user = {
  //   "id": 2,
  //   "name": "Darius Thaiis",
  //   "userName": "dthaiis"
  // }

  constructor(private issuesService: IssuesService) {}

  ngOnInit() {}

  closeIssueView = function() {
    this.issue = null;
  };

  saveAndClose = function() {
    console.log(this.issue);
    this.issuesService.updateIssues(this.issue);
    this.issuesService.saveIssues();
    toastr.info("Issue " + this.issue.id + " has been saved.");
    this.closeIssueView();
  };

  delete = function() {
    this.issuesService.deleteIssue(this.issue);
    this.issuesService.saveIssues();
    this.closeIssueView();
  };
}
