import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  constructor(private httpService: HttpService) { }

  saveKey(inputKey: string) {
    console.log("key: ", inputKey);
    if (inputKey == "mysecretkey") {
      this.httpService.useMyKey = true;
    } else {
      this.httpService.key = inputKey;
    }
  }

  ngOnInit() {
  }

}
