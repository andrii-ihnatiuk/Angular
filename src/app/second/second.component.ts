import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  @Input() name: string | undefined;
  @Output() onMessage = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  change(type : boolean):void {
    this.onMessage.emit(type);
  }
  
}


