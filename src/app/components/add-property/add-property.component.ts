import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AlertService} from '../../services/alert.service';

declare const $;

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  constructor(private http: HttpClient,
              private alert: AlertService) {
  }

  ngOnInit() {
  }

  addProperty() {
    const data = {
      type: $('#type').val(),
      area: $('#area').val() + ' ' + $('#area-type').val(),
      address: $('#no').val() + ' ' + $('#address').val(),
      highestBid:  $('#price').val(),
      status: true,
      changeDate: '26 April 2019',
    };
    console.log(data);
    this.http.post('/api/addProperty', data)
      .subscribe(() => {
        this.alert.show('Verifying', 'Verifying data by KDA');
        setTimeout(() => {
          this.alert.close();
          this.alert.show('Verifying', 'Verifying data by SBCA');
          setTimeout(() => {
            this.alert.close();
            this.alert.show('Success', 'Property added successfully');
          }, 1000);
        }, 1000);
      });
  }

}
