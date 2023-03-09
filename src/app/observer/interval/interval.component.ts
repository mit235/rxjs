import { Component } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import { DesignutilityService } from 'src/app/designutility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css'],
})
export class IntervalComponent {
  constructor(private design: DesignutilityService) {}
  data: any;
  vedioSubscription: Subscription | any;

  ngOnInit(): void {


    // let brodcast = interval(1000);
    // this.vedioSubscription = brodcast.subscribe((res) => {
    //   console.log(res);
    //   this.data = 'video-' + res;
    //   this.design.print(this.data, 'elContainer');
    //   this.design.print(this.data, 'elContainer2');
    //   this.design.print(this.data, 'elContainer3');
    //   if (res >= 5) {
    //     this.vedioSubscription.unsubscribe();
    //   }
    // });

    let videobroad = timer(5000, 1000);
    this.vedioSubscription=videobroad.subscribe((res) => {
      console.warn(res);
      this.data = 'video-' + res;
      this.design.print(this.data, 'elContainer');
      this.design.print(this.data, 'elContainer2');
      this.design.print(this.data, 'elContainer3');
      if (res >= 5) {
        this.vedioSubscription.unsubscribe();
      }
    });
  }
}
