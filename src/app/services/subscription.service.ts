import { Injectable } from '@angular/core';
import { Subscription } from '../models/subscription';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  subscriptionList = this.socket.fromEvent<Subscription[]>('subscriptionList');

  saveSubscription(subscription: Subscription) {
    const subscriptionToBeSaved = new Subscription();
    subscriptionToBeSaved.name = subscription.name;
    subscriptionToBeSaved.song = subscription.song;
    subscriptionToBeSaved.artist = subscription.artist;

    this.socket.emit('addSubscription', subscriptionToBeSaved);
  }

  constructor(private socket: Socket) {}
}
