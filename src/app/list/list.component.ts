import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
    <ul class='list'>
      <ng-container *ngFor="let item of items">
        <li *ngIf='!item.view'>{{item.index}}</li>
        <ng-template
          *ngIf='item.view'
          [ngTemplateOutlet]='item.view'
          [ngTemplateOutletContext]='{index: item.index}'>
        </ng-template>
      </ng-container>
    </ul>
  `
})
export class ListComponent {
  @Input()
  items;

  constructor() {}
}
