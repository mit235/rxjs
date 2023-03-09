import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, map } from 'rxjs';
import { DesignutilityService } from 'src/app/designutility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
constructor(private service:DesignutilityService){}

  videoSub: SubmitEvent | any;
  ngOnInit() {
    const brodcastVideo = interval(1000);
    this.videoSub = brodcastVideo
      .pipe(map((data) => data + 1))
      .subscribe((res) => {
        console.warn(res);
      });

    setTimeout(() => {
      this.videoSub.unsubscribe();
    }, 5000);

    const member = from([
      { id: 1, name: 'mit' },
      { id: 2, name: 'jaydip' },
      { id: 3, name: 'dip' },
    ]);
    // member.pipe(
    //   map(data=>data.id==3)
    //   // data transfrom in boolean values
    // ).subscribe(res=>{
    //   console.warn(res);

    // })

    member.pipe(map((data) => data.name)).subscribe((res) => {
      console.warn(res);
      this.service.print(res,'elContainer')
    });
  }
}
