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
      status: false, // false for closed bidding and true for open bidding
      changeDate: '5 May 2020',
      highestBid: 'PKR 17,000/-'
    },
    {
      type: 'Home',
      area: '120 Sq.Yards',
      address: 'H # 51, Block B, Liaquat Abad, Karachi',
      status: true, // false for closed bidding and true for open bidding
      changeDate: '20 April 2019',
      highestBid: 'PKR 50,000/-'
    },
    {
      type: 'Shop',
      area: '600 Sq.Feet',
      address: 'Shop # 23, First floor, Abdullah Mobile Mall, Clifton, Karachi',
      status: true, // false for closed bidding and true for open bidding
      changeDate: '26 April 2019',
      highestBid: 'PKR 30,000/-'
    }
  ];
  searchText = '';
  searchFilter = '';

  constructor() {
  }

  ngOnInit() {
  }

}
