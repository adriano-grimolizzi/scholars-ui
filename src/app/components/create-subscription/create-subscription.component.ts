import {Component, OnInit} from '@angular/core';

import { Subscription } from '../../models/subscription';
import {SubscriptionService} from '../../services/subscription.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-create-subscription',
  templateUrl: './create-subscription.component.html',
  styleUrls: ['./create-subscription.component.css'],
  animations: [
    trigger('openOrClosedTrigger', [
      state('open', style({
        overflow: 'hidden',
        height: '*'
      })),
      state('close', style({
        opacity: '0',
        overflow: 'hidden',
        height: '0px'
      })),
      transition('open => close', animate('500ms ease-in-out')),
      transition('close => open', animate('500ms ease-in-out'))
    ])
  ]
})
export class CreateSubscriptionComponent implements OnInit {

  public subscription: Subscription;

  public openOrClosed: string;

  constructor(private subscriptionService: SubscriptionService) {
    this.subscription = new Subscription();
  }

  ngOnInit() {
    this.openOrClosed = 'close';
  }

  createStock() {
    this.subscriptionService.saveSubscription(this.subscription);
    this.clearSubscription();
  }

  private clearSubscription() {
    this.subscription.name = '';
    this.subscription.song = '';
    this.subscription.artist = '';
  }

  switchExpanded() {
    this.openOrClosed = this.openOrClosed === 'close' ? 'open' : 'close';
  }

}
