import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { catchError, Observable, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { AppLoginComponent } from './../app-login/app-login.component';
import { MenuNavegador } from './../modelosInterface/menuNavegador';
import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';
import { NavegacaoService } from './../servicosInterface/navegacao.service';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.scss']
})


export class NavegacaoComponent {
  usuario$ = this.autenticacaoFirebaseService.usuarioLogado$;
  //Itens do menu principal
  logoMenu = '../../assets/imagens/logoBS4.png';
  //Itens de icones e imagrns de navegação
  iconeGeral = '../../assets/imagens/ShelfBook.png'
  lIcone = 80;
  aIcone = 80;
  //Controle das rotas do menu.
  itensMenu$: Observable <MenuNavegador[]>;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public telaLogin: MatDialog,
    private rotas: Router,
    private toast: HotToastService,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService,
    private navegadorService: NavegacaoService
    ) {
      this.itensMenu$ = navegadorService.listagemMenu()
      .pipe(
        catchError(error => {
          return of ([])
          //para não dar erro
        })
      )
    }

    abrirLogin(erroMsg: string){//atribui erroMsg que vem de conteúdo ao data
      this.telaLogin.open(AppLoginComponent,{
        data:erroMsg
      })
    }

    sairUsuario() {
      this.autenticacaoFirebaseService.sairLogin()
      .pipe(
        this.toast.observe({
          success: 'Usuário deslogado com sucesso',
          loading: 'Redirecionando...',
          error: 'Algo deu errado, confira as informações'
        })
      ).subscribe(() =>{
        this.rotas.navigate([''])
        //navegação absoluta é quando não há uma rota estabelecida.
      })
    }
}
