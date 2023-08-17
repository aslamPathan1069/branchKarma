import { Component } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  color: string = 'red';
  constructor(private apiServiceService: ApiServiceService) {}
  ngOnInit() {
    this.getData();
  }

  getData() {
    var getParams = {};
    this.apiServiceService.getApiCall(getParams).subscribe((response: any) => {
      console.log(response, 'response');
    });
  }
}
