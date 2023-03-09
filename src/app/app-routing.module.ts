import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { RetryComponent } from './observer/retry/retry.component';

const routes: Routes = [
  { path: 'promise', component: PromiseComponent },

  {
    path: 'obs',
    component: ObserverComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'form-event', component: FormEventComponent },
      { path: 'interval', component: IntervalComponent},
      { path: 'of-from', component:OfFromComponent},
      { path: 'toArray', component:ToArrayComponent},
      { path: 'cusobs', component:CusobsComponent},
      { path: 'map', component:MapComponent},
      { path: 'pulk', component:PulkComponent},
      { path: 'filter', component:FilterComponent},
      { path: 'tap', component:TapComponent},
      { path: 'take', component:TakeComponent},
      { path: 'retry', component:RetryComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
