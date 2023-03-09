import { Component, OnInit } from '@angular/core';
import { Subscription, interval, map, take, tap } from 'rxjs';
import { DesignutilityService } from 'src/app/designutility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css'],
})
export class TapComponent implements OnInit {
  constructor(private service: DesignutilityService) {}
  valid: Subscription | any;
  backgroundColor: string = '';

  ngOnInit() {
    let arr = ['mit', 'kaushik', 'umang', 'raj', 'karm'];
    let colorArray = ['red', 'blue', 'green', 'pink'];
    let source = interval(1000);
    // console.log(source)
    this.valid = source
      .pipe(
        take(4),
        map((data) => colorArray[data]),
        tap((data) => {
          this.backgroundColor = data;
          if (data == 'pink') {
            this.valid.unsubscribe();
          } else {
            
          }
        })
      )
      .subscribe((res) => {
        console.log(res);
        this.service.print(res, 'elcontainer');
       
      });
  }
}
