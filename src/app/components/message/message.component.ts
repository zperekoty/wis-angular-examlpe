import { Component, Input } from "@angular/core";
import { IResponse } from "src/types";

@Component({
  selector: "wis-message",
  templateUrl: "./message.component.html",
})
export class MessageComponent {
  @Input() response: IResponse;
}
