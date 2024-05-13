import { Component, OnInit } from '@angular/core';
import { DealerService } from './dealer.service';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'great';
  listcountry:any;
  constructor(private dealerService:DealerService){}

  ngOnInit(): void {
  }
}
