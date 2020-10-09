import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  // --- Selected issue State ---
  private _selectedIssue = null;
  selectIssue(issue) {
    this._selectedIssue.next(issue);
  }
  get selectedIssue() {
    return this._selectedIssue;
  }

  constructor() { 
    this._selectedIssue = new BehaviorSubject(null);
  }

  clearIssueSelection(){
    this.selectIssue(null);
  }

}