import { Component } from "@angular/core";

import * as toastr from "toastr";

import { IssuesService } from "../../services/issues.service";
import { NotificationService } from "../../services/notification.service";

@Component({
  selector: "planning",
  templateUrl: "./planning.component.html",
  styleUrls: [ './planning.component.scss' ]
})
export class PlanningComponent {
  issues: any[];

  constructor(
    private issuesService: IssuesService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.issues = this.issuesService.getIssues();
  }

  toggleIssue(issue) {
    if (issue.status != "sprint") {
      issue.status = "sprint";
      this.notificationService.success("Issue #" + issue.id + " has been added to the sprint.");
    } else {
      issue.status = "backlog";
      this.notificationService.error("Issue #" + issue.id + " has been removed from the sprint.");
    }

    this.issuesService.saveIssues();
  }
}
