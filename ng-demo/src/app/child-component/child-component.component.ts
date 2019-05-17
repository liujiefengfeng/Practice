import { Component, Input, OnChanges } from '@angular/core';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnChanges {

  @Input() config;

  private configCopy;
  constructor() {
  }

  ngOnChanges(changes) {
    console.log('ChildComponentComponent');
    console.log(changes);
    console.log(changes.config.currentValue);
    this.configCopy = cloneDeep(changes.config.currentValue);
  }

  addValueToA() {
    this.config.a += 1;
    this.config['K'] = 1;
  }

  resetAll() {
    this.config = cloneDeep(this.configCopy);
  }
}
