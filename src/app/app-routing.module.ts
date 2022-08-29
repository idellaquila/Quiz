import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect alla home
    { path: '/home', component: HomeComponent }, // rotta alla home
    // { path: 'second-component', component: SecondComponent },
    { path: '**', component: HomeComponent }, // pagina per il  404
  ];
}
