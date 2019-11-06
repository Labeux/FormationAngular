import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeDesWookiesComponent } from './liste-des-wookies/liste-des-wookies.component';
import { WookieCreationComponent } from './wookie-creation/wookie-creation.component';
import { JediComponent } from './jedi/jedi.component';


const routes: Routes = [
  {
    path: 'liste-wookies',
    component: ListeDesWookiesComponent
  },
  {
    path: 'creer-wookies',
    component: WookieCreationComponent
  },
  {
    path: 'jedi',
    component: JediComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
