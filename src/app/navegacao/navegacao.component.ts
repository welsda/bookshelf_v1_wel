import { NavegacaoService } from './../servicosInterface/navegacao.service';
import { MenuNavegador } from './../modelosInterface/menuNavegador';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, catchError, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.scss']
})


export class NavegacaoComponent {
  //Itens do menu principal
  tituloNav = 'BookShelf v1';
  usuario={userName: 'Victor Icoma', icone:'remember_me'};
  //Itens da barra superior.
  tituloBarra = '[Sua Estante Virtual]';
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
}
