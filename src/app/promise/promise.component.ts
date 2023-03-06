import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css'],
})
export class PromiseComponent implements OnInit {
  DellAvailable() {
    return false;
  }

  hpAvailable() {
    return true;
  }

  dell = {
    brand: 'Dell',
    hardDisk: '2',
    color: 'black',
  };

  hp = {
    brand: 'hp',
    hardDisk: '4',
    color: 'silver',
  };
   
  nhp=JSON.stringify(this.hp)

  notAvail = {
    brand: 'NA',
    hardDisk: 'NA',
    color: 'NA',
  };

  ngOnInit(): void {
    
    let promise=new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve('data received')
      },5000);
    })
  async function getData() {
    let resonse=await promise;
    console.warn(resonse);
    
  }
  getData();

    let buyLaptop = new Promise((resolve, reject) => {
      // resolve("promise passed");
      if (this.DellAvailable()) {
        setTimeout(() => {
          resolve(this.dell);
        }, 3000);
      } else if (this.hpAvailable()) {
        setTimeout(() => {
          resolve(this.hp);
        }, 3000);
      } else {
        setTimeout(() => {
          reject('laptop not available in the market');
        }, 3000);
      }
    });

    buyLaptop
      .then((res) => {
        console.log('then code=>', res);
      })
      .catch((res) => {
        console.warn('then code=>', res);
      });
  }

  
}
