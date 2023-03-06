import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { ObserverComponent } from './observer/observer.component';
import { ListComponent } from './observer/list/list.component';
import { FormEventComponent } from './observer/form-event/form-event.component';

const routes: Routes = [
  { path: 'promise', component: PromiseComponent },

  {
    path: 'obs',
    component: ObserverComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'form-event', component: FormEventComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
