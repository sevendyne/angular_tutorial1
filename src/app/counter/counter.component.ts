import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count=0;
  increment(){ 
    if(this.count>=0)
    this.count+=1;
  }
  decrement(){
    if(this.count>0)
    this.count-=1;
  }
  reset(){
    this.count=0;
  }
}
