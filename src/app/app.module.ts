import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromiseComponent } from './promise/promise.component';
import { ObserverComponent } from './observer/observer.component';
import { ListComponent } from './observer/list/list.component';
import { FormEventComponent } from './observer/form-event/form-event.component';
import { IntervalComponent } from './observer/interval/interval.component';
import { OfFromComponent } from './observer/of-from/of-from.component';
import { ToArrayComponent } from './observer/to-array/to-array.component';
import { CusobsComponent } from './observer/cusobs/cusobs.component';
import { MapComponent } from './observer/map/map.component';
import { PulkComponent } from './observer/pulk/pulk.component';
import { FilterComponent } from './observer/filter/filter.component';
import { TapComponent } from './observer/tap/tap.component';
import { TakeComponent } from './observer/take/take.component';

@NgModule({
  declarations: [
    AppComponent,
    PromiseComponent,
    ObserverComponent,
    ListComponent,
    FormEventComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CusobsComponent,
    MapComponent,
    PulkComponent,
    FilterComponent,
    TapComponent,
    TakeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
