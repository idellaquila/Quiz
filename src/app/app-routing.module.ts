import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { QuestionsComponent } from './Pages/questions/questions.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full' }, // redirect alla home
  { path: 'home', component: HomeComponent }, // rotta alla home
  { path: 'questions', component: QuestionsComponent },
  { path: '**', component: HomeComponent }, // pagina per il  404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
