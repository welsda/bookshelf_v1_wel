import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppCadastroComponent } from './app-cadastro/app-cadastro.component';
import { FeedComponent } from './feed/feed.component';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const enviarSemLogin = () => redirectUnauthorizedTo(['/app-app-cadastro'])
//método anônimo

const routes: Routes = [
  {
    path: '', pathMatch:'full', redirectTo:'app-app-cadastro'
  },
  {
    path: 'app-app-cadastro', component: AppCadastroComponent
  },
  {
    path: 'feed', component:FeedComponent,
    ...canActivate(enviarSemLogin) //precisa de ativação pelo cadastro
  }, //roteamento para componente
  {
    path: 'cdd',
    loadChildren: () => import('./cdd/cdd.module').then(c => c.CddModule),
    ...canActivate(enviarSemLogin)
  } //roteamento para módulo
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
