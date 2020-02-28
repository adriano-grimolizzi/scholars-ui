
import {Component, OnInit} from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import {Observable} from 'rxjs';
import {Subscription} from '../models/subscription';
import {SubscriptionService} from '../services/subscription.service';

@Component({
  selector: 'app-draggable',
  templateUrl: './draggable.component.html',
  styleUrls: ['./draggable.component.scss']
})
export class DraggableComponent implements OnInit {

  subscriptionList: Observable<Subscription[]>;

  displayedColumns: string[] = ['name', 'song', 'artist'];

  constructor(private subscriptionService: SubscriptionService) { }

  ngOnInit() {
    this.subscriptionList = this.subscriptionService.subscriptionList;
  }

  onDrop(event: CdkDragDrop<string[]>) {
    this.subscriptionService.switchPosition(event.previousIndex, event.currentIndex);
  }
}
