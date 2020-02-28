import { Injectable } from '@angular/core';
import { Subscription } from '../models/subscription';
import { Socket } from 'ngx-socket-io';
import {SwitchSubscriptionsObject} from '../models/switchSubscriptionsObject';

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

  switchPosition(index1: number, index2: number) {
    const switchPositionObject = new SwitchSubscriptionsObject();

    switchPositionObject.index1 = index1;
    switchPositionObject.index2 = index2;

    this.socket.emit('switchPosition', switchPositionObject);
  }

  constructor(private socket: Socket) {}
}
