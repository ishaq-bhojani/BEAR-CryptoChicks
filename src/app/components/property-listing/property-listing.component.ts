import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-property-listing',
  templateUrl: './property-listing.component.html',
  styleUrls: ['./property-listing.component.css']
})
export class PropertyListingComponent implements OnInit {
  properties = [
    {
      type: 'Shop',
      area: '200 Sq.Feet',
      address: 'Shop # 23, Shahrah-e-Faisal, Karachi',
      highestBid: 'PKR 17,000/-'
    }, {
      type: 'Home',
      area: '120 Sq.Yards',
      address: 'H # 51, Block B, Liaquat Abad, Karachi',
      highestBid: 'PKR 50,000/-'
    }, {
      type: 'Shop',
      area: '600 Sq.Feet',
      address: 'Shop # 23, First floor, Abdullah Mobile Mall, Clifton, Karachi',
      highestBid: 'PKR 30,000/-'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
