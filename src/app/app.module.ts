import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SubscriptionListComponent } from './components/subscription-list/subscription-list.component';
import { CreateSubscriptionComponent } from './components/create-subscription/create-subscription.component';

@NgModule({
  declarations: [
    AppComponent,
    SubscriptionListComponent,
    CreateSubscriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
