import { Injectable } from '@angular/core';

import { NotificationService} from './notification.service';

import issues from '../data/backlog.json'
import users from '../data/users.json'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private notifications:NotificationService) { }

  issues = null;

  getIssues() {

    // Load the issues from local storage if 
    // there are any.
    var issuesList = this.load("issues");
    console.log(issuesList);
    if (issuesList) {
      return issuesList;
    } else {
      // If there are not issues in local storage
      // we'll return the inital set of issues from
      // the file system
      return issues;
    }
  }

  save(parameter, data) {
    localStorage.setItem(parameter, JSON.stringify(data));
  }

  load(parameter) {
    return JSON.parse(localStorage.getItem(parameter));
  }


  getUsers() {
    // Load users from file. They can't be
    // modified within the app
    return users;
  }

  reset() {
    localStorage.removeItem("issues");
    this.notifications.info('Data has been reset.');
  }
}