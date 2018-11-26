import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'auction-seller-info',
  templateUrl: './seller-info.component.html',
  styleUrls: ['./seller-info.component.scss']
})
export class SellerInfoComponent implements OnInit {
  sellerId: number;

  constructor(public router: ActivatedRoute) {
    this.sellerId = router.snapshot.params['id'];
  }

  ngOnInit() {

  }

}
