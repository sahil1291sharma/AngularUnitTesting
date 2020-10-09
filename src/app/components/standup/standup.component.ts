import { Component } from "@angular/core";

import { DataService } from "../../services/data.service";
import { IssuesService } from "../../services/issues.service";
import { NotificationService } from "../../services/notification.service";

@Component({
  selector: "standup",
  templateUrl: "./standup.component.html",
  styleUrls: ["./standup.component.scss"]
})
export class StandupComponent {
  private issues = [];

  constructor(
    private dataService: DataService,
    private issuesService: IssuesService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.issues = this.issuesService.getIssues();
  }

  setProgress = function(issue, progress) {
    issue.progress = progress;
    this.notificationService.success(
      "Issue #" + issue.id + " has been moved to " + progress
    );

    this.issuesService.saveIssues();
  };
}
