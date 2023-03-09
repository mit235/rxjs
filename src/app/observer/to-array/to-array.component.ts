import { Component } from '@angular/core';
import { Subscription,interval,take,toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent {

  source:Subscription | any;

arrayData:any;
  ngOnInit():void{
    const obs=interval(1000).pipe(take(4),toArray()).subscribe(res=>{
      console.log(res);
      this.arrayData=res;
    })
   
  }

}
