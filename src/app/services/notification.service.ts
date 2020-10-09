import { Injectable } from "@angular/core";
import { NotifierService } from "angular-notifier";

import * as toastr from "toastr";

@Injectable({
  providedIn: "root"
})
export class NotificationService {
  public info(message: string) {
    toastr.info(message);
  }

  public success(message: string) {
    toastr.success(message);
  }

    public error(message: string) {
    toastr.error(message);
  }
}
