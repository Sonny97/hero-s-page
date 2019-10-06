import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  heroes = {}; // catch the api to use in DOM
  selectedHero; // save the position of hero selected

  numberOfLike: number = 0; //save the number of likes in page
  numberOfDislike: number = 0;  //save the number of dislikes in page

  constructor(private dataApi: DataApiService) { 
    /******   Call the method from services to take the API   ********/
    this.dataApi.getAllHeroes().subscribe(eachHero => {
      this.heroes = eachHero;
    });
  }

  /*****    methods is called when someone clicked button like or dislike   ********/
  contLikeClicked(){
    this.numberOfLike++;
    localStorage.setItem('like', JSON.stringify(this.numberOfLike));
  }

  contDislikeClicked(){
    this.numberOfDislike++;
    localStorage.setItem('dislike', JSON.stringify(this.numberOfDislike));
    return this.numberOfDislike;
  }

  //--------    Method getElement take the position and information of hero to save in local storage------//
  getElement(element){
    this.selectedHero = element;
    localStorage.setItem('heroPos', JSON.stringify(this.selectedHero));
  }

  ngOnInit() {
   }
}
