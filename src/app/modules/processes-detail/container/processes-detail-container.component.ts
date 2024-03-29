import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProcessesDetailState } from '../store/reducers/processes-detail.reducer';
import { LoadProcessesDetail } from '../store/actions/processes-detail.actions';

@Component({
  selector: 'app-processes-detail-container',
  templateUrl: './processes-detail-container.component.html',
  styleUrls: ['./processes-detail-container.component.scss']
})
export class ProcessesDetailContainerComponent implements OnInit {
  constructor(private store: Store<ProcessesDetailState>) {
    this.store.dispatch(new LoadProcessesDetail());
   }

  ngOnInit(): void { }
}
