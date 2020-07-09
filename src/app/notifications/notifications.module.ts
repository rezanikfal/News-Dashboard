import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { MaterialModule } from "../material/material.module";



@NgModule({
  declarations: [NotificationListComponent],
  imports: [
    CommonModule,MaterialModule
  ],
  exports:[
    NotificationListComponent
  ]
})
export class NotificationsModule { }
