import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityService {

  constructor() { }
  print(data:string,id:string){
    let el=document.createElement('li');
    el.innerText=data;
    document.getElementById(id)?.appendChild(el)
  }
}
