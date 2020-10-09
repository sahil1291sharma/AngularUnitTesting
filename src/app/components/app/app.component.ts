import { Component } from '@angular/core';

import { StateService } from '../../services/state.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  name = 'Angular';
  selectedIssue = null;

  constructor(private stateService: StateService) {
    // Subscribe to the variable that determines what sidebar should be shown
    this.stateService.selectedIssue.subscribe(selectedIssue => {
      // Show this sidbar if state is set to "query"
      this.selectedIssue = selectedIssue;
    });
   }

}
