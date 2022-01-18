import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public pokemon:any;
  public nombrePokemon:any;
  public tipoPokemon:any;
  public noPokemon:any;
  public urlImagenPokemon:any;
  public estado:any = 0; 

  constructor(public api:ApiService) {} //Dentro del constructor se instancia lo que vamos a traer

  buscarPokemon(){
    this.api.getPokemon(this.pokemon).subscribe(data => {  //Llama al metodo y establece una promesa
      this.estado=1;
      //console.log(data); //imprimimos por consola lo que devuelve
      var dataString = JSON.stringify(data);//Convertir el json en un string
      var pokemonJson = JSON.parse(dataString);
      console.log(pokemonJson.name);
      //console.log(pokemonJson.id);
      //console.log(pokemonJson.types[0].type.name);
      //console.log(pokemonJson.sprites.other['official-artwork'].front_default);
      //Enviar el dato al html
      this.nombrePokemon = pokemonJson.name;
      this.tipoPokemon = pokemonJson.types[0].type.name;
      this.noPokemon = pokemonJson.id;
      this.urlImagenPokemon = pokemonJson.sprites.other['official-artwork'].front_default; 
    

    }) 
  }

}
