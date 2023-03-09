import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit{
  
  ngOnInit(){

    let source=interval(1000);
    let condtions=fromEvent(document,'click');
    source.pipe(
      takeUntil(condtions)

    ).subscribe(res=>{
      console.log(res);
      
    })
  }


}
