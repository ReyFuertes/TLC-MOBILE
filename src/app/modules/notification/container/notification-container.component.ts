import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-container',
  templateUrl: './notification-container.component.html',
  styleUrls: ['./notification-container.component.scss']
})
export class NotificationContainerComponent implements OnInit {
  public showFilter: boolean = false;
  
  constructor() { }

  ngOnInit(): void { }
}
