import { Component } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignutilityService } from 'src/app/designutility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css'],
})
export class OfFromComponent {
  constructor(private service: DesignutilityService) {}

  mydata: object | any = {};

  ngOnInit() {
    let obs = of('Mit', 'Vivek', 'Harsh');
    obs.subscribe((res) => {
      console.warn(res);
      this.service.print(res, 'elContainer');
    });

    let obs2 = of({ name: 'Mit', std: 3, blood: 'A+' });
    obs2.subscribe((res) => {
      console.warn(res);
      this.mydata = res;
    });

    let obs3 = from(['mit', 'vivek', 'harsh']);
    obs3.subscribe((res: any) => {
      console.warn(res);
      this.service.print(res, 'elContainer2');
    });

    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('promise resolved');
      }, 3000);
    });

    const obs4=from(promise)
    obs4.subscribe(res=>{
      console.warn(res);
      
    })

    const obs5=from('mit patel')
    obs5.subscribe(res=>{
      console.warn(res
        );
      
    })
  }
}
