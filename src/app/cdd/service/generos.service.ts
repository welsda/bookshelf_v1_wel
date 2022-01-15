import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';
import { Generos } from '../modelos/generos';

//monta variável com padrão http (enderaçamento que passa pelo servidor dns)
//que te traz um json como resposta.

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  private readonly urlAPI='/assets/generos.json';
  //endereço de end-point interno, se fosse externo, seria um http ou afins.
  //readonly só para ler, ninguém pode modificar o end-point.

  constructor(private clienteDados: HttpClient) { }
  //base para trazer httpclient para cliente dados é o urlAPI
  listagemGeneros() {
    return this.clienteDados.get<Generos[]>(this.urlAPI)
    .pipe(
      first(),
      //é um operador de filtragem que emite apenas o primeiro valor ou o primeiro valor
      //que atende a alguma condição especificada emitida pela fonte observável.
      //O operador RxJS first() geralmente é usado quando você está interessado apenas no
      //primeiro item emitido pelo observável de origem ou no primeiro item que atende a alguns critérios.
      //Nesse caso, você pode usar este operador para filtrar o Observable.
      delay(500),
      tap(apiGeneros => console.log(apiGeneros))
      //cria variavel momentanea e reverte informações do padrão json e devolve para o modelo
      //da interface de Generos, descontruindo o Observable pra trabalhar melhor com ele, deixando
      // a informação mais limpa, devolvendo o Obsevable apenas com as propriedades da interface.
    )
  }
}
