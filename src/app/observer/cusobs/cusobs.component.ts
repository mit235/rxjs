import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DesignutilityService } from 'src/app/designutility.service';

@Component({
  selector: 'app-cusobs',
  templateUrl: './cusobs.component.html',
  styleUrls: ['./cusobs.component.css'],
})
export class CusobsComponent implements OnInit {
  constructor(private design: DesignutilityService) {}
  techStatus: any;
  ngOnInit(): void {
    const cusobs = Observable.create((observer: any) => {
      setTimeout(() => {
        observer.next('Mit');
      }, 1000);
      setTimeout(() => {
        observer.next('patel');
      }, 2000);

      setTimeout(() => {
        observer.next('TechExtensor');
        // observer.error(new Error('limit reached'))
        observer.complete();
      }, 3000);
    });

    cusobs.subscribe(
      (res: any) => {
        console.warn(res);
        this.design.print(res, 'elContainer');
      },
      (error: any) => {
        this.techStatus = 'error';
      },
      () => {
        this.techStatus = 'completed';
      }
    );
  }
}
