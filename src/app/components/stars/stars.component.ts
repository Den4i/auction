import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'auction-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {
  @Input() rating = 0;

  constructor() {
  }

  ngOnInit() {
  }

}
