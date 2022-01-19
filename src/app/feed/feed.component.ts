import { DashboardService } from './../servicosInterface/dashboard.service';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable, catchError, of } from 'rxjs';
import { Dashboard } from '../modelosInterface/dashboard';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {
  cards$: Observable<Dashboard[]>
  usuario={userName: 'Victor Icoma', icone:'remember_me'};
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.cards$;
      }
      return this.cards$;
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dashboardService: DashboardService
    ) {
      this.cards$ = dashboardService.listagemCards()
      .pipe(
        catchError(error =>{
          return of([])
        })
      )
    }
}

// { title: 'O Melhor Livro de Janeiro', img:'../../assets/imagens/1.png', cols: 1, rows: 1 },
// { title: 'Dica dos Leitores', img:'../../assets/imagens/2.png', cols: 1, rows: 1 },
// { title: 'O Mais Comentado da Semana', img:'../../assets/imagens/3.png', cols: 1, rows: 1 },
// { title: 'Indicação do Time BookShelf', img:'../../assets/imagens/4.png', cols: 1, rows: 1 }
