import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import * as _ from "underscore";

import { DataService } from "./data.service";

import default_issues from "../data/backlog.json";

@Injectable({
  providedIn: "root"
})
export class IssuesService {
  private issues = [];

  constructor(private dataService: DataService) {
    this.issues = dataService.getIssues();
  }

  getIssues() {
    return this.issues;
  }

  saveIssues() {
    console.log(this.issues);
    this.dataService.save("issues", this.issues);
  }

  updateIssues(issue) {
    let uIssueIndex = _.findIndex(this.issues, function(i) {
      return i.id == issue.id;
    });
    if (uIssueIndex >= 0) {
      this.issues[uIssueIndex] = issue;
    }
  }
  deleteIssue(issue) {
    this.issues = _.filter(this.issues, function(i) {
      return i.id != issue.id;
    });
    this.dataService.save("issues", this.issues);
  }
}
