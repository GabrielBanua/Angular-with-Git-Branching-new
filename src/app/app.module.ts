import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleComponent } from './title.component';
import { UserService } from './user.service';
import { HighlightDirective } from './highlight.directive';
import { ContactService } from './contact/contact.service';
import { ContactComponent } from './contact/contact.component';
import { ContactHighlightDirective } from './contact/contact.highlight.directive';
import { AwesomePipe } from './awesome.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  AppComponent,
  HighlightDirective,
  TitleComponent,

  AwesomePipe,
  ContactComponent,
  ContactHighlightDirective,
],
  imports: [ BrowserModule, FormsModule ],
  providers: [ ContactService, UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }