import { Component, OnInit } from '@angular/core';
import {Subscription} from '../../models/subscription';
import {SubscriptionService} from '../../services/subscription.service';

@Component({
  selector: 'app-subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.css']
})
export class SubscriptionListComponent implements OnInit {

  subscriptionList: Subscription[];

  constructor(private subscriptionService: SubscriptionService) { }

  ngOnInit() {
    this.subscriptionList = this.subscriptionService.getSubscriptionList();
  }

}
