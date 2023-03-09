import { Component } from '@angular/core';
import { filter, from, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
datas:any;
  ngOnInit(){
    let member=from([
     {name:'mit',std:12,education:{school:'ssgm',pr:85.9}},
     {name:'Akshit',std:11,education:{school:'nalanda',pr:87.9}},
     {name:'Milan',std:10,education:{school:'spvm',pr:89.9}},
    ])
   
    member.pipe(
      pluck('education','pr'),
      filter(data=>data>89),
     toArray()
    ).subscribe(res=>{console.log(res)
   this.datas=res;
   
   })
     }

}
