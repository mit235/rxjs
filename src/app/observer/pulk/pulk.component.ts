import { Component, OnInit } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pulk',
  templateUrl: './pulk.component.html',
  styleUrls: ['./pulk.component.css']
})
export class PulkComponent implements OnInit{

datas:any;
  ngOnInit(){
 let member=from([
  {name:'mit',std:12,education:{school:'ssgm',pr:85.9}},
  {name:'Akshit',std:11,education:{school:'nalanda',pr:87.9}},
  {name:'Milan',std:10,education:{school:'spvm',pr:89.9}},
 ])

 member.pipe(
  // map(data=>data.name),
  // pluck userd for get the object's particular properties...
  pluck('education','school'),
  toArray()
 ).subscribe(res=>{console.log(res)
this.datas=res;

})
  }
}
