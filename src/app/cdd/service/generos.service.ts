import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  listagemGeneros() {
    return this.clienteDados.get<Generos[]>(this.urlAPI);
  }
}
