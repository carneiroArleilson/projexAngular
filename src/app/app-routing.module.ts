import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoguinComponent} from './components/loguin/loguin.component'
import {HomeComponent} from './components/home/home.component'
import { ImovelComponent } from './components/imovel/imovel.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/loguin',
    pathMatch: "full"
  },
  {
    path: 'loguin',
    component: LoguinComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'imovel',
    component: ImovelComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
