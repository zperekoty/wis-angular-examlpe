import { Component, Input } from "@angular/core";

@Component({
  selector: "svg-github",
  templateUrl: "./github.component.html",
})
export class GithubComponent {
  @Input() classes: string;
}
