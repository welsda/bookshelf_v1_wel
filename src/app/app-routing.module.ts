import { FeedComponent } from './feed/feed.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'feed'},
  {
    path: 'feed', component:FeedComponent
  }, //roteamento para componente
  {
    path:'cdd',
    loadChildren: () => import('./cdd/cdd.module').then(c => c.CddModule)
  } //roteamento para módulo

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
