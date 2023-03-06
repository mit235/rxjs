import {
  ElementRef,
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import {DesignutilityService} from 'src/app/designutility.service'

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.css'],
})
export class FormEventComponent implements OnInit,AfterViewInit {
  constructor(private design:DesignutilityService) {}

  @ViewChild('addBtn')
  addBtn!: ElementRef;
  ngOnInit(): void {
   
  }

  ngAfterViewInit(){
    let count=1;
    fromEvent(this.addBtn.nativeElement,'click').subscribe(res=>{
      // console.warn('video'+count++);
      this.design.print('video'+count++,'elContainer2')
      this.design.print('video'+count++,'elContainer')
      
    });
  }
  


}
