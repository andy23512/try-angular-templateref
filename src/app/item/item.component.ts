import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  template: `
    <li>Item component {{index}}</li>
  `
})
export class ItemComponent implements OnInit {
  @Input()
  index;

  constructor() {}

  ngOnInit() {}
}
