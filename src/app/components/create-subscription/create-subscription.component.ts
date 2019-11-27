import { Component } from '@angular/core';

import { Subscription } from '../../models/subscription';
import {SubscriptionService} from '../../services/subscription.service';

@Component({
  selector: 'app-create-subscription',
  templateUrl: './create-subscription.component.html',
  styleUrls: ['./create-subscription.component.css']
})
export class CreateSubscriptionComponent {

  public subscription: Subscription;

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
}
