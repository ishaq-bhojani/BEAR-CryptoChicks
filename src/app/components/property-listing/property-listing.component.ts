import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-property-listing',
  templateUrl: './property-listing.component.html',
  styleUrls: ['./property-listing.component.css']
})
export class PropertyListingComponent implements OnInit {
  properties: any = [];
  searchText = '';
  searchFilter = '';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('/api/properties')
      .subscribe((response: any) => {
        this.properties = response;
      }, err => {
        console.log(err);
      });
  }

}
