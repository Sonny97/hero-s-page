import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';
import { PaginatorComponent } from './paginator/paginator.component';
import { HeroComponent } from './hero/hero.component';

/******   Services    *******/
import { DataApiService } from 'src/app/services/data-api.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'hero', component: HeroComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    PaginatorComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
