import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.scss']
})
export class NewActivityComponent implements OnInit {
  constructor(private route: Router, public modalController: ModalController) { }

  ngOnInit(): void { }

  public onClose(): void {
    this.modalController.dismiss();
    
    this.route.navigateByUrl('activities/board');
  }
}