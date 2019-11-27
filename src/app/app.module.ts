import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { SocketIoConfig, SocketIoModule} from 'ngx-socket-io';

import { AppComponent } from './app.component';
import { SubscriptionListComponent } from './components/subscription-list/subscription-list.component';
import { CreateSubscriptionComponent } from './components/create-subscription/create-subscription.component';


const config: SocketIoConfig = { url: 'http://localhost:4444', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    SubscriptionListComponent,
    CreateSubscriptionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
