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
   fetchCountry(){
    this.dealerService.getDealers().subscribe(data=>{
    this.listcountry = data
    console.log('Countries fetched', this.listcountry)
    })

  }



  ngOnInit(): void {
  }

}
