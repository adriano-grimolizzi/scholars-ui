import { Injectable } from '@angular/core';
import { Subscription } from '../models/subscription';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  subscriptionList: Subscription[];

  getSubscriptionList() {
    return this.subscriptionList;
  }

  saveSubscription(subscription: Subscription) {
    this.subscriptionList.push(subscription);
  }

  constructor() {
    this.subscriptionList = [{
      name: 'Adriano',
      song: 'Black',
      artist: 'Pearl Jam'
    }, {
      name: 'Valerio',
      song: 'Mr. Brightside',
      artist: 'Killers'
    }];
  }
}
