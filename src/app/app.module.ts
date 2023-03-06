import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromiseComponent } from './promise/promise.component';
import { ObserverComponent } from './observer/observer.component';
import { ListComponent } from './observer/list/list.component';
import { FormEventComponent } from './observer/form-event/form-event.component';

@NgModule({
  declarations: [
    AppComponent,
    PromiseComponent,
    ObserverComponent,
    ListComponent,
    FormEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
