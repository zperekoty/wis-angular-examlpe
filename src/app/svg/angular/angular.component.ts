import { Component, Input } from "@angular/core";

@Component({
  selector: "svg-angular",
  templateUrl: "./angular.component.html",
})
export class AngularComponent {
  @Input() classes: string;
}
