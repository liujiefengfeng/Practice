import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MessageService } from "../message.service";
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnChanges {

  @Input() hei:String;
  @Input() config;

  private configCopy;
  constructor(public messageService: MessageService) { }

  ngOnChanges(changes) {
    console.log('MessagesComponent');
    console.log(changes);
    console.log(changes.config.currentValue);
    this.configCopy = cloneDeep(changes.config.currentValue);
  }

  resetAll() {
    this.config = cloneDeep(this.configCopy);
  }

}
