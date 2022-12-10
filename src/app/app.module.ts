import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AngularComponent } from "./svg/angular/angular.component";
import { GithubComponent } from "./svg/github/github.component";
import { TelegramComponent } from "./svg/telegram/telegram.component";
import { MainComponent } from "./components/main/main.component";
import { FormComponent } from "./components/form/form.component";
import { FooterComponent } from "./components/footer/footer.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MessageComponent } from './components/message/message.component';
import { InfoComponent } from './components/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AngularComponent,
    GithubComponent,
    TelegramComponent,
    MainComponent,
    FormComponent,
    FooterComponent,
    MessageComponent,
    InfoComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
