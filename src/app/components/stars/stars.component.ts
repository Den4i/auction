import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'auction-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {
  @Input() rating = 0;
  @Input() count = 5;
  stars: boolean[] = [];

  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= this.count; i++) {
      this.stars.push(i > this.rating);
    }
  }

}
