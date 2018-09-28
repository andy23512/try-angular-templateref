import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-list [items]='items'>
      <ng-template #firstItem let-index='index'>
        <app-item [index]='index'></app-item>
      </ng-template>
    </app-list>
  `
})
export class AppComponent implements OnInit {
  @ViewChild('firstItem')
  firstItemTemplate;
  items;
  ngOnInit(): void {
    this.items = [
      { index: 1, view: this.firstItemTemplate },
      { index: 2 },
      { index: 3 }
    ];
  }
}
