import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  heroes = {};

  constructor(private dataApi: DataApiService) { 
    this.dataApi.getAllHeroes().subscribe(eachHero => {
      console.log(eachHero);
      this.heroes = eachHero;
    });
  }

  ngOnInit() { }
}
