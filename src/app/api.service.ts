import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //importar el cliente http

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public apiUrl= 'https://pokeapi.co/api/v2/pokemon/'; //Definimos la url de la API
  constructor(public htttp:HttpClient) { } //es conveniente dejar esta instancia publcia, para uso posterior

  //Metodo GET
  getPokemon(nombre){
    return this.htttp.get(`${this.apiUrl}${nombre}`); //definimos la url
  }
}
