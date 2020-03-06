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

  public openOrClosed = 'open';

  constructor(private subscriptionService: SubscriptionService) {
    this.subscription = new Subscription();
  }

  get submitIsEnabled(): boolean {
    return this.subscription.artist != null && this.subscription.artist !== ''
        && this.subscription.name != null && this.subscription.name !== ''
        && this.subscription.song != null && this.subscription.song !== '';
  }

  get clearIsEnabled(): boolean {
    return (this.subscription.artist != null && this.subscription.artist !== '')
      || (this.subscription.name != null && this.subscription.name !== '')
      || (this.subscription.song != null && this.subscription.song !== '');
  }

  ngOnInit() {
    this.openOrClosed = 'close';
  }

  createSubscription() {
    this.subscriptionService.saveSubscription(this.subscription);
    this.clearSubscription();
    this.switchExpanded();
  }

  clearSubscription() {
    this.subscription.name = '';
    this.subscription.song = '';
    this.subscription.artist = '';
  }

  switchExpanded() {
    this.openOrClosed = this.openOrClosed === 'close' ? 'open' : 'close';
  }
}
