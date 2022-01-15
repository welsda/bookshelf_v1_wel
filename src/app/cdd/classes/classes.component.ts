import { AppDialogosComponent } from './../../app-compartilhado/app-dialogos/app-dialogos.component';
import { GenerosService } from './../service/generos.service';
import { Generos } from './../modelos/generos';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  livrosGeneros$: Observable <Generos[]>;
  visaoColunas = ['_idGenero','nomeGenero','decimalGenero'];

  constructor(
    private generosService: GenerosService,
    public dialogo: MatDialog
    ) {
    //generosService está cinza porque a build nesse momento ainda não foi chamada.
    this.livrosGeneros$ = generosService.listagemGeneros()
    .pipe(
      catchError(error => {//pega erro do console caso o arquivo da tabela não seja carregado.
        this.abrirDialogoErro('Erro ao carregar a tabela: #BS -'+error.status)
        return of([]) //retorna array vazio
      })
    );
    //cifrão indica que a variável é tratada como um Observable.
  }

  abrirDialogoErro(erroMsg: string){//atribui erroMsg que vem de conteúdo ao data
    this.dialogo.open(AppDialogosComponent,{
      data:erroMsg
    })
  }

  ngOnInit(): void {
  }

}
