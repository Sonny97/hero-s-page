import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  heroes = {};
  selectedHero;

  numberOfLike: number = 0;
  numberOfDislike: number = 0;

  constructor(private dataApi: DataApiService) { 
    this.dataApi.getAllHeroes().subscribe(eachHero => {
      this.heroes = eachHero;
    });
  }

  contLikeClicked(){
    this.numberOfLike++;
    localStorage.setItem('like', JSON.stringify(this.numberOfLike));
  }

  contDislikeClicked(){
    this.numberOfDislike++;
    localStorage.setItem('dislike', JSON.stringify(this.numberOfDislike));
    return this.numberOfDislike;
  }

  getElement(element){
    this.selectedHero = element;
    localStorage.setItem('heroPos', JSON.stringify(this.selectedHero));
  }

  ngOnInit() {
   }
}
