import { Component, Input } from "@angular/core";

@Component({
  selector: "svg-telegram",
  templateUrl: "./telegram.component.html",
})
export class TelegramComponent {
  @Input() classes: string;
}
