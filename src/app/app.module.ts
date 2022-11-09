import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReminderComponent } from './reminder/reminder.component';
import { ReminderListComponent } from './reminder-list/reminder-list.component';
import { AddReminderComponent } from './add-reminder/add-reminder.component';

@NgModule({
  declarations: [
    AppComponent,
    ReminderComponent,
    ReminderListComponent,
    AddReminderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
