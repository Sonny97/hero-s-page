import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit {

  hero;

  numberOfLike: number = 0;
  numberOfDislike: number = 0;

  constructor() { 
    this.hero = JSON.parse(localStorage.getItem('heroPos'));
    console.log(this.hero.name);
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

  ngOnInit() {
  }

}
