import { Component } from '@angular/core';

import { Subscription } from '../../models/subscription';
import {SubscriptionService} from '../../services/subscription.service';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-create-subscription',
  templateUrl: './create-subscription.component.html',
  styleUrls: ['./create-subscription.component.css'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({transform: 'translateY(+100%)'}),
        animate('380ms ease-in', style({transform: 'translateY(0%)'}))
      ])
    ])
  ]
})
export class CreateSubscriptionComponent {

  public subscription: Subscription;

  public isExpanded = false;

  constructor(private subscriptionService: SubscriptionService) {
    this.subscription = new Subscription();
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
    this.isExpanded = !this.isExpanded;
  }
}
