import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { QuestionsComponent } from './Pages/questions/questions.component';
import { ResultsComponent } from './Pages/results/results.component';
import { CardComponent } from './Components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionsComponent,
    ResultsComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
