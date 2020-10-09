import { Component } from "@angular/core";

import { DataService } from "../../services/data.service";
import { NotificationService } from "../../services/notification.service";

@Component({
  selector: "admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"]
})
export class AdminComponent {
  constructor(
    private dataService: DataService,
    private notificationService: NotificationService
  ) {}

  reset() {
    this.notificationService.info("Reset successful");
    this.dataService.reset();
  }
}
