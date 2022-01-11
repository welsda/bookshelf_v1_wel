import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  private readonly urlAPI='/assets/generos.json';
  //endereço de end-point interno, se fosse externo, seria um http ou afins.

  constructor() { }
}
