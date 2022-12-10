import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { FormService } from "src/app/services/form.service";
import { IError, IResponse } from "src/types";

@Component({
  selector: "wis-form",
  templateUrl: "./form.component.html",
})
export class FormComponent {
  form = new FormGroup({
    name: new FormControl<string>(""),
    telegram: new FormControl<string>(""),
    email: new FormControl<string>(""),
    phone: new FormControl<string>(""),
    message: new FormControl<string>(""),
  });

  constructor(private formService: FormService) {}

  gotValue: boolean = false;
  response: IResponse;
  error: IError = {
    name: false,
    telegram: false,
    email: false,
    phone: false,
    message: false,
  };

  submit() {
    if (
      this.form.value.name?.trim().length === 0 ||
      this.form.value.telegram?.trim().length === 0 ||
      this.form.value.email?.trim().length === 0 ||
      this.form.value.phone?.trim().length === 0 ||
      this.form.value.message?.trim().length === 0
    ) {
      this.error.name = this.form.value.name?.trim().length === 0;
      this.error.telegram = this.form.value.telegram?.trim().length === 0;
      this.error.email = this.form.value.email?.trim().length === 0;
      this.error.phone = this.form.value.phone?.trim().length === 0;
      this.error.message = this.form.value.message?.trim().length === 0;

      return setTimeout(() => {
        this.error.name = false;
        this.error.telegram = false;
        this.error.email = false;
        this.error.phone = false;
        this.error.message = false;
      }, 2000);
    }

    return this.formService
      .send({
        name: this.form.value.name as string,
        user: this.form.value.telegram as string,
        email: this.form.value.email as string,
        phone: this.form.value.phone as string,
        message: this.form.value.message as string,
      })
      .subscribe((res) => {
        this.gotValue = true;
        this.response = res;

        setTimeout(() => (this.gotValue = false), 5000);
      });
  }
}
